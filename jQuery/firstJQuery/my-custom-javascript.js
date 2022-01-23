"use strict"



let alert2 = $("h1");
$(document).ready(function() {
    alert( alert2.text() );
});
let alert1 = $("hOneId");
console.log(alert1);
$("#hOneId").click(function() {
    alert("hi" +  alert1.text() );
});

$(".liClass").css("border", "1px  solid red");
$(".liClass").css("font-size", "30px");