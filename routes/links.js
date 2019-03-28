var express = require("express");
var router = express.Router();
var middleware = require("../middleware");

//login route for user admin

router.get("/links",middleware.isLoggedIn, function(req, res){
  res.render("links", {message: req.flash("error")});
});


module.exports = router;
