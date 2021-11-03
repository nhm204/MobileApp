const express = require("express");
const { reviewController } = require("../controller");
const auth = require("../middleware/Auth");

const router = new express.Router();

router.post("/review", auth, reviewController.createReview);

router.get("/review", reviewController.getReview);

router.put("/review", auth, reviewController.updateReview);

router.delete("/review", auth, reviewController.deleteReview);

module.exports = router;
