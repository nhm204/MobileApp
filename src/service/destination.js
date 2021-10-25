const db = require("../models");

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
  
  async getDestinationService(req, res){
      try{
        const destinations = await db.destination.find();
        return res.status(200).send(destinations);
      } catch (e){
        return res.status(400).send({ message: e });
      }
  }
}

module.exports = new destinationService();
