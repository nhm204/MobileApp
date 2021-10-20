const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    bookingId:{
        type: Number,
    },
    room:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "room"
    },
    checkInDate:{
        type: Date,
    },
    checkOutDate:{
        type: Date,
    },
    price:{
        type: Number,
    },
    vat:{
        type: Number,
    },
    couponApplied:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coupon"
    },
    finalPrice:{
        type: Number,
    },
    isPaid:{
        type: Boolean,
    }
  },
  {
    timestamps: true,
  }
);

const booking = mongoose.model("booking", bookingSchema);
module.exports = booking;
