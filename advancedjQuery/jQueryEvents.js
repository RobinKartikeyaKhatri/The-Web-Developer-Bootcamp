$("h1").on("click", function() {
    $(this).css("color", "orange");
});

$("input").on("keypress", function(event) {
    console.log(event.which);
});

$("button").on("mouseenter", function() {
    $(this).css("background", "purple");
});

$("button").on("mouseleave", function() {
    $(this).css("background", "white");
})