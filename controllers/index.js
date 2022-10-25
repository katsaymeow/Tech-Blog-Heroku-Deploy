//this will contain the route logic for the controllers folder

const router = require('express').Router();

const apiRoute = require('./api');
const homeRoute = require('./homeRoute');

router.use('/', homeRoute);
router.use('/', apiRoute);

module.exports = router;

// I am not sure I have connected the routes correctly here.