const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    roomNumber: {
      type: Number,
    },
    typeRoom: {
      type: String,
    },
    capacity: {
      type: Number,
    },
    maxOfAdult: {
      type: Number,
    },
    maxOfChildren: {
      type: Number,
    },
    price: {
      type: Number,
    },
    isAvailable: {
      type: Boolean,
    },
    availableFromDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const room = mongoose.model("room", roomSchema);
module.exports = room;
