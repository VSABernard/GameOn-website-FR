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

// to do list #2
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
    showSucces  (first);                  
   } 
  else {   
    showError (first);                     
    console.log ('Show error message');
  }

  if  (checkName(last.value) == true) {                                       // last name's field
    showSucces  (last);                  
  } 
  else {   
    showError (last);                     
    console.log ('Show error message');
  }

  if  (checkEmail(email) == true) {                                            // email's field
    showSucces  (email);                  
  } 
  else {   
    showError (email);                     
    console.log ('Show error message');
  }

  if  (checkBirthdateFormat(birthdate.value) == true) {                                            // birthdate's field
    showSucces  (birthdate);                  
  } 
  else {   
    showError(birthdate);                     
    console.log ('Show error message');
  }
  if (controlAge(birthdate.value) == true) {
    showSucces  (birthdate);
  }
  else {   
    showError(birthdate);                     
    console.log ('Show error message');
  }
  if (isPastDate(birthdate.value) == true) {
    showSucces  (birthdate);
  }
  else {   
    showError(birthdate);                     
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



// control if firts name and last name has 2 characters & it's not empty
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


// control if email is correct
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


// control if birthdate's format is correct and 
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

// control if age is not under 18
function controlAge (birthdate) {
    const today = new Date ();
    const actualYear = today.getFullYear ();

    console.log ('Actual year :' + actualYear);
    const year = birthdate.substring(0,4);                                                     // l'année (les quatre premiers caractères de la chaîne à partir de 0)

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

// control if date does not exceed today's date
function isPastDate (birthdateFormated) {
  // 2022-12-22
  // 12/22/2022
  // changer le fomatage de la date de naissance
  
  const dateToday = new Date (); 
  const dateBirthday =  new Date (birthdateFormated);

  if (dateBirthday < dateToday) {
    console.log ('Birthdate is valid');
    return true;
  }
  else {
    console.log ('Birthdate is not valid');
    return false;
  }
}


// Control if number of contests is correct
// return true if a value is a number
function checkQuantity (quantity) {

  console.log ('Function check of contests');
  console.log ('Contests value :' + quantity);

  if (isNaN(quantity) || quantity == "") {
    console.log ('Quantity is not a number');
    return false;
  }
  else {
    console.log ('Quantity is a number');
    return true;
  } 
}


// Control if a location is selected
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


// Control if the general conditions box is checked
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


