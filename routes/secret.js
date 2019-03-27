var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
var middleware = require("../middleware");

//registration is only for app admin
router.get("/bdmlsregistration", function(req, res){
  res.render("registration");
});

router.post("/bdmlsregistration", function(req, res){
  var newUser = new User({username: req.body.username});
  User.register(newUser, req.body.password, function(err, user){
    if(err){
      console.log(err);
      return res.render("registration");
    }
    passport.authenticate("local")(req, res, function(){
      res.redirect("/");
    });
  });
});

router.get("/bdmlsregistration/:id", middleware.isLoggedIn, function(req, res){
  // find the listing id and show the listing template
  User.findById(req.params.id, function(err, findUser){
    if(err){
      req.flash("error", "Listing not found");
      res.redirect("back");
    }else{
        res.render("showUser", {user: findUser});
    }
  });
});
module.exports = router;
