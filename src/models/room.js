const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    roomNumber: {
      type: Number,
    },
    typeRoom: {
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
