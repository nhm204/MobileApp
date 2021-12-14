const express = require("express");
const { couponController } = require("../controller");
const auth = require("../middleware/Auth");

const router = new express.Router();

router.post("/coupon", auth, couponController.createCoupon);

router.get("/coupon", couponController.getCoupon);

router.put("/coupon", auth, couponController.updateCoupon);

router.delete("/coupon", auth, couponController.deleteCoupon);

router.get("/coupon/valid", couponController.checkValidCoupon);

module.exports = router;
