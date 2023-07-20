//DOM elements
var currentDay = $('#currentDay'); // HTML element for the current day


// var hour9 = $('#hour-9');
// var hour10 = $('#hour-10');
// var hour11 = $('#hour-11');
// var hour12 = $('#hour-12');
// var hour13 = $('#hour-1');
// var hour14 = $('#hour-2');
// var hour15 = $('#hour-3');
// var hour16 = $('#hour-4');
// var hour17 = $('#hour-5');

var saveBtn = $('.saveBtn'); //HTML element for the save button


//more breaking down what needs to happen

//how about instead of creating vars for each hour text area, i just use "this" to get the value of that specific textarea when the save button is clicked? it would reduce the amount of code needed and make it more dynamic.
//using jquery to select parents and siblings of the save button to get the value of the textarea that the save button is in.
//no need to make a for loop statement i dont think since I won't be dynamically making new elements. The elements are already there and working.
//just make jquery select the parent of the save button and then select the sibling of the save button and get the value of the sibling (the textarea)
//then save it in local storage using the id of the time block as the key and the value of the textarea as the value.


// -----------------DONE BELOW-----------------

//display current date using var currentDay and have the time dynamically update without refreshing the page

$(function () { // this is the function that will display the current date and time as well as update the time without refreshing the page every second

  function updateTime() { // another function made within the first function to display the current date and time
  currentDay.text(dayjs().format('dddd, MMMM D, YYYY, h:mm:ss a'));
}

updateTime(); // this calls on the updateTime function to display the current date and time

setInterval(updateTime, 1000); //this will update the time every second without refreshing the page

});
console.log(dayjs().format('dddd, MMMM D, YYYY, h:mm:ss a'));

// -----------------DONE ABOVE-----------------



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


  saveBtn.on('click', function() { //this is the event listener for the save button
    var timeBlock = $(this).parent().attr('id'); // this creates a variable that will get the id of the time block that the save button is in by looking at the parent of the save button and getting the id of the parent
    var textArea = $(this).siblings('.description').val(); //this variable will get the value of the textarea that the save button is in by looking at the sibling of the save button and getting the value of the sibling (the textarea)
    localStorage.setItem(timeBlock, textArea); //this should save the  value of the textarea in local storage using the id of the time block as the key and the value of the textarea as the value.
  });

//use localStorage.getItem to get the value of the textarea and set it to the textarea element
  



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  $(function () {
    var currentHour12 = dayjs().format('hA'); //this creates a variable that will get the current hour in 12 hour time. the .format parameters in this case will display the hour and am/pm. hA = hour and am/pm in caps
    //var currentHour24 = dayjs().hour(); //this makes a var that displays the current hour in 24 hour format which seems to be the default method. too general imo compared to .format

    console.log(currentHour12); //this is just to check that the current hour is being logged in the console
    //console.log(currentHour24); //this is just to check that the current hour is being logged in the console
    
    //use .past, .present, and .future to change the color of the time blocks based on the current time
    //what I need to dynamically change is the .textarea class and compare it to that textarea's id in an if statement
    //use currentHour12 to compare to the id of the time block to determine if it is past, present, or future
    $('.time-block').each(function() { //this is a for loop that will loop through each time block
      var timeBlockHour = $(this).attr('id').replace('hour-', ''); //this creates a variable that will get the id of the time block that the save button is in by looking at the parent of the save button and getting the id of the parent
      console.log(timeBlockHour);
    //i believe this isn't doing anything because it's not comparing against anything
    $(this).removeClass('past present future');
      
      var timeBlockHourObj = dayjs(timeBlockHour, 'hA');
      console.log(timeBlockHourObj); //this works and displays the time block hour in console like 9AM, 10AM, etc.

      if (timeBlockHourObj.isBefore(currentHour12)) {
        $(this).addClass('past');
      } else if (timeBlockHourObj.isSame(currentHour12)) {
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      } 
      // if (timeBlockHour < currentHour12) {
      //   $(this).removeClass('present future').addClass('past');
      // } else if (timeBlockHour === currentHour12) {
      //   $(this).removeClass('past future').addClass('present');
      // } else {
      //   $(this).removeClass('past present').addClass('future');
      // }
    });

      //var timeBlockHour = parseInt(currentTimeBlock.replace('hour-', ''));
//currentTimeBlock is undefined. check logic of the parents and siblings.
      
  //it is the '.time-block' class and not the id of the time block that needs to be changed. the id of the time block is used to determine if it is past, present, or future.

  });


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  $('time-block').each(function() { //select the time block class and loop through each time block with the .each method
    var timeBlockId = $(this).attr('id'); //make a var that will get the id of the time block
    var savedText = localStorage.getItem(timeBlockId); //getItem the value of the textarea and set it to the textarea element
    if (savedText !== null) { //if there is data saved in the localStorage
      $(this).find('.description').val(savedText); //then set the value of the textarea to the value of the textarea in localStorage
    }

    //it pretty much allows the user to refresh the page and have their notes still saved in localStorage. This is retrieval of data from localStorage.
    //the data will disappear if the user closes the tab or the browser but localStorage will still be accessible in inspect.
});


});





// the event listener will be for the save button. figure out how to use "this" to get the id of the time block that the button is in.

//I need js to look at the HTML ID of the time block and then look at that ID's sibling (the textarea) and get the value of the textarea (where the text is written)
//something like 