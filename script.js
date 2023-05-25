// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

 var currentDay = $('#currentDay')
 
 var saveButton = $('.saveBtn')
 var rowEl = $('.row')
 console.log(saveButton)
//  console.log(currentTime)



  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
// saveButton.on('click', saveBoxText)

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var currentHour= dayjs().format('H')
  // var currentHour= 13
  console.log(currentHour)
  
  $('.time-block').each(function() {
    console.log(this)
    var timeID = parseInt($(this).attr("id"));
    console.log(timeID)
    
    if(timeID < currentHour) {
      $(this).addClass("past");
    } else if (timeID == currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
  // var dayTime = $('.time');
  // dayTime.each((dayTime))

  


  // if (projectDate.isBefore(today)) {
  //   rowEl.addClass('past');
  // } else if (projectDate.isSame(today)) {
  //   rowEl.addClass('present');
  // } else if (projectDate.isAfter(today)) {
  //   rowEl.addClass('future')
  // }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  displayTime()

  function displayTime() {
    var rightNow = dayjs().format('dddd, MMMM D');
    currentDay.text(rightNow);
  }


});