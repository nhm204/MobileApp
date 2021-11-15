const express = require("express");
const { destinationController } = require("../controller");
const auth = require("../middleware/Auth");

const router = new express.Router();

router.post("/destination", auth, destinationController.createDestination);

router.get("/destination", destinationController.getDestination);

router.put("/destination", auth, destinationController.updateDestination);

router.delete("/destination", auth, destinationController.deleteDestination);

router.get("/destination/hotels", destinationController.getHotels);

module.exports = router;
