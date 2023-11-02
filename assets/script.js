const currentDay = dayjs().format("dddd MMMM, YYYY H:mm")
let currentHour = dayjs().format("HH")
let currentHourEl = "hour-" + currentHour;
console.log(currentHourEl)
const saveBtn = document.getElementById("save")
const eventEl = document.getElementById("event")
const enterEl = document.getElementById("entry")
const submitBtn = document.getElementById("submit")
const hours = {
  nine: "hour-09",
  ten: "hour-10",
  eleven: "hour-11",
  twelve: "hour-12",
  thirteen: "hour-13",
  fourteen: "hour-14",
  fifteen: "hour-15",
  sixteen: "hour-16",
  seventeen: "hour-17",
}
//select all lines in HTML that contain the ID "hour-xx"
const matchEl = document.querySelectorAll("section")

$(matchEl).on("click", enterEvent)

function enterEvent() {
  console.log($(this).attr("id"))
  for (let i = 0; i < hours.length; i++){
    if (($(this).attr("id")) !== hours[i]) {
    $("section").addClass("present");
    $("section").removeClass("past");
    $("section").removeClass("future");
  };
}; 
};

$('#currentDay').text("Todays date is " + currentDay);

function saveEvent () {
}


function textEvent() {
  eventEl.style.display = "none"
}

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.