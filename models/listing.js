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
  parking: mongoose.Schema.Types.Mixed,
  maint: mongoose.Schema.Types.Mixed,
  occupy: String,

  listprice: Number,
  originalprice: Number,
  contractdate: Date,
  expirydate: Date,
  possessiondate: Date,
  holdoverdays: Number,
  sellername: String,
  cbcomm: mongoose.Schema.Types.Mixed,
  ad: String,
  amenities: String,

  exteriortype:String,
  water:String,
  power:String,

  bedroom:mongoose.Schema.Types.Mixed,
  washroom:mongoose.Schema.Types.Mixed,
  kitchen:mongoose.Schema.Types.Mixed,
  level: String,
  ac:String,
  elevator:String,
  measurement: String,

  remarkforclients:String,
  extras:String,
  remarkforbrokers:String,
  laststatus: String,
  desc1: String,
  desc2: String,
  desc3: String,
  desc4: String,
  decimal: String,
  katha: String,
  length: String,
  width: String,
  image: Array,
  usrphn: mongoose.Schema.Types.Mixed,
  usrbrkr: String,
  author:{
    id:{
      type:mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  }
});

module.exports = mongoose.model("Listing", listingSchema);
