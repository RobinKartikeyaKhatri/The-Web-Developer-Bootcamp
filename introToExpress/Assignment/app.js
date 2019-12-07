// Importing and configuration
var express = require("express");
var app = express();


// Routes
app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
    var animal = req.params.animal.toLowerCase();
    
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        goldfish: "...",
        cat: "I hate you human!"
    }

    var sound = sounds[animal];

    res.send(`The ${animal} says '${sound}'`);
});

app.get("/repeat/:message/:times", function(req, res) {
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";

    for (var i = 0; i < times; i++) {
        result += message + "\t";
    }
    res.send(result);
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?");
});


// Server connection
app.listen(3000, function () {
    console.log("Server started successfully");
});