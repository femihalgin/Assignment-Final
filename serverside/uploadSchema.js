const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema(
  {
   // fname: String,
    title: String,
    description: String,
    file:String
    
      },
  {
    collection: "videoInfo",
  }
);

mongoose.model("videoInfo", uploadSchema);
