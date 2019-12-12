var mongoose = require("mongoose");

// Database connection
mongoose.connect('mongodb://localhost:27017/cat_app', {useNewUrlParser: true});

// Schema
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

// Model
var Cat = mongoose.model("Cat", catSchema);

// adding a new cat to the database

// retrieve all cats from database
