const userService = require("../service/user");

class userController {
  createUser(req, res) {
    userService.createUserService(req, res);
  }

  deleteUser(req, res) {
    userService.deleteUserService(req, res);
  }

  updateUser(req, res) {
    userService.updateUserService(req, res);
  }

  loginUser(req, res) {
    userService.loginUserService(req, res);
  }

  getUserProfile(req, res) {
    userService.getUserProfileService(req, res);
  }
}

module.exports = new userController();
