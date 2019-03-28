var express = require("express");
var router = express.Router();
var middleware = require("../middleware");

//login route for user admin

router.get("/info", middleware.isLoggedIn ,function(req, res){
  res.render("info", {message: req.flash("error")});
});


module.exports = router;
