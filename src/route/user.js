const express = require("express");
const { userController } = require("../controller");
const auth = require("../middleware/Auth");

const router = new express.Router();

router.get("/", function (req, res) {
  res.send("Iu vo nhieu");
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
