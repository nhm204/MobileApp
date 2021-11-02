const express = require("express");
const { hotelController } = require("../controller");
const auth = require("../middleware/Auth");

const router = new express.Router();

router.post("/hotel", auth, hotelController.createHotel);

router.get("/hotel", hotelController.getHotel);

router.put("/hotel", hotelController.updateHotel);

router.delete("/hotel", hotelController.deleteHotel);

module.exports = router;
