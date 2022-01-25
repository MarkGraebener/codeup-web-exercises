"use strict"



let alert2 = $("h1");
$(document).ready(function() {
    alert( alert2.text() );
});
let alert1 = $("hOneId");
console.log(alert1);
$("#hOneId").click(function() {
    $(".liClass").attr("style","background:orange;border:3px solid #ccc;");
});

$(".liClass").css("border", "1px  solid red").css("font-size", "30px");
// $(".liClass").css("font-size", "30px");
// $(".liClass").attr("style","background:orange;border:3px solid #ccc;")