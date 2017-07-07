// JavaScript File
// JavaScript File
$( document ).ready(function() {


    $("#button").click(function(){
        var inputValue = $("#inputValue").val();
        var answer = "senior year";
        var answer2 = "senior";
        var answer3 = "12";
        
        
        if(inputValue === answer) {
            $("h3").append("Correct!");
        }
        
        else if (inputValue === answer2){
            $("h3").html("Correct!");
        }
        
        else if (inputValue === answer3) {
            $("h3").html("Correct!");
        }
        
        });











});