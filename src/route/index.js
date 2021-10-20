const user = require("./user");
const express = require("express");

const router = new express.Router();

router.use(user);
// router.use(hotel);

module.exports = router;
