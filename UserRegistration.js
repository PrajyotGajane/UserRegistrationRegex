console.log("Welcome to User Registration Problem");
const input = require('prompt-sync')();

let regexToCheck = new RegExp("^[A-Z]{1}[A-Za-z]{2}");

const firstName = input("Enter Firs Name: ");
if(regexToCheck.test(firstName))
    console.log("Valid Name");
else
    console.log("Invalid Name");
