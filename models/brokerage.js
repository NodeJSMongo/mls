var mongoose = require("mongoose");
//Schema setup
var brokerageSchema = new mongoose.Schema({
  brokerage:String,
  phone:mongoose.Schema.Types.Mixed,
  unit: mongoose.Schema.Types.Mixed,
  street:mongoose.Schema.Types.Mixed,
  city: String,
  division: String,

  author:{
    id:{
      type:mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  }
});

module.exports = mongoose.model("Brokerage", brokerageSchema);
