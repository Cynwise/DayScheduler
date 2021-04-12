const m = moment();

$(document).ready(function(){

    // Current Day Displayed
    $("#currentDay").text(m.format("dddd, MMMM Do YYYY"));


});