// Installation and cofigurations of Packages

var express             = require("express"),
    mongoose            = require("mongoose"),
    bodyParser          = require("body-parser"),
    methodOverride      = require("method-override"),
    expressSanitizer    = require("express-sanitizer"),
    app                 = express();

app.set("view engine", "ejs");
app.use(expressSanitizer());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(methodOverride('_method'));



// DB Connection
mongoose.connect('mongodb://localhost:27017/restful_movie_app', {useNewUrlParser: true});

// DB Schema
var movieSchema = new mongoose.Schema({
    name: String,
    actors: String,
    year: String,
    poster: String,
});

// DB Model
var Movie = mongoose.model("Movie", movieSchema);



// RESTful ROUTES GOES HERE

// INDEX ROUTE
app.get("/", function(req, res) {
    // Fetch all records from DB
    Movie.find({}, function(err, showAllMovies) {
        if(err) {
            console.log(err);
        } else {
            // Render index route
            res.render("index", {movies: showAllMovies});
        }
    });
});

// SHOW ROUTE
app.get("/movies/new", function(req, res) {
    res.render("new");
});

// CREATE ROUTE
app.post("/movies", function(req, res) {
    // Grab form data and send to DB
    var name = req.body.name;
    var actors = req.body.actors;
    var year = req.body.year;
    var poster = req.body.poster;
    var newData = {name: name, actors: actors, year: year, poster: poster};

    Movie.create(newData, function(err, newMovie) {
        if (err) {
            res.redirect("/movies/new");
        } else {
            // Redirect user to index route
            res.redirect("/");
        }
    });
});


// Server Connection
app.listen(3000, function() {
    console.log("MovieApp Server started");
});