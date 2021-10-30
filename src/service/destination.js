const db = require("../models");
const dataConfig = require("../utils/dataConfig");

class destinationService {
  async createDestinationService(req, res) {
    try {
      const Destination = new db.destination(req.body);
      await Destination.save();
      return res.status(201).send({ message: "Destination created!" });
    } catch (e) {
      return res.status(400).send({ message: e });
    }
  }

  async deleteDestinationService(req, res) {
    try {
      const query = req.query.id;
      await db.destination.findByIdAndDelete(query);
      return res.send({ message: "Destination deleted!" });
    } catch (e) {
      return res.status(400).send({ message: e });
    }
  }

  async updateDestinationService(req, res) {
    try {
      const query = req.query.id;
      await db.destination.findByIdAndUpdate(query, req.body);
      return res.send({ message: "Destination updated!" });
    } catch (e) {
      return res.status(400).send({ message: e });
    }
  }

  async getDestinationService(req, res) {
    try {
      const page = req.query.page;
      if (!page) {
        return res.status(400).send({ message: "Please enter page!" });
      }
      // get destination
      const destinations = await db.destination
        .find()
        // limit by 5 records a page
        .limit(5)
        // skip records to another page
        .skip((page - 1) * 5);
      // pagination
      const pagination = await dataConfig.pagination("destination", page, {});
      return res.status(200).send({ destinations, pagination });
    } catch (e) {
      return res.status(400).send({ message: e });
    }
  }
}

module.exports = new destinationService();
