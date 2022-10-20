const withAuth = (req, res, next) => {
    if(!req.session.logged_in) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;

// if the user login fails or times out, this will redirect the user to the login page. 