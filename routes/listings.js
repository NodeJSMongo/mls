var express = require("express");
var router = express.Router();
var Listing = require("../models/listing");
var middleware = require("../middleware");
//var finalQuery = require("../objects/finalquery");
//Restful API

router.get("/listing", middleware.isLoggedIn, function(req,res){
/*  var areaQuery ={};
  var proQuery = {};
  var saleQuery ={};
  var statusQuery = {};
  var priceQuery = {};
  var roomQuery = {};
  var squareFt = {};
  var outerDesign = {};
  var propertyType = {};
  var lastStatus = {}; */

  var finalQuery = {};
  var noMatch = null;
  var areaQuery = req.query.area;
  var proQuery = req.query.propertyclass;
  var saleQuery = req.query.sale;
  var statusQuery = req.query.status;
  var priceQuery = req.query.listprice;
  var roomQuery = req.query.bedroom;
  var squareFt = req.query.measurement;
  var outerDesign = req.query.level;
  var propertyType = req.query.exteriortype;
  var lastStatus = req.query.laststatus;

  /*var query1 = {proQuery: proQuery};
  var query2 = {proQuery: proQuery, areaQuery: areaQuery};
  var query3 = {proQuery: proQuery, areaQuery: areaQuery, saleQuery: saleQuery};
  var query4 = {proQuery: proQuery, areaQuery: areaQuery, saleQuery: saleQuery, statusQuery: statusQuery};
  var query5 = {proQuery: proQuery, areaQuery: areaQuery, saleQuery: saleQuery, statusQuery: statusQuery, priceQuery: priceQuery};
  var query6 = {proQuery: proQuery, areaQuery: areaQuery, saleQuery: saleQuery, statusQuery: statusQuery, priceQuery: priceQuery, roomQuery: roomQuery};
  var query7 = {proQuery: proQuery, areaQuery: areaQuery, saleQuery: saleQuery, statusQuery: statusQuery, priceQuery: priceQuery, roomQuery: roomQuery, squareFt: squareFt};
  var query8 = {proQuery: proQuery, areaQuery: areaQuery, saleQuery: saleQuery, statusQuery: statusQuery, priceQuery: priceQuery,
    roomQuery: roomQuery, squareFt: squareFt, outerDesign:outerDesign};
  var query9 = {proQuery: proQuery, areaQuery: areaQuery, saleQuery: saleQuery, statusQuery: statusQuery, priceQuery: priceQuery,
    roomQuery: roomQuery, squareFt: squareFt, outerDesign:outerDesign, propertyType: propertyType};
  var query10 = {proQuery: proQuery, areaQuery: areaQuery, saleQuery: saleQuery, statusQuery: statusQuery, priceQuery: priceQuery,
    roomQuery: roomQuery, squareFt: squareFt, outerDesign:outerDesign, propertyType: propertyType, lastStatus: lastStatus}; */


  if(req.query.propertyclass ){
    finalQuery.propertyclass = req.query.propertyclass;
  }

  if(req.query.status){
    finalQuery.status = req.query.status;
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

/*if (proQuery && areaQuery && saleQuery && statusQuery && priceQuery &&
  roomQuery && squareFt && outerDesign && propertyType && lastStatus){
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
  if(proQuery && areaQuery && saleQuery && statusQuery && priceQuery &&
    roomQuery && squareFt && outerDesign && propertyType){
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
    if(proQuery && areaQuery && saleQuery && statusQuery && priceQuery &&
      roomQuery && squareFt && outerDesign){
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
      if(proQuery && areaQuery && saleQuery && statusQuery && priceQuery &&
        roomQuery && squareFt){
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
        if(proQuery && areaQuery && saleQuery && statusQuery && priceQuery &&
          roomQuery){
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
          if(proQuery && areaQuery && saleQuery && statusQuery && priceQuery){
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
            if(proQuery && areaQuery && saleQuery && statusQuery){
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
              if(proQuery && areaQuery && saleQuery){
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
                if(proQuery && areaQuery){
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
                }
              }
            }
          }
        }
      }
    }
  }
} /*


/*  if(proQuery){
    //get all listings from db
  var filter1 =  Listing.find(proQuery, function(err, listings){
    if(filter1.length < 1){
        filter1 = Listing.find({}, function(err, listings){});
      }
      else if(statusQuery){
        var filter2 = filter1.find(statusQuery, function(err, listings){
          if(filter2.length < 1){
              filter2 = Listing.find(areaQuery, function(err, listings){});
            }
          else if(saleQuery){
            var filter3 = filter2.find(saleQuery, function(err, listings){
              if(filter3.length < 1){
                  filter3 = filter1.find(areaQuery, function(err, listings){});
                }
              else if(areaQuery){
                var filter4 = filter3.find(areaQuery, function(err, listings){
                  if(filter4.length < 1){
                      filter4 = filter2.find(proQuery, function(err, listings){});
                    }
                  else if(priceQuery){
                    var filter5 = filter4.find(priceQuery, function(err, listings){
                      if(filter5.length < 1){
                          filter5 = filter3.find(areaQuery, function(err, listings){});
                        }
                        else if(roomQuery){
                          var filter6 = filter5.find(roomQuery, function(err, listings){
                            if(filter6.length < 1){
                              filter6 = filter4.find(areaQuery, function(err, listings){});
                            }
                            else if(squareFt){
                              var filter7 = filter6.find(squareFt, function(err, listings){
                                if(filter7.length < 1){
                                  filter7 = filter5.find(areaQuery, function(err, listings){});
                                }
                                else if(outerDesign){
                                  var filter8 = filter7.find(outerDesign, function(err, listings){
                                    if(filter8.length < 1){
                                      filter8 = filter6.find(areaQuery, function(err, listings){});
                                    }
                                    else if(propertyType){
                                      var filter9 = filter8.find(propertyType, function(err, listings){
                                        if(filter9.length < 1){
                                          filter9 = filter7.find(areaQuery, function(err, listings){});
                                        }
                                        else if(lastStatus){
                                          var filter10 = filter9.find(lastStatus, function(err, listings){
                                            if(filter10.length < 1){
                                              filter10 = filter8.find(areaQuery, function(err, listings){});
                                            }
                                            if(err){
                                              console.log(err);
                                            }else if(listings.length < 1){
                                                var noMatch = "No listing found match that search. Please try again";
                                              }else{
                                                res.render("listing", {listings: listings, noMatch: noMatch});
                                              }
                                          });
                                        }
                                        res.render("listing", {listings: listings, noMatch: noMatch});
                                      });
                                    }
                                    res.render("listing", {listings: listings, noMatch: noMatch});
                                  });
                                }
                                res.render("listing", {listings: listings, noMatch: noMatch});
                              });
                            }
                            res.render("listing", {listings: listings, noMatch: noMatch});
                          });
                        }
                        res.render("listing", {listings: listings, noMatch: noMatch});
                    });
                  }
                  res.render("listing", {listings: listings, noMatch: noMatch});
                });
              }
              res.render("listing", {listings: listings, noMatch: noMatch});
            });
          }
          res.render("listing", {listings: listings, noMatch: noMatch});
        });
      }
      res.render("listing", {listings: listings, noMatch: noMatch});
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
  } */
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
