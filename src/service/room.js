const db = require("../models");
const dataConfig = require("../utils/dataConfig");

class roomService {
  async createRoomService(req, res) {
    try {
      const room = new db.room(req.body);
      await room.save();
      return res.status(201).send({ message: "Room created!" });
    } catch (e) {
      return res.status(400).send({ message: e });
    }
  }

  async deleteRoomService(req, res) {
    try {
      const query = req.query.id;
      await db.room.findByIdAndDelete(query);
      return res.send({ message: "Room deleted!" });
    } catch (e) {
      return res.status(400).send({ message: e });
    }
  }

  async updateRoomService(req, res) {
    try {
      const query = req.query.id;
      await db.room.findByIdAndUpdate(query, req.body);
      return res.send({ message: "Room updated!" });
    } catch (e) {
      return res.status(400).send({ message: e });
    }
  }

  async getRoomService(req, res) {
    try {
      const page = req.query.page;
      if (!page) {
        return res.status(400).send({ message: "Please enter page!" });
      }
      // get room
      const rooms = await db.room
        .find()
        // limit by 5 records a page
        .limit(5)
        // skip records to another page
        .skip((page - 1) * 5);
      // pagination
      const pagination = await dataConfig.pagination("room", page, {});
      return res.status(200).send({ rooms, pagination });
    } catch (e) {
      return res.status(400).send({ message: e });
    }
  }
}

module.exports = new roomService();
