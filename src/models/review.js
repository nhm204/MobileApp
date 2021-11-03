const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    rating: {
      type: Number,
    },
    content: {
      type: String,
    },
    hotelReview: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "hotel",
    },
  },
  {
    timestamps: true,
  }
);

const review = mongoose.model("review", reviewSchema);
module.exports = review;
