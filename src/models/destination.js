const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    touristDestination:[{
      image:{
        type: String,
      },
      name:{
        type: String,
      },
      description:{
        type: String,
      }
    }]
  },
  {
    timestamps: true,
  }
);

const Destination = mongoose.model("Destination", destinationSchema);
module.exports = Destination;
