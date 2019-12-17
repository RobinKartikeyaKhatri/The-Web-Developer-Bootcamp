var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/blog_demo', {useNewUrlParser: true});

// POST MODEL - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);



// USER MODEL - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);



// User.create(
//     {
//         email: "hermione@hogwarts.edu",
//         name: "Hermione Granger",
//         posts: [
//             {title: "How to brew polyjuice potion", content: "Just kidding. Go to potions class to learn it!"}
//         ]
//     }, function(err, newUser) {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log(newUser);
//         }
// });

// Post.create(
//     {
//         title: "Reflections on Apples",
//         content: "They are delicious"
//     }, 
//     function(err, newPost){
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(newPost);
//         }
// });


User.findOne({name: "Hermione Granger"}, function(err, foundUser) {
    if (err) {
        console.log(err);
    } else {
        foundUser.posts.push({title: "3 Things I really hate", content: "Voldemort. Voldemort. Voldemort. "});
        foundUser.save(function(err, user) {
            if(err) {
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});