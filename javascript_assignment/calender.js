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
 
window.addEventListener("load", function() {
  prepareInitData();
});

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
    
    document.getElementById("month-dates").innerHTML = datesHTML;
    document.getElementById("month-year").innerHTML = monthsArr[currentMonth] + " " + currentYear;
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
    
    document.getElementById("mini-calendar").innerHTML = datesHTML;
    document.getElementById("mini-month-year").innerHTML = monthsArr[currentMonth] + " " + currentYear;
}
var fname = JSON.parse(localStorage.getItem("firstName"));
var lname = JSON.parse(localStorage.getItem("lastName"));
var fullName = fname + " " + lname; 
document.getElementById("logged-user").innerHTML = fullName;

var eventDate = document.getElementById("month-dates");

function modalLayout(elem) {
  myModal.style.display = "block";
  var clickedDate = elem.dataset["date"];
  var clickedMonth = elem.dataset["month"];
  var clickedYear = elem.dataset["year"];
  var key = clickedDate + clickedMonth + clickedYear;
  myModal.setAttribute("data-key",key);
}

var closeBtn = document.getElementById("close");
closeBtn.addEventListener("click" ,function closeButton() {
myModal.style.display = "none";
});

function saveUserEvent() {
  var inputMessage = document.getElementById("event-input").value;
  var key = document.getElementById("myModal").dataset["key"];
  let event_records = new Array();
  if(inputMessage != "") {
    event_records =JSON.parse(localStorage.getItem(key))?JSON.parse(localStorage.getItem(key)):[];
    event_records.push(inputMessage);
    localStorage.setItem(key, JSON.stringify(event_records));
  }
  myModal.style.display = "none";
  prepareInitData();
}