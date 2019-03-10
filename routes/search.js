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

router.post("/search", function(req,res){
  res.redirect("/search/filter");
});

router.get("/search/filter", function(req,res){
  var filteredList = [];
  if(typeof req.query.location != 'undefined'){
    filteredList = Listing.filter(function(listing){
      if(listing.location === true){
        return listing;
      }
      res.render("filter", {listings: listing});
    });
  }else{
    Listing.find({}, function(err, listings){
      if (err) {
        console.log("err");
      }else{
        res.render("filter", {listings: listings});
      }
    });
  }

});

module.exports = router;
