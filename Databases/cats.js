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
// var norris = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });

// norris.save(function (err, cat) {
//     if(err) {
//         console.log("Unable to save to database");
//         console.log(err);
//     } else {
//         console.log("We just saved a cat to the database");
//         console.log(cat);
//     }
// });

// Another method to add to the database
Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function(err, cat) {
    if (err) {
        console.log("Unable to save to the database");
        console.log(err);
    } else {
        console.log("cat saved to the database");
        console.log(cat)
    }
});

// retrieve all cats from database
Cat.find({}, function(err, cats) {
    if (err) {
        console.log("Something went wrong");
        console.log(err);
    } else {
        console.log("All the cats");
        console.log(cats);
    }
});