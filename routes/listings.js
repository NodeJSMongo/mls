var express = require("express");
var router = express.Router();
var Listing = require("../models/listing");
var middleware = require("../middleware");
//Restful API

router.get("/listing", middleware.isLoggedIn, function(req,res){
  var noMatch = null;
  var finalQuery = {};
  if(req.query.propertyclass){
    finalQuery.propertyclass = req.query.propertyclass;
  }
  if(req.query.status){
    finalQuery.status =  req.query.status;
  }
  if(req.query.sale){
    finalQuery.sale =  req.query.sale;
  }
  if(req.query.area){
    finalQuery.area =  req.query.area;
  }

  if(finalQuery){
    //get all listings from db
    Listing.find(finalQuery, function(err, listings){
      if(err){
        console.log(err);
      }else{
        if(listings.length < 1){
          var noMatch = "No listing found match that search. Please try again";
        }
        res.render("listing", {listings: listings, noMatch: noMatch});
      }
    });
  }else{
    //get all listings from db
    Listing.find({}, function(err, listings){
      if(err){
        console.log(err);
      }else{
        res.render("listing", {listings: listings, noMatch: noMatch});
      }
    });
  }
});
// Upload a new listing
router.post("/listing", middleware.isLoggedIn, function(req, res){
  //get the data
  var propertyclass = req.body.propertyclass;
  var status = req.body.status;
  var sale = req.body.sale;

  var division = req.body.division;
  var district = req.body.district;
  var city = req.body.city;
  var area = req.body.area;
  var community = req.body.community;

  var listprice = req.body.listprice;
  var contractdate = req.body.contractdate;
  var expirydate = req.body.expirydate;
  var possessiondate = req.body.possessiondate;
  var holdoverdays = req.body.holdoverdays;
  var sellername = req.body.sellername;

  var exteriortype = req.body.exteriortype;
  var water = req.body.water;
  var power = req.body.power;

  var room = req.body.room;
  var bedroom = req.body.bedroom;
  var washroom = req.body.washroom;
  var kitchen = req.body.kitchen;
  var level = req.body.level;
  var ac = req.body.ac;
  var elevator = req.body.elevator;

  var remarkforclients = req.body.remarkforclients;
  var extras = req.body.extras;
  var remarkforbrokers = req.body.remarkforbrokers;

  var author ={
    id: req.user._id
  }
  var newListing = {
    author: author,
    propertyclass: propertyclass, status: status, sale: sale,
    division: division, district: district, city: city,
    area: area, community: community,
    listprice: listprice, contractdate: contractdate, expirydate: expirydate,
    possessiondate: possessiondate,holdoverdays: holdoverdays, sellername: sellername,
    exteriortype: exteriortype, water: water, power: power,
    room: room, bedroom: bedroom, washroom: washroom, kitchen: kitchen, level: level,
    ac: ac, elevator: elevator,
    remarkforclients: remarkforclients, extras: extras, remarkforbrokers: remarkforbrokers
  }
  //add the data
  Listing.create(newListing, function(err, newlyCreated){
    if(err){
      console.log(err);
    }else{
      //redirect back to listing
      res.redirect("/listing");
    }
  });
});

router.get("/listing/new", middleware.isLoggedIn, function(req, res){
  res.render("new");
});

// show individual listing
router.get("/listing/:id", middleware.isLoggedIn, function(req, res){
  // find the listing id and show the listing template
  Listing.findById(req.params.id, function(err, findListing){
    if(err || !findListing){
      req.flash("error", "Listing not found");
      res.redirect("back");
    }else{
        res.render("show", {listing: findListing});
    }
  });
});

// Edit a listing

  router.get("/listing/:id/edit", middleware.checkOwnership, function(req, res){
      Listing.findById(req.params.id, function(err, findListing){
          res.render("editlisting", {listing: findListing});
      });
  });
// update a listing
router.put("/listing/:id", middleware.checkOwnership, function(req, res){
  //find and update the listings
    //redirect somewhere
  Listing.findByIdAndUpdate(req.params.id, req.body.listing, function(err,updatedListing){
    if(err){
      console.log(err);
    }else{
      res.redirect("/listing/"+ req.params.id);
    }
  });
});

// Delete a listing
router.delete("/listing/:id", middleware.checkOwnership, function(req, res){
Listing.findByIdAndRemove(req.params.id, function(err){
    if(err){
      console.log(err);
    }else{
      res.redirect("/listing");
    }
  });
});

module.exports = router;
