var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily", "Lalit", "Avinash"];

app.get("/", function (req, res) {
    res.render("home");
});

app.post("/addfriend", function(req, res) {
    var newfriend = req.body.newfriend;
    friends.push(newfriend);
    res.redirect("/friends");
});

app.get("/friends", function (req, res) {
    res.render("friends", {friends: friends});
})

app.listen(3000, function () {
    console.log("Server started!!!");
});