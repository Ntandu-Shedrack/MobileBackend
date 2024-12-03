const express = require("express");
const router = express.Router();

const {
  userRegistration,
  userLogin,
} = require("../controllers/auth.controller");

// Registering User
router.post("/sign_up", userRegistration);

// User Login
router.post("/login", userLogin);

module.exports = router;
