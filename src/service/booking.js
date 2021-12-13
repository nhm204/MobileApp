const mongoose = require("mongoose");
const db = require("../models");
const dataConfig = require("../utils/dataConfig");

class bookingService {
  async createBookingService(req, res) {
   
      const booking = new db.booking(req.body);
      booking.user = req.user;
      await booking.save();
      const roomId = booking.room;
      const room = await db.room.findById(roomId);
      room.bookings.push(booking._id);
      await room.save();
      return res.status(201).send({ message: "booking created!" });
  }

  async deleteBookingService(req, res) {
    try {
      const query = req.query.id;
      await db.booking.findByIdAndDelete(query);
      return res.send({ message: "booking deleted!" });
    } catch (e) {
      return res.status(400).send({ message: e });
    }
  }

  async updateBookingService(req, res) {
    try {
      const query = req.query.id;
      await db.booking.findByIdAndUpdate(query, req.body);
      return res.send({ message: "booking updated!" });
    } catch (e) {
      return res.status(400).send({ message: e });
    }
  }

  async getBookingService(req, res) {
    try {
      const page = req.query.page;
      if (!page) {
        return res.status(400).send({ message: "Please enter page!" });
      }
      // get booking
      const bookings = await db.booking
        .find()
        // limit by 5 records a page
        .limit(5)
        // skip records to another page
        .skip((page - 1) * 5);
      // pagination
      const pagination = await dataConfig.pagination("booking", page, {});
      return res.status(200).send({ bookings, pagination });
    } catch (e) {
      return res.status(400).send({ message: e });
    }
  }
}

module.exports = new bookingService();
