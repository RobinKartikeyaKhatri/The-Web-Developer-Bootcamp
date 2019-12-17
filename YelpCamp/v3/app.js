var express     = require("express"),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    app         = express(),
    Campground  = require("./models/campground"),
    seedDB      = require("./seeds");

seedDB();


mongoose.connect('mongodb://localhost:27017/yelp_camp', {useNewUrlParser: true});

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res) {
    res.render("landing");
});

// INDEX ROUTE - Show all campgrounds
app.get("/campgrounds", function(req, res) {
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds) {
        if (err) {
            console.log("Unable to show all campgrounds");
            console.log(err);
        } else {
            res.render("index", {campgrounds: allCampgrounds});
        }
    });
});

// CREATE ROUTE - Add new campground to the DB
app.post("/campgrounds", function(req, res) {
    // get data from form and add to the campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;

    var newCampground = {name: name, image: image, description: desc};

    // create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreatedCampground) {
        if (err) {
            console.log("Unable to create a campground");
            console.log(err);
        } else {
            // redirect back to /campgrounds route
            res.redirect("/campgrounds");
        }
    });
});

// NEW ROUTE - Show form to create new campground
app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

// SHOW ROUTE - Shows a specific campground
app.get("/campgrounds/:id", function(req, res) {
    // Find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            // render show template with that Campground
            res.render("show", {campground: foundCampground});
        }
    });
});

app.listen(3000, function() {
    console.log("YelpCamp V3 Server Started!");
});