$("h1").addClass("big-title margin-50");

$("h1").text("GoodBye");


$("button").text("don't click me");

$("button").html("<em>Hey</em>");

$("a").attr("href", "https://www.google.bg");

$("button").click(function() {
    $("h1").css("color", "green");
});


$("input").keypress(function(event) {
  console.log(event.key);
});

$(document).keypress(function(event) {
    $("h1").text(event.key);
  });



    $("h1").click("mouseover", function() {
        $("h1").css("color", "purple");
    });

    $("h1").on("click", function() {
        $("h1").slideUp().slideDown().animate({opacity: 0.5});
    });