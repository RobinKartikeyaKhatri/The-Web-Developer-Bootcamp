var express     = require("express"),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    app         = express();


mongoose.connect('mongodb://localhost:27017/yelp_camp', {useNewUrlParser: true});

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

// MODEL SETUP
var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//     name: "Granite Hill",
//     image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
// }, function(err, campground) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("newly created campground");
//         console.log(campground);
//     }
// });


app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds) {
        if (err) {
            console.log("Unable to show all campgrounds");
            console.log(err);
        } else {
            res.render("campgrounds", {campgrounds: allCampgrounds});
        }
    });
});

app.post("/campgrounds", function(req, res) {
    // get data from form and add to the campgrounds array
    var name = req.body.name;
    var image = req.body.image;

    var newCampground = {name: name, image: image};

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

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
})

app.listen(3000, function() {
    console.log("YelpCamp V2 Server Started!");
});