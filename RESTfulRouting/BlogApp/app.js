// App setup and configurations
var express         = require("express"),
    methodOverride  = require("method-override"),
    mongoose        = require("mongoose"),
    bodyParser      = require("body-parser"),
    app             = express();

// DB Connection
mongoose.connect('mongodb://localhost:27017/restful_blog_app', {useNewUrlParser: true});

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));


// Schema setup
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});


// Model setup
var Blog = mongoose.model("Blog", blogSchema);



// RESTful - ROUTES

app.get("/", function(req, res) {
    res.redirect("/blogs");
});

// INDEX Route
app.get("/blogs", function(req, res) {
    // retrieve all blogs from DB
    Blog.find({}, function(err, blogs) {
        if (err) {
            console.log(err);
        } else {
            res.render("index", {blogs: blogs});
        }
    });
});

// NEW Route
app.get("/blogs/new", function(req, res) {
    // Shows a form
    res.render("new");
});

// CREATE Route
app.post("/blogs", function(req, res) {
    // Create blog
    Blog.create(req.body.blog, function(err, newBlog) {
        if(err) {
            res.render("new");
        } else {
            // Redirect user
            res.redirect("/blogs");
        }
    });
});


// SHOW Route
app.get("/blogs/:id", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog) {
        if(err) {
            res.redirect("/blogs");
        } else {
            res.render("show", {blog: foundBlog});
        }
    })
});

// EDIT Route
app.get("/blogs/:id/edit", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog) {
        if (err) {
            res.redirect("/blogs");
        } else {
            res.render("edit", {blog: foundBlog});
        }
    });
});

// UPDATE Route
app.put("/blogs/:id", function(req, res) {
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog) {
        if (err) {
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    });
});


// Server connection
app.listen(3000, function() {
    console.log("RESTful Blog App Server Started!");
});