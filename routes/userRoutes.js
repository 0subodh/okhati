const express = require('express');
const authController = require('../controllers/authControllers');

const router = express.Router();

router.post('/', authController.signup);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router
  .route('/dashboard')
  .get(authController.protected, authController.dashboard);

module.exports = router;
