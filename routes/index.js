var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
var middleware = require("../middleware");

//login route for user admin

router.get("/", function(req, res){
  res.render("index", {message: req.flash("error")});
});

// add login logic here
router.post("/", passport.authenticate("local",
  {
    successRedirect: "/info",
    failureRedirect: "/"
  }), function(req, res){

});

// logic for logout route

router.get("/logout", function(req, res){
  req.logout();
  res.redirect("/");
});


module.exports = router;
