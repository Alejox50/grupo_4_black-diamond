const express = require('express');
const userController = require('../controllers/userController.js');

const router = express.Router();

router.get("/login", userController.login)
router.get("/register", userController.register)

router.post("/login", userController.processLogin);
module.exports = router;