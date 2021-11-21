const mongoose = require("mongoose");

const tipsSchema = new mongoose.Schema(
  {
    name:{
      type: String
    },
    destination:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "destination"
    },
    image:{
      type: String,
    },
    description:{
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const tips = mongoose.model("tips", tipsSchema);
module.exports = tips;
