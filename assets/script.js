
$(function () {
const currentDay = dayjs().format("dddd MMMM, YYYY H:mm")
const currentHour = dayjs().format("HH")
const currentHourEl = "hour-" + currentHour;
  
  
  $('#currentDay').text("Todays date is " + currentDay);
  
  $(".time-block").each(function(){
    if (($(this).attr("id")) === currentHourEl) {
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    } else if (($(this).attr("id")) > currentHourEl) {
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
    } else {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    }

//setItem to send to local storage. localStorage.setItem("Hour-##", userInput.val())
//getItem to retrieve and display. localStorage.getItem("Hour")
//.attr("") is how you access that list...


    //want to click the save button and save anything in the text area to local storage.
    
    $(".saveBtn").on("click", function(){
        let parentEl = $(this).parent().attr("id");  //accesses each hour 9 times
        console.log(parentEl)
  });
      
      //this keyword gives you the whole button html information
      userInput = $("textarea") //Where the user input is stored.
      //need to access each time block individually
      //localStorage.setItem("hour", userInput.val())

          })

  

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
})