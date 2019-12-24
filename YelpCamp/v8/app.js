var express             = require("express"),
    bodyParser          = require("body-parser"),
    mongoose            = require("mongoose"),
    passport            = require("passport"),
    LocalStrategy       = require("passport-local"),
    app                 = express(),
    Campground          = require("./models/campground"),
    Comment             = require("./models/comment"),
    User                = require("./models/user"),
    seedDB              = require("./seeds");

// Requiring Routes
var commentRoutes       = require("./routes/comments"),
    campgroundRoutes    = require("./routes/campgrounds"),
    indexRoutes         = require("./routes/index");


mongoose.connect('mongodb://localhost:27017/yelp_camp', {useNewUrlParser: true});

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

// Seed the Database
// seedDB();

// Passport configuration
app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    next(); 
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);




app.listen(3000, function() {
    console.log("YelpCamp V3 Server Started!");
});