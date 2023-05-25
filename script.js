
$(document).ready(function () { //loads the page before anything else

var currentDay = $('#currentDay')
var saveButton = $('.saveBtn') 
// var textBoxInput = $('.description')
var currentHour= dayjs().format('H')
// var schdText = findTextFromStorage();

//This fuction saves the text to the local storage
function saveText(event){
  event.preventDefault();
  var discriptionText = $(this).siblings(".description").val();
  var buttonID = $(this).parent().attr("id");

  localStorage.setItem(buttonID, discriptionText)
  // savedTexts.push(savedText)
  // saveTextToStorage()
}

function displayTime() {
  var rightNow = dayjs().format('dddd, MMMM D');
  currentDay.text(rightNow);
}

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
      // console.log(schdText)
    } else {
      schdText = [];
    }
    return schdText;
  }
  // var schdText =JSON.parse(localStorage.getItem("schedule")) || [];

  
  $('.time-block').each(function() {

    var timeID = parseInt($(this).attr("id")); //adds the color to the text boxes

    if(timeID < currentHour) {
      $(this).addClass("past");
    } else if (timeID == currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  var textIndex = localStorage.getItem(timeID) || ("") //adds the text to the text boxes
  console.log(textIndex)

    $(this).children(".description").text(textIndex)
    

    //Pop text from local storage
  });
  
  displayTime()
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

  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  //  console.log(currentTime)



  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
// saveButton.on('click', saveBoxText)
