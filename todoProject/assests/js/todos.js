// Check off Specific Todos by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(300, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

// Add todo
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        var todoText =  $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
    }
});