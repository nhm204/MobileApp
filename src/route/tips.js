const express = require("express");
const { tipsController } = require("../controller");
const auth = require("../middleware/Auth");

const router = new express.Router();

router.post("/tips", auth, tipsController.createTips);

router.get("/tips", tipsController.getTips);

router.put("/tips", auth, tipsController.updateTips);

router.delete("/tips", auth, tipsController.deleteTips);

module.exports = router;
