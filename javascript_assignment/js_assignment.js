const fname = document.getElementById("firstName");
const lname = document.getElementById("lastName");
const email = document.getElementById("emailAddress");
const contact = document.getElementById("phoneNumber"); 
const password = document.getElementById("pwd");

document.getElementById("sign-up-form").addEventListener("submit", function(event) {
  event.preventDefault();
  saveUserDetails();
});

document.getElementById("sign-in-form").addEventListener("submit", function(event){
  event.preventDefault();
  validateCredentials();
});

function saveUserDetails() {

  let firstname,lastname,email,phone,psw;
  firstname = document.getElementById("firstName").value;
  lastname = document.getElementById("lastName").value;
  email = document.getElementById("emailAddress").value;
  phone = document.getElementById("phoneNumber").value;
  psw = document.getElementById("pwd").value;

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
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
  let email,psw;
  email = document.getElementById("sign-in-email").value;
  psw = document.getElementById("sign-in-pass").value;

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
  if(user_records.some((v) => {return v.email==email && v.psw==psw}))
  {
    alert("Login Success");
    window.location.href="calendar.html";
  }
  else{
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
  document.getElementById('phone-error').innerHTML = '';

  if ((phone == null || phone == "") && targetId == 'phoneNumber') {
    error = true;
    document.getElementById('phone-error').innerHTML = 'Phone number must be filled out';
  }

  if((phone != null || phone != "") && targetId == 'phoneNumber') {
    if(isNaN(phone)) {
      document.getElementById("phone-error").innerHTML = "Please enter valid phone number";
    }
    if(phone.length < 10 || phone.length > 12){
      document.getElementById("phone-error").innerHTML = "Please enter valid phone numbe";
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
      document.getElementById('pwd2-error').innerHTML = 'Password must be same';   
    }
    
    if (!error) {
      var s = document.getElementById("reg-form-submit");
      s.removeAttribute("disabled");
    } 
  }
}

function hideSignUp() {
  var formElem = document.getElementById("sign-up-container");
  formElem.classList.add("d-none");
  var signinformElem = document.getElementById("sign-in-container");
  signinformElem.classList.remove("d-none"); 
}

function hideSignIn() {
  var formElem = document.getElementById("sign-up-container");
  formElem.classList.remove("d-none");
  var signinformElem = document.getElementById("sign-in-container");
  signinformElem.classList.add("d-none"); 
}
