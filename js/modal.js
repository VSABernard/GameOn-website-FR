function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeModalBtn = document.querySelector(".bground span.close");
const modal = document.querySelector('#formGlobal');
const form = document.querySelector('form');
const formData = document.querySelectorAll(".formData");
const successModal = document.querySelector(".modal-thanks");
const closeThanksBtn = document.querySelector (".btn-thanks");
const closeFormThanks = document.getElementById('close-cross');
const burgerBtn = document.querySelector('.btn-burger');


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// =================================================================================================
// =================================================================================================

//TO DO LIST #1 : CLOSE MODAL FORM  

function closeModal() {
  modalbg.style.display ="none";
}

closeModalBtn.addEventListener("click", closeModal);


// =================================================================================================
// =================================================================================================

//TO DO LIST #2 : Implement FORM INPUT and add VALIDATION or ERROR messages


// a global function to show a SUCCES MESSAGE and an ERROR MESSAGE 

function showSucces (field) {
  field.parentElement.setAttribute("data-succes-visible", true);    
  field.parentElement.setAttribute("data-error-visible", false);
}
function showError (field) {
  field.parentElement.setAttribute("data-succes-visible", false);    
  field.parentElement.setAttribute("data-error-visible", true);
}


// the "CHANGE" EVENT on form fields
// is fired elements when an alteration to the element's value is committed by the user

document.getElementById('first').addEventListener('change', changeOnFirst);
document.getElementById('last').addEventListener('change', changeOnLast);
document.getElementById('email').addEventListener('change', changeOnEmail);
document.getElementById('birthdate').addEventListener('change', changeOnBirthdate);
document.getElementById('quantity').addEventListener('change', changeOnQuantity);
document.getElementById('location1').addEventListener('change', changeOnLocations);
document.getElementById('checkbox1').addEventListener('change', changeOnCheckbox1);

function changeOnFirst (event) {
  let first = event.target;
  validateFirstName (first);
}  
function changeOnLast (event){
  let last = event.target;
  validateLastName (last);
}
function changeOnEmail (event) {
  let email = event.target;
  validateEmail (email);
}
function changeOnBirthdate (event) {
  let birthdate = event.target;
  validateBirthdate (birthdate);
}
function changeOnQuantity (event) {
  let quantity = event.target;
  validateQuantity (quantity);
}
function changeOnLocations (event) {
  let locations = event.target;
  validateLocations (locations);
}
function changeOnCheckbox1 (event) {
  let checkbox1 = event.target;
  validateCheckbox1 (checkbox1);
}


// function to show a SUCCES MESSAGE and an ERROR MESSAGE for EACH FIELD

function validateFirstName (first) {
  if (checkName (first.value) == true) {                                      // FIRST NAME's field
    showSucces (first); 
    return true;               
  } 
  else {   
    showError (first);  
    return false;
  }
}
function validateLastName (last) {
  if (checkName (last.value) == true) {                                       // LAST NAME's field
    showSucces (last);  
    return true;          
  } 
  else {   
    showError (last);   
    return false;
  }
}
function validateEmail (email) {
  if (checkEmail (email) == true) {                                          // EMAIL's field
    showSucces (email);       
    return true;
  } 
  else {   
    showError (email);  
    return false;
  }
}
function validateBirthdate (birthdate) {
  if (checkBirthdate (birthdate) == true) {                                 // BIRTHDATE's field
    return true;    
  }               
  else {
    return false
  }                                  
}
function validateQuantity (quantity) {
  if (checkQuantity (quantity.value) == true) {                             // NUMBER OF CONTESTS' field
    showSucces (quantity);  
    return true;        
  } 
  else {   
    showError (quantity);   
    return false;
  }
}
function validateLocations (locations) {
  if (checkLocation (locations) == true) {                                  // LOCATION's field
    showSucces (location1);   
    return true;       
  } 
  else {   
    showError (location1);     
    return false;
  }
}
function validateCheckbox1 (checkbox1) {
  if (checkCheckbox (checkbox1) == true) {                                  // GENERAL CONDITIONS' field
    showSucces (checkbox1);   
    return true;       
  } 
  else {   
    showError (checkbox1);       
    return false;
  }
}


// add the BLUR EVENT when the user left the field with "TABS" key or a left click outside the field
// circle the field in red if it's loses focus

const formInput = document.getElementById('form');
  formInput.addEventListener('blur', onBlur, true);

function onBlur(event){
  event.target.style.border = '';
  if (event.target.value == "") {
    event.target.style.border = 'thin solid red';
  }
}


// BLOCK THE FORM after the verification of all FIELDS IN GLOBAL
form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();                                                   // if the event is not explicitly handled, the default action should not be executed as it normally is
  validate();

  if (document.querySelectorAll('[data-error-visible=true]').length == 0) {
      modal.style.display = 'none';
      form.reset();                                                         // empties each field and the form becomes totally blank.
      openThanksModal();
  }
}


// check if all the fields are FILLED IN CORRECTLY

function validate() {
  const first = document.getElementById('first');
  const last = document.getElementById('last');
  const email = document.getElementById('email');
  const birthdate = document.getElementById('birthdate');
  const quantity = document.getElementById('quantity');
  const locations = document.querySelectorAll("input[name='location']:checked");
  const checkbox1 = document.getElementById('checkbox1');

  const TOTAL_VALID_FIELD = 6;

  let numberValidFields = 0;

// ADD ERROR MESSAGES
// circle the field in green if it's valid
// circle the field in red if it's not valid
// display the error message below the field

  if (validateFirstName (first) == true) {
    numberValidFields++;
  }
  if (validateLastName (last) == true) {
    numberValidFields++;
  }
  if (validateEmail (email) == true) {
    numberValidFields++;
  }
  if (validateBirthdate (birthdate) == true) {
    numberValidFields++;
  }
  if (validateQuantity (quantity) == true) {
    numberValidFields++;
  }
  if (validateLocations (locations) == true) {
    numberValidFields++;
  }
  if (validateCheckbox1 (checkbox1) == true) {
    numberValidFields++;
  }

  return numberValidFields == TOTAL_VALID_FIELD;
}


// CONTROLS OF EACH FIELD -------------------------------------------------
// ------------------------------------------------------------------------ NAMES

// CONTROL if FIRST NAME and LAST NAME has 2 characters & it's not empty
// name : first name's value or last name's value to check
// return true if name is correct
function checkName (name) {
  if (name == undefined) {
    return;
  }

  let regexName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;


  if (name.match(regexName) && name != "" && name.length >= 2) {
    return true;
  }
  else {
    return false;
  }
}

// ------------------------------------------------------------------------------ EMAIL
// CONTROL if EMAIL is correct
// return true if email is correct
function checkEmail (email) {

  let regexEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]{2,}[.][a-zA-Z]{2,3}$/;  

  if (email.value.match(regexEmail))  {
    return true;
  }          
    else {
    return false;
  }
}

// ------------------------------------------------------------------------------ BIRTHDATE
// CONTROL OF BIRTHDATE : call 3 different functions 
// parameter : birthdate object
// if one function is an error, the others are not called

function checkBirthdate (birthdate) {
  if  (checkBirthdateFormat(birthdate.value) == true) {                                            
    showSucces (birthdate); 
  } 
  else {   
    showError(birthdate);     
    birthdate.parentElement.setAttribute("data-error", "Veuillez saisir une date de naissance valide");    
    return;
  }  
  if (isPastDate(birthdate.value) == true) {
    showSucces (birthdate);
  }
  else {   
    showError(birthdate);     
    birthdate.parentElement.setAttribute("data-error", "Veuillez saisir une date de naissance inferieur à la date du jour");  
    return;
  }
  if (controlAge(birthdate.value) == true) {
      showSucces (birthdate);
  }
    else {   
      showError(birthdate);        
      birthdate.parentElement.setAttribute("data-error", "Cette espace est interdite aux personnes mineurs");              
      return true;
    }  
}

// control if BIRTHDATE'S FORMAT is correct
// parameter : birthdate is a date's value
// return true if birthdate is correct
function checkBirthdateFormat (birthdate) {
  let birthdateRegex = /^(19|20)\d{2}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
  if (birthdateRegex.test(birthdate)) {
    return true;
  }
  else {
    return false;
  }
}

// control if DATE DOESN'T EXCEED TODAY'S date
// parameter : birthdate is a date's value
// return true if birthdate is in the past
function isPastDate (birthdate) {  
  
  let birthday = new Date (birthdate);
  let today = new Date();
  
  if (today > birthday) {
    return true;
  }
  else {
    return false;
  } 
}

// control if age is NOT UNDER 18
// parameter : birthdate is a date's value
// return true if age is > 18 years old
function controlAge (birthdate) {
  const today = new Date ();
  const actualYear = today.getFullYear ();

  const year = birthdate.substring(0,4);                             // Year (The first 4 characters of the string starting from 0)

  const actualAge = actualYear - year;
  if (actualAge > 18) {
    return true;
  }
  else {
    return false;
  }
}

// ------------------------------------------------------------------------------ QUANTITY
// CONTROL if NUMBER OF CONTESTS is correct
// parameter : quantity as integer value
// return true if a value is a number
function checkQuantity (quantity) {

  if (isNaN(quantity) || (quantity.value) == "")  {
    return false;
  }
  else if (quantity >= 0 && quantity < 100) {
    return true;
  } 
}

// ------------------------------------------------------------------------------- LOCATION
// CONTROL if one LOCATION is selected
// parameter : radioLocation is a radio object
// return true if the radio button is checked
// return false if none are checked, or there are no radio buttons
function checkLocation (radioLocation) {

  if (!radioLocation) {
  return false; }

const radioLength = radioLocation.length;
  
for (let i = 0; i < radioLength; i++) {
  if (radioLocation[i].checked) {
    return true;
  }
}
return false;
}

// ---------------------------------------------------------------------------------- GENERAL CONDITIONS
// CONTROL if the GENERAL CONDITIONS box is checked
// parameter : checkbox1 is a checkbox
// return true if checkbox1 is checked
// return false if not checked or there is not checked
function checkCheckbox () {

  if (document.reserve.conditions.checked) {
    document.getElementById("checkbox1").innerHTML = "";
    return true;
  }
  else {
    document.getElementById("checkbox1").innerHTML = (showError);
    return false;
  }
}


// =================================================================================================
// =================================================================================================


//TO DO LIST #4 : MODAL THANKS

// OPEN the thanks' modal when all fields are valid
function openThanksModal() {
  successModal.style.display = "flex";
}

// CLOSE the thanks' modal with the CROSS BUTTON

function closeThanksModal() {
    successModal.style.display = "none";
    modalbg.style.display = "none";
}

closeFormThanks.addEventListener('click', closeThanksModal);

// CLOSE the thanks' modal with the CLOSE's BUTTON

closeThanksBtn.addEventListener('click', closeThanksModal);


// =================================================================================================
// =================================================================================================

// Add a responsive HAMBURGER Menu 
burgerBtn.addEventListener('click', editNav);




