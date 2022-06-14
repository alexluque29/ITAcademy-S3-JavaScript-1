
// Exercise 6
function validate() {

	// Regular Expressions
	let regExpLetters = /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/;
	let regExpNumbers = /^[0-9]/;
	let regExpLetNumbSp = /^[A-Za-z0-9\s]+$/;
	let regExpMail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
	let regExpPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,8}$/;

	// Get the input fields
	var fName = document.getElementById("fName");
	var fLastN = document.getElementById("fLastN");
	var fEmail = document.getElementById("fEmail");
	var fPassword = document.getElementById("fPassword");
	var fAddress = document.getElementById("fAddress");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorLastN = document.getElementById("errorLastN");
	var errorEmail = document.getElementById("errorEmail"); 
	var errorPassword = document.getElementById("errorPassword"); 
	var errorAddress = document.getElementById("errorAddress"); 
	var errorPhone = document.getElementById("errorPhone");  
	
	// Validate fields entered by the user: name, phone, password, and email
	// Validate Name
	if(!regExpLetters.test(fName.value)){
		fName.style.borderColor = "red";
		errorName.style.display = "block";
	} else {
		fName.style.borderColor = "green";
		errorName.style.display = "none";
	}
	// Validate Last Name	
	if(!regExpLetters.test(fLastN.value)){
		fLastN.style.borderColor = "red";
		errorLastN.style.display = "block";
	} else {
		fLastN.style.borderColor = "green";
		errorLastN.style.display = "none";
	}
	// Validate Email
	if(!regExpMail.test(fEmail.value)){
		fEmail.style.borderColor = "red";
		errorEmail.style.display = "block";
	} else {
		fEmail.style.borderColor = "green";
		errorEmail.style.display = "none";
	}
	// Validate Password
	if(!regExpPass.test(fPassword.value)){
		fPassword.style.borderColor = "red";
		errorPassword.style.display = "block";
	} else {
		fPassword.style.borderColor = "green";
		errorPassword.style.display = "none";
	}
	// Validate Address
	if(!regExpLetNumbSp.test(fAddress.value) || fAddress.value.length <3){
		fAddress.style.borderColor = "red";
		errorAddress.style.display = "block";
	} else {
		fAddress.style.borderColor = "green";
		errorAddress.style.display = "none";
	}	
	// Validate Phone		
	if(!regExpNumbers.test(fPhone.value) || fPhone.value.length !=9){
		fPhone.style.borderColor = "red";
		errorPhone.style.display = "block";
	} else {
		fPhone.style.borderColor = "green";
		errorPhone.style.display = "none";
	}
}