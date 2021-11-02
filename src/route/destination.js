const express = require("express");
const { destinationController } = require("../controller");
const auth = require("../middleware/Auth");

const router = new express.Router();

router.post("/destination", auth, destinationController.createDestination);

router.get("/destination", destinationController.getDestination);

router.put("/destination", destinationController.updateDestination);

router.delete("/destination", destinationController.deleteDestination);

module.exports = router;
