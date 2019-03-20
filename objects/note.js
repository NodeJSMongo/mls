var areaQuery ={};
var proQuery = {};
var saleQuery ={};
var statusQuery = {};
var priceQuery = {};
var roomQuery = {};
var squareFt = {};
var outerDesign = {};
var propertyType = {};
var lastStatus = {};

if(req.query.propertyclass){
  proQuery.propertyclass = req.query.propertyclass;
}
if(req.query.status){
  statusQuery.status = req.query.status;
}
if(req.query.sale){
  saleQuery.sale =  req.query.sale;
}
if(req.query.area){
  areaQuery.area = req.query.area;
}
if(req.query.listprice){
  priceQuery.listprice = req.query.listprice;
}
if(req.query.bedroom){
  roomQuery.bedroom = req.query.bedroom;
}
if(req.query.measurement){
  squareFt.measurement = req.query.measurement;
}
if(req.query.level){
  outerDesign.level = req.query.level;
}
if(req.query.exteriortype){
  propertyType.exteriortype = req.query.exteriortype;
}
if(req.query.laststatus){
  lastStatus.laststatus = req.query.laststatus;
}

//get all listings from db
var filter =  Listing.find(proQuery, function(err, listings){
if(listings.length == null){
    filter = Listing.find({}, function(err, listings){});
  }
  if(statusQuery){
     filter = filter.find(statusQuery, function(err, listings){
      if(listings.length == null){
          filter = Listing.find(proQuery, function(err, listings){});
        }
      if(saleQuery){
         filter = filter.find(saleQuery, function(err, listings){
          if(listings.length == null){
              filter = filter.find(statusQuery, function(err, listings){});
            }
          if(areaQuery){
             filter = filter.find(areaQuery, function(err, listings){
              if(listings.length == null){
                  filter = filter.find(saleQuery, function(err, listings){});
                }
              if(priceQuery){
                 filter = filter.find(priceQuery, function(err, listings){
                  if(listings.length == null){
                      filter = filter.find(areaQuery, function(err, listings){});
                    }
                    if(roomQuery){
                       filter = filter.find(roomQuery, function(err, listings){
                        if(listings.length == null){
                          filter = filter.find(priceQuery, function(err, listings){});
                        }
                        if(squareFt){
                           filter = filter.find(squareFt, function(err, listings){
                            if(listings.length == null){
                              filter = filter.find(roomQuery, function(err, listings){});
                            }
                            if(outerDesign){
                               filter = filter.find(outerDesign, function(err, listings){
                                if(listings.length == null){
                                  filter = filter.find(squareFt, function(err, listings){});
                                }
                                if(propertyType){
                                   filter = filter.find(propertyType, function(err, listings){
                                    if(listings.length == null){
                                      filter = filter.find(outerDesign, function(err, listings){});
                                    }
                                    if(lastStatus){
                                       filter = filter.find(lastStatus, function(err, listings){
                                        if(listings.length == null){
                                          filter = filter.find(propertyType, function(err, listings){});
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
                                  });
                                }
                              });
                            }
                          });
                        }
                      });
                    }
                });
              }
            });
          }
        });
      }
    });
  }
});



if(query1){
  //get all listings from db
 Listing.find({query1}, function(err, listings){
  if(err){
    console.log(err);
  }else if(listings.length < 1){
      var noMatch = "No listing found match that search. Please try again";
    }else{
      res.render("listing", {listings: listings, noMatch: noMatch});
    }
  });
}
else if(query2){
  Listing.find(query2, function(err, listings){
    if(err){
      console.log(err);
    }else if(listings.length < 1){
        var noMatch = "No listing found match that search. Please try again";
      }else{
        res.render("listing", {listings: listings, noMatch: noMatch});
      }
  });
}
else if(query3){
  Listing.find(query3, function(err, listings){
    if(err){
      console.log(err);
    }else if(listings.length < 1){
        var noMatch = "No listing found match that search. Please try again";
      }else{
        res.render("listing", {listings: listings, noMatch: noMatch});
      }
  });
}
else if(query4){
  Listing.find(query4, function(err, listings){
    if(err){
      console.log(err);
    }else if(listings.length < 1){
        var noMatch = "No listing found match that search. Please try again";
      }else{
        res.render("listing", {listings: listings, noMatch: noMatch});
      }
  });
}
else if(query5){
  Listing.find(query5, function(err, listings){
    if(err){
      console.log(err);
    }else if(listings.length < 1){
        var noMatch = "No listing found match that search. Please try again";
      }else{
        res.render("listing", {listings: listings, noMatch: noMatch});
      }
  });
}
else if(query6){
  Listing.find(query6, function(err, listings){
    if(err){
      console.log(err);
    }else if(listings.length < 1){
        var noMatch = "No listing found match that search. Please try again";
      }else{
        res.render("listing", {listings: listings, noMatch: noMatch});
      }
  });
}
else if(query7){
  Listing.find(query7, function(err, listings){
    if(err){
      console.log(err);
    }else if(listings.length < 1){
        var noMatch = "No listing found match that search. Please try again";
      }else{
        res.render("listing", {listings: listings, noMatch: noMatch});
      }
    });
  }
else if(query8){
  Listing.find(query8, function(err, listings){
    if(err){
      console.log(err);
    }else if(listings.length < 1){
        var noMatch = "No listing found match that search. Please try again";
      }else{
        res.render("listing", {listings: listings, noMatch: noMatch});
      }
    });
  }
else if(query9){
  Listing.find(query9, function(err, listings){
    if(err){
      console.log(err);
    }else if(listings.length < 1){
        var noMatch = "No listing found match that search. Please try again";
      }else{
        res.render("listing", {listings: listings, noMatch: noMatch});
      }
    });
  }
else if(query10){
  Listing.find(query10, function(err, listings){
    if(err){
      console.log(err);
    }else if(listings.length < 1){
        var noMatch = "No listing found match that search. Please try again";
      }else{
        res.render("listing", {listings: listings, noMatch: noMatch});
      }
    });
  }
