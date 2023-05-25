
$(document).ready(function () {

 var currentDay = $('#currentDay')
 
 var saveButton = $('.saveBtn')
 var rowEl = $('.row')
 var textBoxInput = $('.description')
 console.log(saveButton)
//  console.log(currentTime)



  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
// saveButton.on('click', saveBoxText)


  
  var currentHour= dayjs().format('H')
  // var currentHour= 13
  console.log(currentHour)
  
  $('.time-block').each(function() {
    // console.log(this)
    var timeID = parseInt($(this).attr("id"));
    // console.log(timeID)
    
    if(timeID < currentHour) {
      $(this).addClass("past");
    } else if (timeID == currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

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

  $('.saveBtn').each(function(){
    console.log(this)

  })
  
  //Create
  //Find The button will read the element and make a new object.

  //Read 
  // Find the object in local storage. Parse it out. Find the parent element using the ID (for loop) and the add it to the HTML

  //Update '
  //The new object will but put into the array
  //Delete 
  //The old object will be deleted
  
  function findTextFromStorage(){
    var schdText = localStorage.getItem('schedule');
    if (schdText) {
      schdText = JSON.parse(schdText);
      console.log(schdText)
    } else {
      schdText = [];
    }
    return schdText;
  }

  var schdText = findTextFromStorage();
  
  // var schdText =JSON.parse(localStorage.getItem("schedule")) || [];
  console.log(schdText)

  function saveText(event){
    event.preventDefault();
    console.log("working");
    var discriptionText = textBoxInput.val();
    // console.log(discriptionText);
    var buttonID = $(this).parent().attr("id");
    // console.log($(this).parent().attr("id"))
    // console.log(buttonID);
    var savedTexts = []
    var savedText = {
      boxID: buttonID,
      text: discriptionText,
    }
    console.log(savedText)
    
    localStorage.setItem("schedule", JSON.stringify(savedText));
    // savedTexts.push(savedText)
    // saveTextToStorage()
  }
  saveButton.on('click', saveText);

});




// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?