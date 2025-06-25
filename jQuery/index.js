function h1Function(data) {
    var text = data;
    $("h1").css("color", "blue");
    $("h1").addClass("big-title margin-50");
    $("h1").text(text);
}

$("body").keypress(function(event) {
    h1Function(event.key);
})

$("button").click(function() {
    $("h1").slideToggle();
})