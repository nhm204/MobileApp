const jwt = require("jsonwebtoken");
const db = require("../models");

module.exports = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer", "").trim();
    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedToken) {
      return res.status(401).send({ message: "Not authorized!" });
    }
    req.user = decodedToken;
    next();
  } catch (e) {
    return res
      .status(401)
      .send({ message: "Please log in to use this feature!" });
  }
};
