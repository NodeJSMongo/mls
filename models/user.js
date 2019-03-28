var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  brokerage:String,
  phone:mongoose.Schema.Types.Mixed,
  unit: mongoose.Schema.Types.Mixed,
  street:mongoose.Schema.Types.Mixed,
  city: String,
  division: String
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
