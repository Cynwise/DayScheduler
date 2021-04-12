const m = moment();
let currentDay = $('#currentDay');

$(document).ready(function(){

    // Current Day Displayed
    // $("#currentDay").text(m.format("dddd, MMMM Do YYYY"));

    setInterval(function() {
        currentDay.text(moment().format('[Today is] MMMM Do, YYYY h:mm A'));
    }, 1000);

    // Loading saved calendar data if exists
    $("#9am .data").val(localStorage.getItem("9am"));
    $("#10am .data").val(localStorage.getItem("10am"));
    $("#11am .data").val(localStorage.getItem("11am"));
    $("#12pm .data").val(localStorage.getItem("12pm"));
    $("#1pm .data").val(localStorage.getItem("1pm"));
    $("#2pm .data").val(localStorage.getItem("2pm"));
    $("#3pm .data").val(localStorage.getItem("3pm"));
    $("#4pm .data").val(localStorage.getItem("4pm"));
    $("#5pm .data").val(localStorage.getItem("5pm"));

    // Save button functionality
    $( "button.saveBtn" ).on( "click", function() {
        console.log( "click" );

        let saveData = $(this).siblings(".data").val();;
        let saveTime = $(this).parent().attr("id");

        localStorage.setItem(saveTime, saveData);
        // localStorage.lastname = "Smith";
    });

    function updateTime() {



    }
});