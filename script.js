
$(document).ready(function () { //loads the page before anything else

var currentDay = $('#currentDay')
var saveButton = $('.saveBtn') 

var currentHour= dayjs().format('H')


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
    

  });
  
  displayTime()
  saveButton.on('click', saveText);

});



