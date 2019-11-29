// Check off Specific Todos by clicking
$("li").click(function() {
    $(this).toggleClass("completed");
});

// Click on X to delete Todo
$("span").click(function (event) {
    $(this).parent().fadeOut(300, function () {
        $(this).remove();
    });
    event.stopPropagation();
});