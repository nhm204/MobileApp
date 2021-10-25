const destinationService = require("../service/destination");

class destinationController {
  createDestination(req, res) {
    destinationService.createDestinationService(req, res);
  }

  deleteDestination(req, res) {
    destinationService.deleteDestinationService(req, res);
  }

  updateDestination(req, res) {
    destinationService.updateDestinationService(req, res);
  }

  getDestination(req, res){ 
    destinationService.getDestinationService(req, res);
  }
}

module.exports = new destinationController();
