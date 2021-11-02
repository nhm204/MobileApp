const express = require("express");
const { roomController } = require("../controller");
const auth = require("../middleware/Auth");

const router = new express.Router();

router.post("/room", auth, roomController.createRoom);

router.get("/room", roomController.getRoom);

router.put("/room", roomController.updateRoom);

router.delete("/room", roomController.deleteRoom);

module.exports = router;
