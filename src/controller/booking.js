const bookingService = require("../service/booking");

class bookingController {
  createBooking(req, res) {
    bookingService.createBookingService(req, res);
  }

  deleteBooking(req, res) {
    bookingService.deleteBookingService(req, res);
  }

  updateBooking(req, res) {
    bookingService.updateBookingService(req, res);
  }

  getBooking(req, res) {
    bookingService.getBookingService(req, res);
  }
}

module.exports = new bookingController();
