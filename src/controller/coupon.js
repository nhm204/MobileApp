const couponService = require("../service/coupon");

class couponController {
  createCoupon(req, res) {
    couponService.createCouponService(req, res);
  }

  deleteCoupon(req, res) {
    couponService.deleteCouponService(req, res);
  }

  updateCoupon(req, res) {
    couponService.updateCouponService(req, res);
  }

  getCoupon(req, res) {
    couponService.getCouponService(req, res);
  }
}

module.exports = new couponController();
