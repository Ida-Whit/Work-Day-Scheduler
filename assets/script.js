$(function () {
const currentDay = dayjs().format("dddd MMMM, YYYY H:mm")
const currentHour = dayjs().format("HH")
const currentHourEl = "hour-" + currentHour;
const savedTasks = JSON.parse(localStorage.getItem("Task")) || [];

//localStorage.removeItem("Task")



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
});
 
$(".saveBtn").on("click", function(){  
    let timeEl = $(this).parent().attr("id");
    let userInput = $(this).siblings("textarea").val();
    savedTasks.push({timeEl, userInput})
    localStorage.setItem('Task', JSON.stringify(savedTasks));
   renderTasks()
});

   function renderTasks(){
    $(".description").each(function(){
      if (savedTasks.timeEl === $(this).parent().attr("id")) {
        savedTasks.userInput = this.value()
      }

    })
   };
     
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});