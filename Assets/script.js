var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY , hh:mm:ss a"));

$(document).ready(function () {
    // saveBtn click listener 
    $(".btn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(" .input").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        //get current number of hours.
        var timeNow = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
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

    // Get item from local storage if any
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