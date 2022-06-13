const express = require('express');
const usersController = require('../controllers/usersController.js');

const router = express.Router();

router.get("/login", usersController.login)
router.get("/register", usersController.register)

module.exports = router;