const express = require("express");
const { hotelController } = require("../controller");
const auth = require("../middleware/Auth");

const router = new express.Router();

router.post("/hotel", auth, hotelController.createHotel);

router.get("/hotel", hotelController.getHotel);

router.put("/hotel", auth, hotelController.updateHotel);

router.delete("/hotel", auth, hotelController.deleteHotel);

router.get("/hotel/filter", hotelController.getFilter);

// search hotel & destination
router.get("/hotel-destination", hotelController.searchHotelDestination);


module.exports = router;
