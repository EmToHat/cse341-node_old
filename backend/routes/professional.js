const express = require('express');

// Line 4: importing the file from controllers
const professionalController = require('../controllers/professional');

const router = express.Router();

// Line 9: Gets the getData function from the file.
router.get('/', professionalController.getData);

module.exports = router;