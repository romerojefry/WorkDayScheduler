$(document).ready(function () {
    console.log(moment());
    console.log(moment().format());


    $("#date").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));


    // Current Time
    // Here we want to use setInterval to constantly update the time
    let updateTime = function () {
        let currentTime = moment().format('h:mm:ss')
        $("#time").text(currentTime)
    }

})