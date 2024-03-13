const express = require('express');
const openingHoursController = require('../controllers/openingHoursControllers');
const authController = require('../controllers/authControllers');

const router = express.Router();

router
  .route('/')
  .get(openingHoursController.showHours)
  .post(authController.protected, openingHoursController.editHours);

module.exports = router;
