var path = require("path");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var flash = require("connect-flash");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var methodOverride = require("method-override");
var Listing = require("./models/listing");
var User = require("./models/user");

var authRoutes = require("./routes/index");
var secretRoutes = require("./routes/secret");
var searchRoutes = require("./routes/search");
var listingsRoutes = require("./routes/listings");
var linksRoutes = require("./routes/links");
var infoRoutes = require("./routes/info");



// mongodb connection by mongoose client
mongoose.connect("mongodb://mls_app:543TWOone@ds035693.mlab.com:35693/mls", { useNewUrlParser: true })

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());


//Passport configuration

app.use(require("express-session")({
  secret: "Allahoo Allahoo Allahoo",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  res.locals.message = req.flash("error");
  next();
});

app.use(authRoutes);
app.use(secretRoutes);
app.use(searchRoutes);
app.use(listingsRoutes);
app.use(linksRoutes);
app.use(infoRoutes);

app.listen(process.env.PORT || 5000, function(){
  console.log("server connection successful");
});
