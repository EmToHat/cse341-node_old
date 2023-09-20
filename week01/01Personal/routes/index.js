// express is a web framework for Node.js
const indexRoute = require('express').Router();

const indexController = require('../controllers');

indexRoute.get('/', indexController.getFullName);

module.exports = indexRoute;