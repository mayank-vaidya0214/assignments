var daysHTML = '';
var daysOfWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var monthsArr = ["January", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var datesHTML = '';
var date = new Date();
var todayDate = new Date();
var todayDay = todayDate.getDate();
var todayMonth = todayDate.getMonth();
var todayYear = todayDate.getFullYear();
var fullDate = todayDay.toString() + todayMonth.toString() + todayYear.toString();
var currentMonth = date.getMonth();
var currentYear = date.getFullYear();
var firstDate;
var lastDate = todayDate.setMonth(todayDate.getMonth(), 0);

function prevMonth() {
  currentMonth -= 1;
  if (currentMonth == -1) {
    currentMonth = 11;
    currentYear -= 1;
    date.setFullYear(currentYear);
  }
  date.setMonth(currentMonth);
  prepareInitData();
}

function nextMonth() {
  currentMonth += 1;
  if (currentMonth == 12) {
    currentMonth = 0;
    currentYear += 1;
    date.setFullYear(currentYear);
  }
  date.setMonth(currentMonth);
  prepareInitData();
}

function setPresentDate() {
  date = new Date();
  currentMonth = date.getMonth();
  currentYear = date.getFullYear();
  prepareInitData();
}

function prepareInitData() {
  var noOfDays = new Date(currentYear, currentMonth +1, 0).getDate();
  var firstDay = new Date(currentYear, currentMonth, 1).getDay();
  setMonthHTML(noOfDays, firstDay);
  setMiniMonthHTML(noOfDays, firstDay);
}
 
function setMonthHTML(noOfDays, firstDay) {
  datesHTML = '';
  lastDate = 31;
  firstDate = 1;
  for (var i = 0; i < 42; i++) {
    var currentDate = ((i + 1) - firstDay);
    datesHTML += "<div class ='common-block' onclick='modalLayout(this)' data-date =" + currentDate + " data-month = "+ currentMonth +" data-year =" + currentYear + ">";
    if (i < 7) {
        datesHTML += "<div>" + daysOfWeek[i] + "</div>";
      }
      var validateKey =  currentDate.toString() + currentMonth.toString() + currentYear.toString();
      
        if (currentDate <= noOfDays && currentDate > 0) {
         datesHTML += "<div";
         if(fullDate == validateKey) {
          datesHTML+= " class='today-date' ";
         }
         datesHTML+= ">" + currentDate + "</div>";
        }

        if(currentDate <= 0) {
          datesHTML += "<div class = 'extra-date'>" + (lastDate + currentDate)  + "</div>"; 
        }

        if(currentDate > noOfDays) {
          datesHTML += "<div class = 'extra-date'>" + firstDate + "</div>"; 
          firstDate++;
        } 
        var eventMessage = localStorage.getItem(validateKey);
        if (eventMessage) {
          datesHTML += "<div class = 'eventMessages'>" + eventMessage + "</div>";
        }
        
        datesHTML += "</div>";  
    }
    
    $("#month-dates").html(datesHTML);
    $("#month-year").html(monthsArr[currentMonth] + " " + currentYear);
}

function setMiniMonthHTML(noOfDays, firstDay) {
  datesHTML = '';
  firstDate = 1;
  for (var i = 0; i < 42; i++) {
    var currentDate = ((i + 1) - firstDay);
    datesHTML += "<div class ='common-block'>";
    
    if (i < 7) {
      datesHTML += "<div>" + daysOfWeek[i] + "</div>";
    }
    
    if (currentDate <= noOfDays && currentDate > 0) {
      datesHTML += "<div>" + currentDate + "</div>";
    }

    if(currentDate > noOfDays) {
      datesHTML += "<div class = 'extra-date'>" + firstDate + "</div>"; 
      firstDate++;
    } 
    datesHTML += "</div>";   
  }
    
    $("#mini-calendar").html(datesHTML);
    $("#mini-month-year").html(monthsArr[currentMonth] + " " + currentYear);
}

var eventDate = document.getElementById("month-dates");

function modalLayout(elem) {
  $('#myModal').css("display","block");
  var clickedDate = elem.dataset["date"];
  var clickedMonth = elem.dataset["month"];
  var clickedYear = elem.dataset["year"];
  var key = clickedDate + clickedMonth + clickedYear;
  $('#myModal').attr("data-key",key);
}

function closeButton() {
  $('#myModal').css("display","none");
}

function saveUserEvent() {
  var inputMessage = $("#event-input").val();
  var key = $("#myModal").data("key");
  if(inputMessage != "") {
    localStorage.setItem(key, inputMessage);
  }
  inputMessage = '';
  $('#myModal').css("display","none");
  prepareInitData();
}

$(document).ready(function() {
  $("#today").on("click", function() { 
    setPresentDate();
  });
  $("#prev-month").on("click" , function() {
    prevMonth();
  });
  $("#next-month").on("click" , function() {
    nextMonth();
  });
  $("#mini-prev-month").on("click", function() {
    prevMonth();
  });
  $("#mini-next-month").on("click", function() {
    nextMonth();
  });
  $("#sign-out-link").on("click", function() {
    window.location.href = 'jquery_registration.html';
  });
  $("#close").on("click" ,function () {
    closeButton(); 
  });
  $("#submit-event").on("click", function() {
    saveUserEvent(); 
  });
});
$(window).on("load", function() {
  prepareInitData();
});