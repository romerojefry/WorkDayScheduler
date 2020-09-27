$(document).ready(function () {
    console.log(moment());
    console.log(moment().format());


    $("#date").text(moment().format("dddd, MMMM Do"));


    // Current Time
    // Here we want to use setInterval to constantly update the time
    let updateTime = function () {
        let currentTime = moment().format('h:mm:ss')
        $("#time").text(currentTime)
    }
    
         $("#save").click(function () { 
        
        // val() method is used to get the values from  
       // textarea and stored in txt variable 
        var savetext = $("#inputtext").val(); 
        display(savetext); 
    }); 



})

