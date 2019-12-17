var mongoose   = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "blah blah blah"
    },
    {
        name: "Desert Mesa",
        image: "https://images.unsplash.com/photo-1478810810369-07072c5ef88b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        description: "blah blah blah"
    },
    {
        name: "Canyon Floor",
        image: "https://images.unsplash.com/photo-1445308394109-4ec2920981b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
        description: "blah blah blah"
    }
]

function seedDB() {
    // Remove all campgrounds
    Campground.remove({}, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("removed campgrounds!");
            // Add few campgrounds
            data.forEach(function(seed) {
                Campground.create(seed, function(err, campground) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("added a campground");
                        // create a comment
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was internet",
                                author: "Homer"
                            }, function(err, comment) {
                                if (err) {
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment");
                                }
                            });
                    }
                });  
            });
        }
    });
}

module.exports = seedDB;