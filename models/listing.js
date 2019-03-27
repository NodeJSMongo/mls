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
  stname: String,
  unit: String,
  exposure: String,
  balcony: String,
  parking: Number,
  maint: Number,

  listprice: Number,
  contractdate: Date,
  expirydate: Date,
  possessiondate: Date,
  holdoverdays: Number,
  sellername: String,

  exteriortype:String,
  water:String,
  power:String,

  bedroom:Number,
  washroom:Number,
  kitchen:Number,
  level: String,
  ac:String,
  elevator:String,
  measurement: String,

  remarkforclients:String,
  extras:String,
  remarkforbrokers:String,
  laststatus: String,

  author:{
    id:{
      type:mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  }
});

module.exports = mongoose.model("Listing", listingSchema);
