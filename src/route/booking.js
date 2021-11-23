const express = require("express");
const { bookingController } = require("../controller");
const auth = require("../middleware/Auth");

const router = new express.Router();

router.post("/booking", auth, bookingController.createBooking);

router.get("/booking", bookingController.getBooking);

router.put("/booking", auth, bookingController.updateBooking);

router.delete("/booking", auth, bookingController.deleteBooking);
module.exports = router;
