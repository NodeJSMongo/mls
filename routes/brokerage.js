var express = require("express");
var router = express.Router();
var Brokerage = require("../models/brokerage");
var middleware = require("../middleware");

router.get("/profile", middleware.isLoggedIn, function(req,res){
  res.render("profile");
});
// Upload a new listing
router.post("/profile", middleware.isLoggedIn, function(req, res){
  //get the data
  var brokerage = req.body.brokerage;
  var phone = req.body.phone;

  var unit = req.body.division;
  var street = req.body.street;
  var city = req.body.city;
  var division = req.body.division;
  var author ={
    id: req.user._id
  }
  var newProfile = {
    author: author,
    brokerage: brokerage, phone: phone, unit: unit,
    street: street, city: city, division: division
  }
  //add the data
  Brokerage.create(newProfile, middleware.isLoggedIn, function(err, newlyCreated){
    if(err){
      console.log(err);
    }else{
      //redirect back to listing
      res.redirect("/search");
    }
  });
});

router.get("/brokerage/:id", middleware.isLoggedIn, function(req, res){
  // find the listing id and show the listing template
  Brokerage.findById(req.params.id, function(err, findBrokerage){
    if(err){
      req.flash("error", "Listing not found");
      res.redirect("back");
    }else{
        res.render("showProfile", {brokerage: findBrokerage});
    }
  });
});

module.exports = router;
