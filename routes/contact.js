const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

//importing the controller
const contactController = require('../controllers/contact');
const successController = require('../controllers/success');

const router = express.Router();

// Route to handle GET request to show the contact form
router.get('/contactus', contactController.getContactUs);

// Route to handle POST request when form is submitted
router.post('/contactus', contactController.postContactUs);

// Route to display success message
router.get('/success', successController.getSuccess);

module.exports = router;
