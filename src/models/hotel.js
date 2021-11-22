const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    star:{
      type: String,
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
    minPrice: {
      currency:{
        type: String,
        enum: ["USD","VND"],
        default:"USD",
      },
      value:{
        type: Number,
      }
    },
    maxPrice: {
      currency:{
        type: String,
        enum: ["USD","VND"],
        default:"USD",
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
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "review",
      },
    ],
    rating: {
      averageRating: {
        type: Number,
        default: 0,
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
    FreeWifi:{
      type: Boolean,
      default: false,
    },
    SuitableForChildren:{
      type: Boolean,
      default: false,
    },
    Bathtub:{
      type: Boolean,
      default: false,
    },
    Buffet:{
      type: Boolean,
      default: false,
    },
    PetFriendly:{
      type: Boolean,
      default: false,
    },
    NonSmokingRoom:{
      type: Boolean,
      default: false,
    },
    Pool:{
      type: Boolean,
      default: false,
    },
    LaundryService:{
      type: Boolean,
      default: false,
    },
    CarPark:{
      type: Boolean,
      default: false,
    },
    FacilitiesForDisabledPeople:{
      type:Boolean,
      default: false,
    }
  },
  {
    timestamps: true,
  }
);

const hotel = mongoose.model("hotel", hotelSchema);
module.exports = hotel;
