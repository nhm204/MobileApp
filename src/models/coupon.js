const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema(
  {
    value: {
      type: Number,
    },
    code:{
      type: String,
    },
    validFrom: {
      type: Date,
    },
    validTo: {
      type: Date,
    },
    appliedHotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "hotel",
    },
    isUsed:{
      type: Boolean,
    }
  },
  {
    timestamps: true,
  }
);

const coupon = mongoose.model("coupon", couponSchema);
module.exports = coupon;
