const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    hotel:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"hotel"
    },
    roomNumber: {
      type: Number,
    },
    typeRoom: {
      type: String,
    },
    image: {
      type: String,
    },
    maxOfAdult: {
      type: Number,
    },
    maxOfChildren: {
      type: Number,
    },
    price: {
      value:{
        type: Number,
      },
      currency:{
        type: String,
        enum:["USD", "VND"],
        default: "USD",
      },
    },
    isSale:{
      type:Boolean
    },
    specialPrice:{
      value:{
        type: Number,
      },
      currency:{
        type: String,
        enum:["USD", "VND"],
        default: "USD",
      },
    },
    isAvailable: {
      type: Boolean,
    },
    bookings:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: "booking",
    }]
  },
  {
    timestamps: true,
  }
);

const room = mongoose.model("room", roomSchema);
module.exports = room;
