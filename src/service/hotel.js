const db = require("../models");
const dataConfig = require("../utils/dataConfig");

class hotelService {
  async createHotelService(req, res) {
    try {
      const hotel = new db.hotel(req.body);
      await hotel.save();
      return res.status(201).send({ message: "Hotel created!" });
    } catch (e) {
      return res.status(400).send({ message: e });
    }
  }

  async deleteHotelService(req, res) {
    try {
      const query = req.query.id;
      await db.hotel.findByIdAndDelete(query);
      return res.send({ message: "Hotel deleted!" });
    } catch (e) {
      return res.status(400).send({ message: e });
    }
  }

  async updateHotelService(req, res) {
    try {
      const query = req.query.id;
      await db.hotel.findByIdAndUpdate(query, req.body);
      return res.send({ message: "hotel updated!" });
    } catch (e) {
      return res.status(400).send({ message: e });
    }
  }

  async getHotelService(req, res) {
    try {
      const page = req.query.page;
      if (!page) {
        return res.status(400).send({ message: "Please enter page!" });
      }
      // get hotel
      const hotels = await db.hotel
        .find()
        // limit by 5 records a page
        .limit(5)
        // skip records to another page
        .skip((page - 1) * 5);
      // pagination
      const pagination = await dataConfig.pagination("hotel", page, {});
      return res.status(200).send({ hotels, pagination });
    } catch (e) {
      return res.status(400).send({ message: e });
    }
  }

  async searchHotelDestinationService(req, res) {
    try{
      const search = req.query.query;
      if (!search){
        return res.status(400).send({message: "Please provide query!"});
      }
      const searchHotel = await db.hotel.find({name: new RegExp(search,'gi')});
      const searchDestination = await db.destination.find({name: new RegExp(search,'gi')});
      const returnData = searchHotel.concat(searchDestination);
      return res.send(returnData);
    } catch (e){
      return res.status(400).send({ message: e });
    }
  }

  async getBestDealService(req, res) {
    try{
      const hotels = await db.hotel.find({isOnSale:true}).sort(price.value);
      return res.send(hotels);
    } catch (e){
      return res.status(400).send({ message: e });
    }
  }

}

module.exports = new hotelService();
