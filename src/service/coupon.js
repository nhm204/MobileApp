const db = require("../models");
const dataConfig = require("../utils/dataConfig");

class couponService {
  async createCouponService(req, res) {
    try {
      const coupon = new db.coupon(req.body);
      await coupon.save();
      return res.status(201).send({ message: "Coupon created!" });
    } catch (e) {
      return res.status(400).send({ message: e });
    }
  }

  async deleteCouponService(req, res) {
    try {
      const query = req.query.id;
      await db.coupon.findByIdAndDelete(query);
      return res.send({ message: "Coupon deleted!" });
    } catch (e) {
      return res.status(400).send({ message: e });
    }
  }

  async updateCouponService(req, res) {
    try {
      const query = req.query.id;
      await db.coupon.findByIdAndUpdate(query, req.body);
      return res.send({ message: "Coupon updated!" });
    } catch (e) {
      return res.status(400).send({ message: e });
    }
  }

  async getCouponService(req, res) {
    try {
      const page = req.query.page;
      if (!page) {
        return res.status(400).send({ message: "Please enter page!" });
      }
      // get coupon
      const coupons = await db.coupon
        .find()
        // limit by 5 records a page
        .limit(5)
        // skip records to another page
        .skip((page - 1) * 5);
      // pagination
      const pagination = await dataConfig.pagination("coupon", page, {});
      return res.status(200).send({ coupons, pagination });
    } catch (e) {
      return res.status(400).send({ message: e });
    }
  }
}

module.exports = new couponService();
