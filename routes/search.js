var express = require("express");
var router = express.Router();
var Listing = require("../models/listing");
var middleware = require("../middleware");

router.get("/search", middleware.isLoggedIn, function(req, res){
  Listing.find({}, function(err, listings){
    if (err) {
      console.log("err");
    }else{
      res.render("search", {listing: listings});
    }
  });
});

module.exports = router;
