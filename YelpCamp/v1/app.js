var express     = require("express"),
    bodyParser  = require("body-parser"),
    app         = express();
    app.set("view engine", "ejs");
    app.use(bodyParser.urlencoded({extended: true}));

var campgrounds = [
    {
        name: "Salmon Creek",
        image: "https://images.unsplash.com/photo-1533873984035-25970ab07461?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80"
    },

    {
        name: "Granite Hill",
        image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    },

    {
        name: "Mountain Goat Rest",
        image: "https://images.unsplash.com/photo-1536650135175-9b3cd4f36cff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    },

    {
        name: "Dark Jungle",
        image: "https://images.unsplash.com/photo-1497900304864-273dfb3aae33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }
];

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res) {
    // get data from form and add to the campgrounds array
    var name = req.body.name;
    var image = req.body.image;

    var newCampground = {name: name, image: image};

    campgrounds.push(newCampground);

    // redirect back to /campgrounds route
    res.redirect("campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
})

app.listen(3000, function() {
    console.log("YelpCamp V1 Server Started!");
});