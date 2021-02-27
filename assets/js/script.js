// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).parents().parent(".row").children(".form-control").val();
        var time = $(this).closest(".time-block").attr("id");

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
    $("#0 .form-control").val(localStorage.getItem("0"));
    $("#1 .form-control").val(localStorage.getItem("1"));
    $("#2 .form-control").val(localStorage.getItem("2"));
    $("#3 .form-control").val(localStorage.getItem("3"));
    $("#4 .form-control").val(localStorage.getItem("4"));
    $("#5 .form-control").val(localStorage.getItem("5"));
    $("#6 .form-control").val(localStorage.getItem("6"));
    $("#7 .form-control").val(localStorage.getItem("7"));
    $("#8 .form-control").val(localStorage.getItem("8"));

    timeTracker();
})