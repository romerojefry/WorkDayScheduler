$(document).ready(function () {
    console.log(moment());
    console.log(moment().format());


    $("#date").text(moment().format("dddd, MMMM Do"));


    // Current Time
    let updateTime = function () {
        let dateMJS = moment().format('h:mm:ss')
        $("#time").text(dateMJS)
    }

})
//setting a function for the textarea function 
$("#save").click(function () {       
var savetext = $("#inputtext").val(); 
display(savetext);
})
$("#date").text(moment().format('ddd, MMM Do'));

//dateMJS to use hour to update colors
var dateMJS = moment().format('H');
console.log()


// setting varibles to change for color when time updates
var hourPast = hourPast < dateMJS;
var hourNow = dateMJS;
var hourFuture = hourFuture < dateMJS;

// setting getelementsbyclassname method to have the colors active

var hourNow = dateMJS;
console.log(hourNow)
console.log(dateMJS)
    function backgroundColorEdit(){
        if (hourNow == dateMJS){
            document.getElementsByClassName("ColorID").style.backgroundColor = "#ff6961";
        }else if (hourNow < dateMJS){
            document.getElementsByClassName("ColorID").style.backgroundColor = "#d3d3d3";
        }else 
        {
            document.getElementsByClassName("ColorID").style.backgroundColor = "#77dd77";
        }
}