const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema(
  {
    percent: {
      type: Number,
    },
    maximumDiscount: {
        price:{
          type: Number,
        },
        currency:{
          type: String,
          enum:["USD", "VND"],
          default: "USD",
        },
    },
    minimumInTotal: {
        price:{
          type: Number,
        },
        currency:{
          type: String,
          enum:["USD", "VND"],
          default: "USD",
        },
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
