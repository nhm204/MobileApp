const user = require("./user");
const destination = require("./destination");
const hotel = require("./hotel");
const coupon = require("./coupon");
const room = require("./room");
const review = require("./review");
const tips = require("./tips");
const booking = require("./booking");
const express = require("express");

const router = new express.Router();

router.use(user);
router.use(destination);
router.use(hotel);
router.use(room);
router.use(coupon);
router.use(review);
router.use(tips);
router.use(booking);

module.exports = router;
