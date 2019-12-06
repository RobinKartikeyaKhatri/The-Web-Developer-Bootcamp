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



// Server connectivity
app.listen(3000, function() {
    console.log("Server started!");
});