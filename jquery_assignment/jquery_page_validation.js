var fname = $('#firstName');
var lname = $('#lastName');
var email = $('#emailAddress');
var contact = $('#phoneNumber'); 
var password = $('#pwd');

function saveUserDetails() {
  let firstname,lastname,email,phone,psw;
  firstname =  $('#firstName').val();
  lastname = $('#lastName').val();
  email = $('#emailAddress').val();
  phone = $('#phoneNumber').val();
  psw = $('#pwd').val();

  let user_records = new Array();
  user_records = jQuery.parseJSON(localStorage.getItem("users"))?jQuery.parseJSON(localStorage.getItem("users")):[];
  user_records.push({
    "firstName":firstname,
    "lastName":lastname,
    "email":email,
    "phone":phone,
    "psw":psw
  });
  localStorage.setItem("users",JSON.stringify(user_records));
  hideSignUp();
}

function validateCredentials() {
  let email, psw;
  email = $("#sign-in-email").val();
  psw = $("#sign-in-pass").val();

  let user_records = new Array();
  user_records = jQuery.parseJSON(localStorage.getItem("users"))?jQuery.parseJSON(localStorage.getItem("users")):[];
  if(email != "" && psw !== ""){
    if(user_records.some((v) => {return v.email==email && v.psw==psw})) {
      alert("Login Success");
      window.location.href="jquery_calendar.html";
    }
  } 
  else {
    alert("Please enter valid email and password");
  }
}

function handleErrors(value, targetId, currentElemId, errorMsgClass, errorMsg, ignoreValuesCheck) {
  if ((value == null || value == "" || ignoreValuesCheck) && currentElemId == targetId) {
    document.getElementById(errorMsgClass).innerHTML = errorMsg;
    return true;
  } else if (currentElemId == targetId && value) {
    document.getElementById(errorMsgClass).innerHTML = '';
  }
  return false;
}

function checkValidation(elem) {
  var targetId = elem.id;
  var error = false;

  var fname = document.forms["f1"]["first-name"].value;
  error = handleErrors(fname, targetId, "firstName", "first-name-error", "Please enter first name");
  
  var lname = document.forms["f1"]["last-name"].value;  
  error = handleErrors(lname, targetId, "lastName", "last-name-error", "Please enter last name");


  var email = document.forms["f1"]["email"].value;
  error = handleErrors(email, targetId, "emailAddress", "email-error", "Please enter email");  

  var phone = document.forms["f1"]["phone-number"].value;
  $('#phone-error').html = '';

  if ((phone == null || phone == "") && targetId == 'phoneNumber') {
    error = true;
    $('#phone-error').html = 'Phone number must be filled out';
  }

  if((phone != null || phone != "") && targetId == 'phoneNumber') {
    if(isNaN(phone)) {
     $("#phone-error").html= "Please enter valid phone number";
    }
    if(phone.length < 10 || phone.length > 12){
      $("#phone-error").html = "Please enter valid phone numbe";
    }
  }

  var pass1 = document.forms["f1"]["password1"].value;
  error = handleErrors(pass1, targetId, "pwd", "pwd1-error", "Please enter password");  


  var pass2 = document.forms["f1"]["password2"].value;
  error = handleErrors(pass2, targetId, "cpwd", "pwd2-error", "Please re-enter password");  

  pass1 = document.forms["f1"]["password1"].value;
  var matchedReqPwd = !pass1.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/g);
  error = handleErrors(pass1, targetId, "pwd", "pwd1-error","Password must have 1 special symbol, 1 letter, 1 number and more than 8 characters length", matchedReqPwd);

  if(pass1 != "" && pass2 != "") {
  var firstpassword = document.f1.password1.value;  
  var secondpassword = document.f1.password2.value;  
  
    if (firstpassword != secondpassword) {  
      error = true;
      $('#pwd2-error').html = 'Password must be same';   
    }
    
    if (!error) {
      var s = $("#reg-form-submit");
      s.removeAttr("disabled");
    } 
  }
}

function hideSignUp() {
  var formElem = $("#sign-up-container");
  formElem.addClass("d-none");
  var signinformElem = $("#sign-in-container");
  signinformElem.removeClass("d-none"); 
}

function hideSignIn() {
  var formElem = $("#sign-up-container");
  formElem.removeClass("d-none");
  var signinformElem = $("#sign-in-container");
  signinformElem.addClass("d-none"); 
}


$(document).ready(function() {
  $("#sign-up-form").on("submit", function(event) {
    event.preventDefault();
    saveUserDetails();
  });

  $("#sign-in-form").on("submit", function(event) {
    event.preventDefault();
    validateCredentials();
  });
  
  $(".form-control").on('blur', function() {
    checkValidation(this);
  });
  
  $('#sign-up').click(function() {
    hideSignUp();
  });

  $('#sign-in').click(function() {
    hideSignIn();
  });
});