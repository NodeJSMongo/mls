var express = require("express");
var router = express.Router();
var middleware = require("../middleware");

router.get("/search", middleware.isLoggedIn, function(req, res){
  var search_data = [
    {name: "Gulshan", listing: "50"},
    {name: "Uttara", listing: "10"},
    {name: "Khilgoan", listing: "19"},
    {name: "Nilkhet", listing: "35"}
  ]

  res.render("search", {search_data: search_data});
});

module.exports = router;
