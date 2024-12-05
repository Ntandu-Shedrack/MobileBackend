const express = require("express");
const router = express.Router();

const {
  userRegistration,
  userLogin,
  requestPasswordReset,
  resetPassword,
  getUserProfile,
} = require("../controllers/auth.controller");

// Authentication Routes
router.post("/sign_up", userRegistration);
router.post("/login", userLogin);

// Password Reset Routes
router.post("/request-password-reset", requestPasswordReset);
router.post("/reset-password/:token", resetPassword);
router.get("/user/profile", getUserProfile);

module.exports = router;
