var Listing = require("../models/listing");
var User = require("../models/user");

var middlewareObj = {};

middlewareObj.checkOwnership = function(req, res, next){
    if(req.isAuthenticated()){
      Listing.findById(req.params.id, function(err, findListing){
        if(err || !findListing){
          req.flash("eror", "Lisiting not found");
          res.redirect("back");
        }else{
          if(findListing.author.id.equals(req.user._id)){
              next();
          }else{
            res.redirect("back");
          }
        }
      });
    }else{
      res.redirect("back");
    }
}

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
      return next();
    }
    req.flash("error", "Please Login!");
    res.redirect("/");
}

module.exports = middlewareObj;
