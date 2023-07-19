//DOM elements
var currentDay = $('#currentDay');


var hour9 = $('#hour-9');
var hour10 = $('#hour-10');
var hour11 = $('#hour-11');
var hour12 = $('#hour-12');
var hour13 = $('#hour-1');
var hour14 = $('#hour-2');
var hour15 = $('#hour-3');
var hour16 = $('#hour-4');
var hour17 = $('#hour-5');



//display current date using var currentDay and have the time dynamically update without refreshing the page

$(function () { // this is the function that will display the current date and time as well as update the time without refreshing the page every second

  function updateTime() { // another function made within the first function to display the current date and time
  currentDay.text(dayjs().format('dddd, MMMM D, YYYY, h:mm:ss a'));
}

updateTime(); // this calls on the updateTime function to display the current date and time

setInterval(updateTime, 1000); //this will update the time every second without refreshing the page

});












// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
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





// the event listener will be for the save button. figure out how to use "this" to get the id of the time block that the button is in.

//I need js to look at the HTML ID of the time block and then look at that ID's sibling (the textarea) and get the value of the textarea (where the text is written)
//something like 