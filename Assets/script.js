var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY , hh:mm:ss a"));

$(document).ready(function () {
    // event listener for save button that saves to local storage
    $(".btn").on("click", function () {
        // variables for time and input on the time block
        var text = $(this).siblings(" .input").val();
        var time = $(this).parent().attr("id");

        // save input into local storage 
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        //get the current time to check time blocks 
        var timeNow = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // changes background color based on whether the time has passed, its the current time, or the time hasnt passed yet 
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // recall local storage for user input 
    $("#hour9   .input").val(localStorage.getItem("hour9"));
    $("#hour10  .input").val(localStorage.getItem("hour10"));
    $("#hour11  .input").val(localStorage.getItem("hour11"));
    $("#hour12  .input").val(localStorage.getItem("hour12"));
    $("#hour13  .input").val(localStorage.getItem("hour13"));
    $("#hour14  .input").val(localStorage.getItem("hour14"));
    $("#hour15  .input").val(localStorage.getItem("hour15"));
    $("#hour16  .input").val(localStorage.getItem("hour16"));
    $("#hour17  .input").val(localStorage.getItem("hour17"));

    timeTracker();
})