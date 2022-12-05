$(document).ready(function(){
    $("#page2").hide();
}); 

$("#right-arrow").on("click",function(){
    $("#page1").hide();
    $("#page2").show();
});

$("#left-arrow").on("click",function(){
    $("#page1").show();
    $("#page2").hide();
});