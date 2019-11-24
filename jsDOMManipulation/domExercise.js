// Come up with 4 different ways to select the first <p> tag

var firstAttempt = document.getElementsByTagName("p")[0];
console.log(firstAttempt, "first p element");

var secondAttempt = document.getElementById("first");
console.log(secondAttempt, "first p element");

var thirdAttempt = document.getElementsByClassName("special")[0];
console.log(thirdAttempt, "first p element");

var fourthAttempt = document.querySelector("p");
console.log(fourthAttempt, "first p element");

var fifthAttempt = document.querySelectorAll("p")[0];
console.log(fifthAttempt, "first p element");

var sixthAttempt = document.querySelector("#first");
console.log(sixthAttempt, "first p element");

var seventhAttempt = document.querySelector(".special");
console.log(seventhAttempt, "first p element");

var eighthAttmpt = document.querySelector("h1 + p");
console.log(eighthAttmpt, "first p element");

var ninthAttempt = document.querySelectorAll("p:nth-of-type(1)")[0];
console.log(ninthAttempt, "first p element");

var tenthAttempt = document.querySelector("p:nth-of-type(1)");
console.log(tenthAttempt, "first p element");

var eleventhAttempt = document.querySelector("body :nth-child(2)");
console.log(eleventhAttempt, "first p element");