const router = require('express').Router();
const { BlogPost } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newBlogPost = await BlogPost.create({
            name: post_name.req.body,
            blog_body: blog_body.req.body,
            date_created: date_created.req.body,
            // I am sure this will check to make sure the user is a logged in user. 
            user_id: req.session.user_id,
        });
        res.status(200).json(newBlogPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (res, req) => {
    try {
    const blogPostDeleted = await BlogPost.destroy({
        where: {
        id: req.body.id,
        user_id: req.session.user_id,
    },
    });
    if (!blogPostDeleted) {
        res.status(404).json({ message: 'Sorry, that post is already deleted.' });
        return;
    }
    res.status(200).json(blogPostDeleted);
} catch (err) {
    res.status(500).json(err);
}
})

module.exports = router;