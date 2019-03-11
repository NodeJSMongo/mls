var express = require("express");
var router = express.Router();
var middleware = require("../middleware");

//registration is only for app admin
router.get("/links", function(req, res){
  res.render("links");
});

module.exports = router;
