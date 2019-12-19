var express     = require("express"),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    app         = express(),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment"),
    seedDB      = require("./seeds");




mongoose.connect('mongodb://localhost:27017/yelp_camp', {useNewUrlParser: true});

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
seedDB();


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
            res.render("campgrounds/index", {campgrounds: allCampgrounds});
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
    res.render("campgrounds/new");
});

// SHOW ROUTE - Shows a specific campground
app.get("/campgrounds/:id", function(req, res) {
    // Find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            console.log(foundCampground);
            // render show template with that Campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

// ======================================================
// COMMENTS ROUTES
// ======================================================

app.get("/campgrounds/:id/comments/new", function(req, res) {
    // find a campground by id
    Campground.findById(req.params.id, function(err, campground) {
        if (err) {
            console.log(err);
        } else {
            res.render("comments/new", {campground: campground});
        }
    });
    
});

app.post("/campgrounds/:id/comments", function(req, res) {
    // Lookup campground using id
    Campground.findById(req.params.id, function(err, campground) {
        if (err) {
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            // create new comment
            Comment.create(req.body.comment, function(err, comment) {
                if (err) {
                    console.log(err);
                } else {
                    // connect new comment to campground
                    campground.comments.push(comment);
                    campground.save();
                    // redirect to campgrounds show page
                    res.redirect("/campgrounds/" + campground._id);
                }
            });
        }
    });
});

app.listen(3000, function() {
    console.log("YelpCamp V3 Server Started!");
});