const db = require("../models");

class userService {
  async createUserService(req, res) {
    try {
      const user = new db.user(req.body);
      await user.save();
      return res.status(201).send({ message: "User created!" });
    } catch (e) {
      return res.status(400).send({ message: e });
    }
  }

  async deleteUserService(req, res) {
    try {
      const query = req.query.id;
      await db.user.findByIdAndDelete(query);
      return res.send({ message: "User deleted!" });
    } catch (e) {
      return res.status(400).send({ message: e });
    }
  }

  async updateUserService(req, res) {
    try {
      const query = req.query.id;
      await db.user.findByIdAndUpdate(query, req.body);
      return res.send({ message: "User updated!" });
    } catch (e) {
      return res.status(400).send({ message: e });
    }
  }

  // login
  async loginUserService(req, res) {
    try {
      // Mình đợi kết quả từ việc gọi hàm login, nếu thành công sẽ trả về user, còn thất bại thì sẽ trả null.
      const user = await db.user.login(req.body.email, req.body.password);
      // Nếu như có user thì mình sẽ trả kết quả là đăng nhập thành công.
      if (user) {
        const token = await user.generateToken();
        return res.status(200).send({ message: "Login successfully!", token });
      }
      // Nếu hong thành công mình sẽ thông báo là hong thành công.
      return res
        .status(200)
        .send({ message: "Email or password is incorrect!" });
    } catch (e) {
      return res.status(400).send({ message: e });
    }
  }

  async getUserProfileService(req, res) {
    try {
      const user = await db.user.findById(req.user);
      return res.status(200).send(user);
    } catch (e) {
      return res.status(400).send({ message: e });
    }
  }
}

module.exports = new userService();
