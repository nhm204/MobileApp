const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema(
  {
    percent: {
      type: Number,
    },
    maximum: {
      type: Number,
    },
    minimum: {
      type: Number,
    },
    appliedHotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "hotel",
    },
  },
  {
    timestamps: true,
  }
);

const coupon = mongoose.model("coupon", couponSchema);
module.exports = coupon;
