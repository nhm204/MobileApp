const hotelService = require("../service/hotel");

class hotelController {
  createHotel(req, res) {
    hotelService.createHotelService(req, res);
  }

  deleteHotel(req, res) {
    hotelService.deleteHotelService(req, res);
  }

  updateHotel(req, res) {
    hotelService.updateHotelService(req, res);
  }

  getHotel(req, res) {
    hotelService.getHotelService(req, res);
  }
}

module.exports = new hotelController();
