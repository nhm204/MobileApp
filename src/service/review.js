const db = require("../models");
const dataConfig = require("../utils/dataConfig");

class reviewService {
  async createReviewService(req, res) {
    try {
      const review = new db.review(req.body);
      await review.save();
      return res.status(201).send({ message: "Review created!" });
    } catch (e) {
      return res.status(400).send({ message: e });
    }
  }

  async deleteReviewService(req, res) {
    try {
      const query = req.query.id;
      await db.review.findByIdAndDelete(query);
      return res.send({ message: "Review deleted!" });
    } catch (e) {
      return res.status(400).send({ message: e });
    }
  }

  async updateReviewService(req, res) {
    try {
      const query = req.query.id;
      await db.review.findByIdAndUpdate(query, req.body);
      return res.send({ message: "Review updated!" });
    } catch (e) {
      return res.status(400).send({ message: e });
    }
  }

  async getReviewService(req, res) {
    try {
      const page = req.query.page;
      if (!page) {
        return res.status(400).send({ message: "Please enter page!" });
      }
      // get review
      const reviews = await db.review
        .find()
        // limit by 5 records a page
        .limit(5)
        // skip records to another page
        .skip((page - 1) * 5);
      // pagination
      const pagination = await dataConfig.pagination("review", page, {});
      return res.status(200).send({ reviews, pagination });
    } catch (e) {
      return res.status(400).send({ message: e });
    }
  }
}

module.exports = new reviewService();
