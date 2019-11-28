$("h1").click(() => {
    alert("h1 clicked!");
})

$("button").click(function() {
    $(this).css("background", "red"); 
})

$("input").keypress(function(evet) {
    if(event.which === 13) {
        alert("You hit return key from keyboard");
    }
})