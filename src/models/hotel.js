const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    thumbnails:[{
        type: String,
    }],
    location:{
        type: String,
    },
    description:{
        type: String,
    },
    shortDescription:{
        type: String,
    },
    price:{
        type: Number,
    },
    gallery:[{
        type: String,
    }],
    listOfRooms:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "room",
    }],
    reviews:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "review"
    }],
    rating:{
        averageRating:{
            type: Number,
        },
        quality:{
            type: String,
            enum:["Excellent","Good","Normal","Bad","Very bad"]
        },
        fiveStar:{
            type: Number,
        },
        fourStar:{
            type: Number,
        },
        threeStar:{
            type: Number,
        },
        twoStar:{
            type: Number,
        },
        oneStar:{
            type: Number,
        }
    }
  },
  {
    timestamps: true,
  }
);

const hotel = mongoose.model("hotel", hotelSchema);
module.exports = hotel;
