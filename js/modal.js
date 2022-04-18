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
  console.log('Fonction validate!');
  const numberOfFields = formData.length;            // number of formData elements
  console.log('numberOfFields :' + numberOfFields);

  for (let i = 0; i < numberOfFields; i++) {                                  // loop to show the input's id
    console.log('i = '+ i);
    let inputName = formData[i].getElementsByTagName('input')[0].name;            // retrieve the id of the input
    console.log("Input name :" + inputName);

    let inputValue = formData[i].getElementsByTagName('input')[0].value;      // retrieve the content value of the input
    console.log ("inputValue :" + inputValue);

    
    // if (inputId == "birthdate") {
    //   console.log('Happy birthday!');
    // }

    switch (inputName) {
      case 'first':
        checkName(inputValue);
        break;
      
      case 'last':
        checkName(inputValue);
        break;

      case 'email':
        checkEmail(inputValue);
        break;
        
      case 'birthdate':
        //checkBirthdate(inputValue);
        break;
        
      case 'quantity':
        checkQuantity(inputValue);
        break;
        
      case 'location':
        let inputObject = formData[i].getElementsByTagName('input');        // retrieve the content value of the object
        console.log ("inputObject :" + inputObject);

        checkLocation(inputObject);

        let isLocationChecked = checkLocation(inputObject);
        if (isLocationChecked) {
          console.log ('Location is checked'); }
        else {
          console.log ('No location is checked!'); }

        break;
      
      case 'checkbox':
       // checkCheckbox(inputValue);
        break;
    }
  }
  return false;
}

// Control if firts name and last name has 2 characters & it's not empty
// name : first name and last name to check
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


// Control if email is correct
// return true if email is correct
function checkEmail (email) {

  console.log ('Function check of email');
  console.log ('Email value :' + email);

  var regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]{2,}[.][a-zA-Z]{2,3}$/;                  
  console.log ('Result of regex :' + regex.test(email));
  return regex.test(email);
}

function verificationEmail () {
  let email = document.getElementById("email").value;

	if (checkEmail(email)) {
		console.log('Valid email address');
    return true;
	}
	else {
		console.log('Invalid email address');
    return false;
	}
}


// Control if number of contests is correct
// return true if a value is a number
function checkQuantity (quantity) {

  console.log ('Function check of contests');
  console.log ('Contests value :' + quantity);

  var isNaN = function(valeur) {
    return Number.isNaN (Number(valeur));
  };
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

