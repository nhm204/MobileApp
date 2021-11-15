const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    thumbnails: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
    description: {
      type: String,
    },
    shortDescription: {
      type: String,
    },
    price: {
      currency:{
        type: String,
        enum: ["USD","VND"],
        default:"USD",
      },
      value:{
        type: Number,
      }
    },
    specialPrice:{
      currency:{
        type: String,
        enum: ["USD","VND"],
        default: "USD",
      },
      value:{
        type: Number,
      }
    },
    isOnSale:{
      type: Boolean,
      default: false,
    },
    gallery: [
      {
        type: String,
      },
    ],
    destination:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "destination",
    },
    listOfRooms: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "room",
      },
    ],
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "review",
      },
    ],
    rating: {
      averageRating: {
        type: Number,
      },
      quality: {
        type: String,
        enum: ["Excellent", "Good", "Normal", "Bad", "Very bad"],
      },
      fiveStar: {
        type: Number,
      },
      fourStar: {
        type: Number,
      },
      threeStar: {
        type: Number,
      },
      twoStar: {
        type: Number,
      },
      oneStar: {
        type: Number,
      },
    },
  },
  {
    timestamps: true,
  }
);

const hotel = mongoose.model("hotel", hotelSchema);
module.exports = hotel;
