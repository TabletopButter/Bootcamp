
// setTimeout(function(){

//     $("h1").html("jQuery changed this");
//     $(".sandwich").eq(1).html("It also changed this");
//     $("#para").html("My Changed Paragraph!");


// }, 3000)

$("h1").css("color", "yellow");
$("#burger").css("border","2px solid blue");

var theStyles = {
    backgroundColor: "orange",
    fontSize: "48px",
    border: "4px solid green"
}

$("#burger").css(theStyles);

$("div").css("background", "blue");
$(".fun").css("fontSize", "48px");
$("#food").css("border", "8px solid green");
$("div").eq(0).css("color", "orange");

$("h1").css("color", "yellow");
$("#burger").css("border", "2px solid blue");
var theStyles = {
    background: "orange",
    fontSize: "48px",
    border: "4px solid green"
};
$("#burger").css(theStyles);
$("div").css("backgroundColor", "blue");
$(".fun").css("fontSize", "48px");
$("#food").css("border", "8px solid green");
//$("div").first().css("color", "orange");
$("div:first").css("color", "orange");


// Change the input field to a color picker
// $("input").attr("type", "color");

// Add a green border around the image (add class)
// $("img").addClass("indicator");

//Remove the green border around the image (remove class)
// $("img").removeClass("indicator");

//add class to element but if its already there it will remove it - Toggle
// $("img").toggleClass("indicator");

//add a jquery command that grabs what the user selected for the dropdown list
// $("#temp").val();

// Adds popup on image click - Click Event Jquery
// $("img").click(function(){
//     alert("You clicked on the image");
// });


// only fades the list item you click on "this targets what you click"

// $("li").click(function(){
//     $(this).fadeOut();
// });

$("li").click(function(){
    alert("You clicked on "+$(this).text());
})


// // Popup everytime something is typed in an input field
// $("input").keypress(function(){
//     alert("You are typing");
// })

// $("input").keypress(function(event){
//     console.log(event);
// })


// You hit the enter button when the user hits the enter button when typing in the input box
$("input").keypress(function(event){
    if(event.which===13)
        alert("You hit the enter button");
})


// On passes a jquery event and a function
$("div").on("click", function(){
    alert("You click on a div");
})

$("img").on("dblclick", function(){
    alert("You double clicked on an image!");
})