//DOM elements
var currentDay = $('#currentDay'); // HTML element for the current day
var saveBtn = $('.saveBtn'); //HTML element for the save button


//more breaking down what needs to happen

//how about instead of creating vars for each hour text area, i just use "this" to get the value of that specific textarea when the save button is clicked? it would reduce the amount of code needed and make it more dynamic.
//using jquery to select parents and siblings of the save button to get the value of the textarea that the save button is in.
//no need to make a for loop statement i dont think since I won't be dynamically making new elements. The elements are already there and working.
//just make jquery select the parent of the save button and then select the sibling of the save button and get the value of the sibling (the textarea)
//then save it in local storage using the id of the time block as the key and the value of the textarea as the value.


// -----------------DISPLAY TIME DONE BELOW-----------------

//display current date using var currentDay and have the time dynamically update without refreshing the page

$(function () { // this is the function that will display the current date and time as well as update the time without refreshing the page every second

  function updateTime() { // another function made within the first function to display the current date and time
  currentDay.text(dayjs().format('dddd, MMMM D, YYYY, h:mm:ss a'));
}

updateTime(); // this calls on the updateTime function to display the current date and time

setInterval(updateTime, 1000); //this will update the time every second without refreshing the page

});
console.log(dayjs().format('dddd, MMMM D, YYYY, h:mm:ss a'));

// -----------------DISPLAY TIME DONE ABOVE-----------------



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


    //---------WORKING SAVE BUTTON ABOVE-----------------


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

  $(function () {
    var currentHour24 = dayjs().hour(); // Get the current hour in 24-hour format (0 to 23)
    console.log(currentHour24);

    $('[id^="hour-"]').each(function () { //this selects any id that starts with "hour-" and loops through each one
      var timeBlockId = $(this).attr('id'); //this creates a variable that will get the id of the time block that the save button is in by looking at the parent of the save button and getting the id of the parent
      var timeBlockHour = parseInt(timeBlockId.replace('hour-', '')); //this var will replace the "hour-" in the id with nothing and then parse the string into an integer
      console.log(timeBlockHour); //this is just to check that the time block hour is being logged in the console


      $(this).removeClass('past present future'); //removes all classes from the time block. I could have removed them 
                                                  //from the html but this works too.


      if (timeBlockHour < currentHour24) { //the if statement that will compare the time block hour to the current hour
        $(this).addClass('past');
      } else if (timeBlockHour === currentHour24) {
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      }
    });
  });

  //After messaging with the same tutor, he told me that it would be a bit more easier to understand 
  //if I changed the way I approached the time itself. I went from the 12 hour format to the 24 hour format.
  //Doing this allowed me to use a number comparison which dayjs can actually understand. I was embrassed to admit that
  //I didn't know how the 24 hour format worked (military time) but I found out that it doesn't require the AM or PM.
  //This made it more ideal for the comparison while also shortening the code.
  //I could have attempted to figure out how to use the 12 hour format but I was hitting mental roadblocks and I almost gave up.

  //-----------------WORKING TIME BLOCK COLOR CHANGE ABOVE-----------------

  //TODO 7-20-2023 @ 11:56AM: Received help from a tutor on the code above but it still is not working correctly. I reverted back to the code I had before.
    
    //TODO: I know that the fundamental logic for this comparison is flawed because it's only looking at the number itself for the comparison (from the console log I made) so anything after 1PM will always be labeled as in the past.
    //I just want it too look at the 1PM or whatever time the ID says against the current time and then add the class of past, present, or future based on that comparison.

      //var timeBlockHour = parseInt(currentTimeBlock.replace('hour-', ''));
  //currentTimeBlock is undefined. check logic of the parents and siblings.
      
  //it is the '.time-block' class and not the id of the time block that needs to be changed. the id of the time block is used to determine if it is past, present, or future.

  });


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  $('.time-block').each(function() { //select the time block class and loop through each time block with the .each method
    var timeBlockId = $(this).attr('id'); //make a var that will get the id of the time block
    var savedText = localStorage.getItem(timeBlockId); //getItem the value of the textarea and set it to the textarea element
    if (savedText !== null) { //if there is data saved in the localStorage
      $(this).find('.description').val(savedText); //then set the value of the textarea to the value of the textarea in localStorage
    }
    console.log(savedText);
    //it pretty much allows the user to refresh the page and have their notes still saved in localStorage. This is retrieval of data from localStorage.
    //the data will disappear if the user closes the tab or the browser but localStorage will still be accessible in inspect.
  });

});


//-----------------WORKING LOCAL STORAGE ABOVE-----------------





// the event listener will be for the save button. figure out how to use "this" to get the id of the time block that the button is in.

//I need js to look at the HTML ID of the time block and then look at that ID's sibling (the textarea) and get the value of the textarea (where the text is written)
//something like


//---------------OLD UNUSED CODE BELOW-----------------

 //use .past, .present, and .future to change the color of the time blocks based on the current time
    //what I need to dynamically change is the .textarea class and compare it to that textarea's id in an if statement
    //use currentHour12 to compare to the id of the time block to determine if it is past, present, or future
    // $('.time-block').each(function() { //this is a for loop that will loop through each time block
    //   var timeBlockHour = $(this).attr('id').replace('hour-', ''); //this creates a variable that will get the id of the time block that the save button is in by looking at the parent of the save button and getting the id of the parent
    //   console.log(timeBlockHour);
    // //i believe this isn't doing anything because it's not comparing against anything
    // $(this).removeClass('past present future');
      
    //   var timeBlockHourObj = dayjs(timeBlockHour, 'hA');
    //   console.log(timeBlockHourObj); //this works and displays the time block hour in console like 9AM, 10AM, etc.

    //   if (timeBlockHourObj.isBefore(currentHour12)) {
    //     $(this).addClass('past');
    //   } else if (timeBlockHourObj.isSame(currentHour12)) {
    //     $(this).addClass('present');
    //   } else {
    //     $(this).addClass('future');
    //   } 
    //   // if (timeBlockHour < currentHour12) {
    //   //   $(this).removeClass('present future').addClass('past');
    //   // } else if (timeBlockHour === currentHour12) {
    //   //   $(this).removeClass('past future').addClass('present');
    //   // } else {
    //   //   $(this).removeClass('past present').addClass('future');
    //   // }
    // });

    // $(function () {
    //   var currentHour24 = dayjs().hour(); // Get the current hour in 24-hour format (0 to 23)
    //   var currentHour12 = dayjs().format('hA');
    
    //   // Loop through each time-block element
    //   $('[id^="hour-"]').each(function () {
    //     var timeBlockId = $(this).attr('id');
    //     var timeBlockHour = parseInt(timeBlockId.replace('hour-', ''));
    //     console.log(timeBlockHour);
    //     console.log(currentHour12);
    
    //     // Remove classes that don't apply to the current time
    //     $(this).removeClass('past present future');
    
    //     // Compare the time block's hour with the current hour and add the appropriate class
    //     if (timeBlockHour < currentHour24) {
    //       $(this).addClass('past');
    //     } else if (timeBlockHour === currentHour24) {
    //       $(this).addClass('present');
    //     } else {
    //       $(this).addClass('future');
    //     }
    //   });
    // });



//  $(function () {
//   var currentHour24 = dayjs().hour(); // Get the current hour in 24-hour format (0 to 23)
//   var currentHour12 = dayjs().format('hA');
//   console.log(currentHour12);
//   currentHour12.split("PM"); // Split the string at "PM" and assign the result to currentHour12
//   console.log(currentHour12);

//   $('[id^="hour-"]').each(function () {
//     var timeBlockId = $(this).attr('id');
//     var timeBlockHour = parseInt(timeBlockId.replace('hour-', ''));
//     console.log(timeBlockHour);
//     var currHourNum = parseInt(currentHour12[0]);

//     $(this).removeClass('past present future');

//     if (timeBlockHour < currHourNum) {
//       $(this).addClass('past');
//     } else if (timeBlockHour === currHourNum) {
//       $(this).addClass('present');
//     } else {
//       $(this).addClass('future');
//     }
//   });
// });



//some unused global variables:

// var hour9 = $('#hour-9');
// var hour10 = $('#hour-10');
// var hour11 = $('#hour-11');
// var hour12 = $('#hour-12');
// var hour13 = $('#hour-1');
// var hour14 = $('#hour-2');
// var hour15 = $('#hour-3');
// var hour16 = $('#hour-4');
// var hour17 = $('#hour-5');