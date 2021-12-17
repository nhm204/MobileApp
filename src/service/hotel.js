const db = require("../models");
const dataConfig = require("../utils/dataConfig");
const handleQuery = require("../utils/handleQuery");

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
      const {query,roomQuery,bookingQuery} = handleQuery.filter(req);
      // get hotel
      const hotels = await db.hotel.find(query);
      const rooms = await db.room.find(roomQuery);
      const booking = await db.booking.find(bookingQuery);
      rooms.forEach((room, index) => {
        booking.forEach(booking => {
          if (room.id == booking.room){
            rooms.splice(index,1);
          }
        })
      })
      hotels.forEach((hotel, index) => {
        rooms.forEach(room => {
          if (hotel.id == room.hotel){
            hotels.splice(index,1);
          }
        })
      })
      return res.status(200).send({hotels});
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


}

module.exports = new hotelService();
