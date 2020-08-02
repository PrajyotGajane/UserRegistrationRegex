console.log("Welcome to User Registration Problem");
const input = require('prompt-sync')();

let regexToCheck = new RegExp("^[A-Z]{1}[A-Za-z]{2}");

const firstName = input("Enter First Name: ");

function checkRegex(inputString) {
	return regexToCheck.test(inputString);
}

if (checkRegex(firstName)) {
const lastName = input("Enter Last Name: ");
	if (checkRegex(lastName)) 
			console.log("Valid name");
	else
			console.log("Invalid last name");
}
else {
	console.log("Invalid first name");
}
