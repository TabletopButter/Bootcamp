$(document).ready(function() {

    $("#lbs").on('propertychange input keyup', function(){
    let lbs=$(this).val();
    $("#kg").val(lbs*.453592)
})

$("#kg").on('propertychange input keyup', function(){
    let kg=$(this).val();
    $("#lbs").val(kg*2.20462)
})

$("#miles").on('propertychange input keyup', function(){
    let miles=$(this).val();
    $("#km").val(miles*1.60934)
})

$("#km").on('propertychange input keyup', function(){
    let km=$(this).val();
    $("#miles").val(km*.621371)
})

})