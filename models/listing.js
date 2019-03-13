var mongoose = require("mongoose");
//Schema setup
var listingSchema = new mongoose.Schema({
  propertyclass:String,
  status:String,
  sale:String,

  division: String,
  district: String,
  city: String,
  area: String,
  community: String,

  listprice: Number,
  contractdate: Date,
  expirydate: Date,
  possessiondate: Date,
  holdoverdays: Number,
  sellername: String,

  exteriortype:String,
  water:String,
  power:String,

  room:Number,
  bedroom:Number,
  washroom:Number,
  kitchen:Number,
  level: String,
  ac:String,
  elevator:String,

  remarkforclients:String,
  extras:String,
  remarkforbrokers:String,

  author:{
    id:{
      type:mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  }
});

module.exports = mongoose.model("Listing", listingSchema);
