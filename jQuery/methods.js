// console.log($("h1").text());

// console.log($("ul").text());

// console.log($("li").text());

// console.log($("h1").text("New Text Value"));

// console.log($("li").text("Rusty, Colt's dog, is adorable"));

console.log($("ul").html());

$("ul").html("<li>I hacked your ul</li><li>Rusty steele adorable</li>");

$("li").html("<a href='http://www.google.com'>Google</a><a href='http://www.yahoo.com'>Yahoo</a>");

// $("img").attr("src", "http://www.drewmonkman.com/wp-content/uploads/2019/02/Pine-Martin-teeth-Donald-Munro-e1549714519139.jpg");

$("img:first-of-type").attr("src", "http://www.drewmonkman.com/wp-content/uploads/2019/02/Pine-Martin-teeth-Donald-Munro-e1549714519139.jpg");

$("img").last().attr("src", "http://www.drewmonkman.com/wp-content/uploads/2019/02/Pine-Martin-teeth-Donald-Munro-e1549714519139.jpg");

$("img").attr("src", "https://i2-prod.chroniclelive.co.uk/incoming/article15055901.ece/ALTERNATES/s615/0_HKR_NEC_180818Pine_01.jpg");

console.log($("input").val());

$("h1").addClass("correct");
$("h1").removeClass("correct");

$("li").addClass("wrong");
$("li").removeClass("wrong");
$("li").addClass("correct");
$("li").toggleClass("correct");
$("li").first().toggleClass("done");