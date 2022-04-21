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
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//to do list #1 close modal form  
const closeModalBtn = document.querySelector(".bground span.close");
closeModalBtn.addEventListener("click", closeModal);
function closeModal() {
  modalbg.style.display ="none";
}

// to do list #2 and #3
function validate() {
  const first = document.getElementById('first');
  const last = document.getElementById('last');
  const email = document.getElementById('email');
  const birthdate = document.getElementById('birthdate');
  const quantity = document.getElementById('quantity');
  const location = document.querySelectorAll("input[name='location']:checked");
  const checkbox1 = document.getElementById('checkbox1');


  // circle the field in green if it's valid
  // circle the field in red if it's not valid
  // display the error message below the field

  if  (checkName(first.value) == true) {                                      // firts name' field
    showSucces (first);                  
   } 
  else {   
    showError (first);                     
    console.log ('Show error message');
  }

  if  (checkName(last.value) == true) {                                       // last name's field
    showSucces (last);                  
  } 
  else {   
    showError (last);                     
    console.log ('Show error message');
  }

  if  (checkEmail(email) == true) {                                            // email's field
    showSucces (email);                  
  } 
  else {   
    showError (email);                     
    console.log ('Show error message');
  }

  checkBirthdate (birthdate);                                                 // birthdate's field

  if  (checkQuantity(quantity.value) == true) {                                     // number of contest's field
    showSucces (quantity);                  
  } 
  else {   
    showError (quantity);                     
    console.log ('Show error message');
  }

  
  








  console.log('Fonction validate!');
  const numberOfFields = formData.length;            // number of formData elements
  console.log('numberOfFields :' + numberOfFields);

  let numberValidFields = 0;
   
  console.log ('numberValidFields:' + numberValidFields);

  if (numberValidFields == 7) {
    console.log ('Form is valid');
    // return true;
  }
  else {
    console.log ('Form is not valid');
    // return false;
  }
}





// function to show a succes message and an error message for each field
function showSucces (field) {
    field.parentElement.setAttribute("data-succes-visible", true);    
    field.parentElement.setAttribute("data-error-visible", false);
}

function showError (field) {
  field.parentElement.setAttribute("data-succes-visible", false);    
  field.parentElement.setAttribute("data-error-visible", true);
}


// CONTROL OF EACH FIELD -----------------------------------------------

// CONTROL if FIRST NAME and LAST NAME has 2 characters & it's not empty
// name : first name's value or last name's value to check
// return true if name is correct
function checkName (name) {

  console.log ('Function check of name');
  console.log ('Name value :' + name);

  if (name != "" && name.length >= 2) {
    console.log ('Name is correct');
    return true;
  }
  else {
    console.log ('Name is incorrect');
    return false;
  }
}

// ------------------------------------------------------------------------------
// CONTROL if EMAIL is correct
// return true if email is correct
function checkEmail (email) {

  console.log ('Function check of email');
  console.log ('Email value :' + email);

  let regexEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]{2,}[.][a-zA-Z]{2,3}$/;  

  if (email.value.match(regexEmail))      {
    console.log ('Valid email address');
    return true;
  }          
	else {
		console.log ('Invalid email address');
    return false;
	}
}

// ------------------------------------------------------------------------------
// CONTROL OF BIRTHDATE : call 3 different functions 
// parameter : birthdate
// if one function is an error, the others are not called

function checkBirthdate (birthdate) {
  if  (checkBirthdateFormat(birthdate.value) == true) {                                            
    showSucces (birthdate); 
  } 
  else {   
    showError(birthdate);     
    birthdate.parentElement.setAttribute("data-error", "Veuillez saisir une date de naissance valide");                
    console.log ('Show error message');
    return;
  }  
  if (isPastDate(birthdate.value) == true) {
    showSucces (birthdate);
  }
  else {   
    showError(birthdate);     
    birthdate.parentElement.setAttribute("data-error", "Veuillez saisir une date de naissance inferieur à la date du jour");                 
    console.log ('Show error message');
    return;
  }
  if (controlAge(birthdate.value) == true) {
      showSucces (birthdate);
  }
    else {   
      showError(birthdate);        
      birthdate.parentElement.setAttribute("data-error", "Cette espace est interdite aux personnes mineurs");              
      console.log ('Show error message');
      return;
    }  
}

// control if birthdate's format is correct
// parameter : birthdate is a date's value
// return true if birthdate is correct
function checkBirthdateFormat (birthdate) {
  let birthdateRegex = /^(19|20)\d{2}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
  if (birthdateRegex.test(birthdate)) {
    console.log ('Birthdate format is correct');    
    return true;
  }
  else {
    console.log ('Birthdate format is not correct');

    return false;
  }
}

// control if date does not exceed today's date
// parameter : birthdate is a date's value
// return true if birthdate is in the past
function isPastDate (birthdate) {  
  console.log (birthdate);
  
  let birthday = new Date (birthdate);
  let today = new Date();
  console.log (today > birthday);

  if (today > birthday) {
    console.log ('Birthdate is inferior of today');
    return true;
  }
  else {
    console.log ('Birthdate is can not be superior of today');
    return false;
  } 
}

// control if age is not under 18
// parameter : birthdate is a date's value
// return true if age is > 18 years old
function controlAge (birthdate) {
    const today = new Date ();
    const actualYear = today.getFullYear ();

    console.log ('Actual year :' + actualYear);
    const year = birthdate.substring(0,4);                             // l'année (les quatre premiers caractères de la chaîne à partir de 0)

    const actualAge = actualYear - year;
    if (actualAge > 18) {
      console.log ('Age is valid');      
      return true;
    }
    else {
      console.log ('Age is not valid');
      return false;
    }
}


// ------------------------------------------------------------------------------
// CONTROL if NUMBER OF CONTESTS is correct
// parameter : quantity as integer value
// return true if a value is a number
function checkQuantity (quantity) {

  console.log ('Function check of contests');
  console.log ('Contests value :' + (quantity));

  if (isNaN(quantity) || (quantity.value) == "")  {
    console.log ('Quantity is not a number');
    return false;
  }
  else if (quantity > 0 && quantity < 100) {
    console.log ('Quantity is a number');
    return true;
  } 
}


// -------------------------------------------------------------------------------
// CONTROL if a LOCATION is selected
// parameter : radioLocation is a radio object
// return true if the radio button is checked
// return false if none are checked, or there are no radio buttons
function checkLocation (radioLocation) {

	if (!radioLocation) {
		return false; }

	const radioLength = radioLocation.length;
  console.log ('Radio length:' + radioLength);

	for (let i = 0; i < radioLength; i++) {
		if (radioLocation[i].checked) {
      console.log ('City :' + radioLocation[i].value);
			return true;
		}
	}
	return false;
}


// ----------------------------------------------------------------------------------
// CONTROL if the GENERAL CONDITIONS box is checked
// parameter : conditions is a checkbox
// return true if conditions is checked
// return false if not checked or there is not checked
function checkCheckbox (conditions) {
  
  if (!conditions) {
    console.log ('This is not a checkbox');
    return false;
  }

  return conditions.checked;                                        // replace if/else of the parameter
}


