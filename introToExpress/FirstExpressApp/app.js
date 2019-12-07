// Installing and importing express
var express = require("express");
var app = express();

// Routes
app.get("/", function(req, res) {
    res.send("Hi there!");
});

app.get("/bye", function(req, res) {
    res.send("Goodbye!");
});

app.get("/dog", function(req, res) {
    res.send("MEOW!");
});

app.get("/r/:subredditName", function(req, res) {
    var subredditName = req.params.subredditName;
    res.send("WELCOME TO THE " + subredditName.toUpperCase() + " SUBREDDIT");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res) {
    res.send("WELCOME TO THE COMMENTS PAGE!");
});

app.get("*", function(req, res) {
    res.send("YOU ARE A STAR!!!");
});


// Server connectivity
app.listen(3000, function() {
    console.log("Server started!");
});