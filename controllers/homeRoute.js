const router = require('express').Router();
// add model const
const { BlogPost, User } = require('../models');
// add auth require path
const withAuth = require('../utils/auth');

// get all blog posts and render to the dashboard
router.get('/', async (req, res) => {
    try {
        const allBlogPost = await BlogPost.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });
        // serialize data for template
        const allPosts = allBlogPost.map((posts) => posts.get({ plain: true }));
console.log(allPosts);
        res.render('homepage', {
            allPosts,
            logged_in: req.session.logged_in
        });
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/blogPost/:id', async (req, res) => {
    try {
        const allBlogPost = await BlogPost.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['names'],
                },
            ],
        });
        const allPost = allBlogPost.get({ plain: true });

        res.render('blogPost', {
            allPost,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// this will handle the login and redirect if not logged in. 

//middleware based on session id
router.get('/profile', withAuth, async (req, res) => {
    try {
        // finding the user with session id
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: BlogPost }],
        });

        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// redirect user if logged in.
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }
    res.render('login');
});

module.exports = router;