const roomService = require("../service/room");

class roomController {
  createRoom(req, res) {
    roomService.createRoomService(req, res);
  }

  deleteRoom(req, res) {
    roomService.deleteRoomService(req, res);
  }

  updateRoom(req, res) {
    roomService.updateRoomService(req, res);
  }

  getRoom(req, res) {
    roomService.getRoomService(req, res);
  }
}

module.exports = new roomController();
