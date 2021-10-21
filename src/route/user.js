const express = require("express");
const { userController } = require("../controller");
const pug = require("pug");
const auth = require("../middleware/Auth");

const router = new express.Router();

// landing page
router.get('/', (req, res) => {
    res.render("views/home");
});

// for user
router.post("/user", userController.createUser);

router.delete("/user", userController.deleteUser);

router.put("/user", userController.updateUser);

// login
router.post("/user/login", userController.loginUser);

// user profile
router.get("/user/profile", auth, userController.getUserProfile);

module.exports = router;
