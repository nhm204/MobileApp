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

  async getFilterHotelService(req, res) {
    try {
      const numberOfChildren = req.query.numberOfChildren;
      const numberOfAdult = req.query.numberOfAdult;
      const checkInDate = req.query.checkInDate;
      const checkOutDate = req.query.checkOutDate;
      if (!numberOfChildren || !numberOfAdult || !checkInDate || !checkOutDate){
        return res.status(400).send({message:"Please fill all information!"});
      }
      const {query,roomQuery,bookingQuery} = handleQuery.filter(req);
      // get hotel
      const hotels = await db.hotel.find(query);
      const rooms = await db.room.find(roomQuery);
      console.log(roomQuery);
      console.log(rooms);
      const booking = await db.booking.find(bookingQuery);
      // get room by booking
      rooms.forEach((room, index) => {
        booking.forEach(booking => {
          if (room.id == booking.room){
            rooms.splice(index,1);
          }
        })
      })
      var returnHotels = [];
      // get hotel by room
      hotels.forEach((hotel, index) => {
        rooms.forEach(room => {
          if (hotel.id == room.hotel){
            returnHotels.push(hotel);
          }
        })
      })
      return res.status(200).send({hotels:returnHotels});
    } catch (e) {
      return res.status(400).send({ message: e });
    }
  }
  async getHotelService (req, res) {
    try{
      const page = req.query.page;
      if (!page){
        return res.status(400).send({message:"Please enter page!"});
      }
      const hotels = await db.hotel
        .find()
        // limit by 5 records a page
        .limit(5)
        // skip records to another page
        .skip((page - 1) * 5);
      // pagination
      const pagination = await dataConfig.pagination("hotel", page, {});
      return res.status(200).send({hotels,pagination});
    } catch (e){
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
