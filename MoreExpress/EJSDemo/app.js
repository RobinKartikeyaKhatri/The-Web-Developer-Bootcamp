var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function (req, res) {
    var thing = req.params.thing;
    res.render("love.ejs", {thingvar: thing});
});

app.get("/posts", function(req, res) {
    var posts = [
        {title: "My cute cat Coco", author: "Susy"},
        {title: "My adorable dog Boozo", author: "Robin"},
        {title: "All time favorite PS4", author: "Raja"},
        {title: "I like winters", author: "Lalit"},
        {title: "Jay Shree Krishna", author: "Avinash"}
    ];

    res.render("posts.ejs", {posts: posts});
});

app.listen(3000, function() {
    console.log("Server started successfully");
});