const express = require("express");
const { roomController } = require("../controller");
const auth = require("../middleware/Auth");

const router = new express.Router();

router.post("/room", auth, roomController.createRoom);

router.get("/room", roomController.getRoom);

router.put("/room", auth, roomController.updateRoom);

router.delete("/room", auth, roomController.deleteRoom);

router.get("/room/best-deal", roomController.getBestDeal);

module.exports = router;
