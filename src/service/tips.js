const db = require("../models");
const dataConfig = require("../utils/dataConfig");

class tipsService {
  async createTipsService(req, res) {
    try {
      const tips = new db.tips(req.body);
      await tips.save();
      return res.status(201).send({ message: "tips created!" });
    } catch (e) {
      return res.status(400).send({ message: e });
    }
  }

  async deleteTipsService(req, res) {
    try {
      const query = req.query.id;
      await db.tips.findByIdAndDelete(query);
      return res.send({ message: "tips deleted!" });
    } catch (e) {
      return res.status(400).send({ message: e });
    }
  }

  async updateTipsService(req, res) {
    try {
      const query = req.query.id;
      await db.tips.findByIdAndUpdate(query, req.body);
      return res.send({ message: "tips updated!" });
    } catch (e) {
      return res.status(400).send({ message: e });
    }
  }

  async getTipsService(req, res) {
    try {
      const page = req.query.page;
      if (!page) {
        return res.status(400).send({ message: "Please enter page!" });
      }
      // get tips
      const tipss = await db.tips
        .find()
        // limit by 5 records a page
        .limit(5)
        // skip records to another page
        .skip((page - 1) * 5);
      // pagination
      const pagination = await dataConfig.pagination("tips", page, {});
      return res.status(200).send({ tipss, pagination });
    } catch (e) {
      return res.status(400).send({ message: e });
    }
  }
}

module.exports = new tipsService();
