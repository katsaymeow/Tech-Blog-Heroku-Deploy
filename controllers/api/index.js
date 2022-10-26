// this will contain the api paths logic
// router.use('')
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogPostRoutes = require('./blogPostRoutes');

router.use('/users', userRoutes);
router.use('/blogPost', blogPostRoutes);

module.exports = router;