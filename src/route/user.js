const express = require("express");
const { userController, otpController } = require("../controller");
const pug = require("pug");
const auth = require("../middleware/Auth");

const router = new express.Router();

// for user
router.post("/user/register", userController.createUser);

router.delete("/user", userController.deleteUser);

router.put("/user", userController.updateUser);

// login
router.post("/user/login", userController.loginUser);

// user profile
router.get("/user/profile", auth, userController.getUserProfile);

// send otp
router.post("/user/send-otp", otpController.handleSendOtp);

// verify otp
router.post("/user/verify-otp", otpController.verifyOtp);

module.exports = router;
