const m = moment();
let currentDay = $('#currentDay');
let currentTime = moment().format('H');
let hourArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];

$(document).ready(function(){

    // Current Day Displayed
    // $("#currentDay").text(m.format("dddd, MMMM Do YYYY"));

    setInterval(function() {
        currentDay.text(moment().format('[Today is] MMMM Do, YYYY h:mm A'));
    }, 1000);

    // Loading saved calendar data if exists
    $("#9 .data").val(localStorage.getItem("9"));
    $("#10 .data").val(localStorage.getItem("10"));
    $("#11 .data").val(localStorage.getItem("11"));
    $("#12 .data").val(localStorage.getItem("12"));
    $("#13 .data").val(localStorage.getItem("13"));
    $("#14 .data").val(localStorage.getItem("14"));
    $("#15 .data").val(localStorage.getItem("15"));
    $("#16 .data").val(localStorage.getItem("16"));
    $("#17 .data").val(localStorage.getItem("17"));

    // Save button functionality
    $( "button.saveBtn" ).on( "click", function() {
        let saveData = $(this).siblings(".data").val();;
        let saveTime = $(this).parent().attr("id");

        localStorage.setItem(saveTime, saveData);
    });

    // checks current array index against current time and colors it accordingly
    function checkTime(time) {
        if (time < parseInt(currentTime)) {
            $("#" + hourArray[i]).addClass('past');
        }else if (time > parseInt(currentTime)){
            $("#" + hourArray[i]).addClass('future');
        }else if (time == parseInt(currentTime)){
            $("#" + hourArray[i]).addClass('present');
        }
    }
    
    function crawlTime() {
        for (i = 0; i < hourArray.length; i++) {
            checkTime(hourArray[i]);    
        } 
    };

    crawlTime();
    
});