var express = require("express");
var router = express.Router();
var multer =  require("multer");
var path = require("path");
var Listing = require("../models/listing");
var middleware = require("../middleware");
var math = require("mathjs");

var randomNumber = Math.floor(Math.random() * 100000);

var storage = multer.diskStorage({
  destination: 'public/uploads/',
  filename: function(req, file, cb){
    cb(null, file.fieldname + '-' + randomNumber + path.extname(file.originalname));
  }
});

/* var fileFilter = function(req, file, cb){
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
    cb(null, true);
  }else{
    cb(null, false);
  }
} */

var upload = multer({
  storage: storage
}).single('image');


//var finalQuery = require("../objects/finalquery");
//Restful API

router.get("/listing", middleware.isLoggedIn, function(req,res){

  var finalQuery = {};
  var noMatch = null;

  var areaQuery = req.query.area;
  var proQuery = req.query.propertyclass;
  var priceQuery = req.query.listprice;
  var saleQuery = req.query.sale;
  var statusQuery = req.query.status;
  var roomQuery = req.query.bedroom;
  var squareFt = req.query.measurement;
  var outerDesign = req.query.level;
  var propertyType = req.query.exteriortype;
  var lastStatus = req.query.laststatus;


  if(req.query.propertyclass ){
    finalQuery.propertyclass = req.query.propertyclass;
  }

  if(req.query.status){
    finalQuery.status = req.query.status;
  }

  if(req.query.sale){
    finalQuery.sale = req.query.sale;
  }

  if(req.query.area){
    finalQuery.area = req.query.area;
  }
  if(req.query.listprice){
    finalQuery.listprice = req.query.listprice;
  }
  if(req.query.bedroom){
    finalQuery.bedroom = req.query.bedroom;
  }
  if(req.query.measurement){
    finalQuery.measurement = req.query.measurement;
  }
  if(req.query.level){
    finalQuery.level = req.query.level;
  }
  if(req.query.exteriortype){
    finalQuery.exteriortype = req.query.exteriortype;
  }
  if(req.query.laststatus){
    finalQuery.laststatus = req.query.laststatus;
  }

  if(proQuery || areaQuery || saleQuery || statusQuery || priceQuery ||
    roomQuery || squareFt || outerDesign || propertyType || lastStatus){
    console.log(finalQuery);
    Listing.find(finalQuery, function(err, listings){
      if(err){
        console.log(err);
      }else{
          if(listings.length < 1){
            var noMatch = "You must select a search criteria to a filtered listing. Please try again";
          }
          res.render("listing", {listings: listings, noMatch: noMatch});
      }
    });
  }else{
    Listing.find({}, function(err, listings){
      if(err){
        console.log(err);
      }else{
          if(listings.length < 1){
            var noMatch = "You must select a search criteria to a filtered listing. Please try again";
          }
          res.render("listing", {listings: listings, noMatch: noMatch});
      }
    });
  }

});
//upload.single('image'),
// Upload a new listing
router.post("/listing", upload,  middleware.isLoggedIn, function(req, res){
  //get the data
  var propertyclass = req.body.propertyclass;
  var sale = req.body.sale;

  var division = req.body.division;
  var district = req.body.district;
  var city = req.body.city;
  var area = req.body.area;
  var community = req.body.community;
  var stname = req.body.stname;
  var unit = req.body.unit;
  var exposure = req.body.exposure;
  var balcony = req.body.balcony;
  var parking = req.body.parking;
  var maint = req.body.maint;
  var occupy = req.body.occupy;

  var listprice = req.body.listprice;
  var originalprice = req.body.originalprice;
  var contractdate = req.body.contractdate;
  var expirydate = req.body.expirydate;
  var possessiondate = req.body.possessiondate;
  var holdoverdays = req.body.holdoverdays;
  var sellername = req.body.sellername;
  var cbcomm = req.body.cbcomm;
  var ad = req.body.ad;
  var amenities = req.body.amenities;

  var exteriortype = req.body.exteriortype;
  var water = req.body.water;
  var power = req.body.power;

  var bedroom = req.body.bedroom;
  var washroom = req.body.washroom;
  var kitchen = req.body.kitchen;
  var level = req.body.level;
  var ac = req.body.ac;
  var elevator = req.body.elevator;
  var measurement = req.body.measurement;

  var remarkforclients = req.body.remarkforclients;
  var extras = req.body.extras;
  var remarkforbrokers = req.body.remarkforbrokers;

  var status = req.body.status;
  var laststatus = req.body.laststatus;
  var image = req.file.path;
  var desc1 = req.body.desc1;
  var desc2 = req.body.desc2;
  var desc3 = req.body.desc3;
  var desc4 = req.body.desc4;
  var decimal = req.body.decimal;
  var katha = req.body.katha;
  var length = req.body.length;
  var width = req.body.width;

  var author ={
    id: req.user._id
  }
  var newListing = {
    author: author,
    propertyclass: propertyclass, status: status, sale: sale,
    division: division, district: district, city: city,
    area: area, community: community,
    listprice: listprice, contractdate: contractdate, expirydate: expirydate, cbcomm: cbcomm,
    possessiondate: possessiondate,holdoverdays: holdoverdays, sellername: sellername,
    exteriortype: exteriortype, water: water, power: power,
    bedroom: bedroom, washroom: washroom, kitchen: kitchen, level: level,
    ac: ac, elevator: elevator, ad: ad, amenities: amenities,
    remarkforclients: remarkforclients, extras: extras, remarkforbrokers: remarkforbrokers,
    laststatus: laststatus, measurement:measurement, stname: stname,
    unit: unit, exposure: exposure, balcony: balcony, parking: parking, maint: maint, occupy:occupy,
    desc1: desc1, desc2: desc2, desc3: desc3, desc4: desc4, decimal: decimal, katha: katha, length: length,
    width: width, originalprice: originalprice, image: image
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
