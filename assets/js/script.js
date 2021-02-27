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
            var blockTime = parseInt($(this).attr("id"));
            // To check the time and add the classes for background indicators
            if (blockTime < timeNow) {
                console.log("past " + blockTime < timeNow);
                $(this).children(".row").children(".form-control").removeClass("future");
                $(this).children(".row").children(".form-control").removeClass("present");
                $(this).children(".row").children(".form-control").addClass("past");
            }
            else if (blockTime === timeNow) {
                console.log("present " + blockTime === timeNow);
                $(this).children(".row").children(".form-control").removeClass("past");
                $(this).children(".row").children(".form-control").removeClass("future");
                $(this).children(".row").children(".form-control").addClass("present");
            }
            else {
                console.log("future " + blockTime >timeNow);
                $(this).children(".row").children(".form-control").removeClass("present");
                $(this).children(".row").children(".form-control").removeClass("past");
                $(this).children(".row").children(".form-control").addClass("future");

            }
        })
    }

    // Get item from local storage if any
    $("#9 .form-control").val(localStorage.getItem("9"));
    $("#10 .form-control").val(localStorage.getItem("10"));
    $("#11 .form-control").val(localStorage.getItem("11"));
    $("#12 .form-control").val(localStorage.getItem("12"));
    $("#13 .form-control").val(localStorage.getItem("13"));
    $("#14 .form-control").val(localStorage.getItem("14"));
    $("#15 .form-control").val(localStorage.getItem("15"));
    $("#16 .form-control").val(localStorage.getItem("16"));
    $("#17 .form-control").val(localStorage.getItem("17"));
    $("#18 .form-control").val(localStorage.getItem("18"));
    $("#19 .form-control").val(localStorage.getItem("19"));

    timeTracker();
})