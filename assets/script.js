$(function () {
const currentDay = dayjs().format("dddd MMMM, YYYY H:mm")
const currentHour = dayjs().format("HH")
const currentHourEl = "hour-" + currentHour;
const savedTasks = JSON.parse(localStorage.getItem("Task")) || [];


let renderTasks = function (){
  for (let i = 0; i<savedTasks.length; i++) {
    $(`#${savedTasks[i].timeEl}`).children(".description").val(savedTasks[i].userInput)
  }

};



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
});

$(document).ready(function() {
  renderTasks();
});
});