$(".sec, .third, .four, .five, .six").hide();

$(".FirstLine").click(function(){
    $(".FirstLine").toggle();
    $(".sec").toggle();
});

$(".secLine").dblclick(function(){
    $(".sec").toggle();
    $(".third").toggle();
    setTimeout(function(){
   $(".tPic").mouseenter(function(){
    $(".third").toggle();
    $(".four").toggle();
});  
}, 2000);
});

/*setTimeout(function(){
   $(".third").mouseenter(function(){
    $(".third").toggle();
    $(".four").toggle();
});  
}, 2000);*/

$(".four").mouseleave(function(){
    $(".five").toggle();
    $(".four").toggle();
    $("body").css("background-color", "blue");
});

$("button").mouseleave(function(){
    $(".five").toggle();
    $(".six").toggle();
    $("body").css("background-color", "gold");
});

$(".last").mouseleave(function(){
    $(".six").toggle();
    $(".FirstLine").toggle();
    $("body").css("background-color", "gold");
});