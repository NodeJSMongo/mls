var mongoose = require("mongoose");
//Schema setup
var listingSchema = new mongoose.Schema({
  name: String,
  location: String,
  author:{
    id:{
      type:mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  }
});

module.exports = mongoose.model("Listing", listingSchema);
