var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/blog_demo_2', {useNewUrlParser: true});

// POST MODEL - title, content
var Post = require("./models/post");

// USER MODEL - email, name
var User = require("./models/user");

Post.create(
    {
        title: "How to cook the best burger pt. 4",
        content: "ASDSDKASLDKLDKLDK"
    }, function(err,post){
        User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
            if (err) {
                console.log(err);
            } else {
                foundUser.posts.push(post);
                foundUser.save(function(err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data);
                    }
                });
            }
        }); 
});




// Find the User
// Find all posts for that user
// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });







// User.create(
//     {
//         email: "bob@gmail.com",
//         name: "Bob Belcher"
//     }, function(err, user) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(user);
//         }
// });