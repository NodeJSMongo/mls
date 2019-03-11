var express = require("express");
var router = express.Router();
var middleware = require("../middleware");

//registration is only for app admin
router.get("/information", function(req, res){
  res.render("information");
});

module.exports = router;
