const user = require("./user");
const destination = require("./destination");
const express = require("express");

const router = new express.Router();

router.use(user);
router.use(destination);
// router.use(hotel);

module.exports = router;
