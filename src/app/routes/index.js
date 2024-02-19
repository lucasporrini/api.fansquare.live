const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Définissez vos routes ici
router.get('/', mainController.homePage);

// Exportez le routeur
module.exports = router;