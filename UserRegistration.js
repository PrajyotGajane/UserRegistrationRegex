console.log("Welcome to User Registration Problem");
const prompt = require('prompt-sync')();

let namePattern = new RegExp("^[A-Z]{1}[A-Za-z]{2}");
let emailPattern = new RegExp("^[a-zA-Z0-9.+_-]+[@][a-zA-Z0-9]+[.]co(m|.in)$");
let mobilePattern = new RegExp("^[0-9][0-9] [0-9]{10}$");
let passwordPattern = new RegExp("(?=.*[0-9])(?=.*[A-Z]).{8,}");
function checkFormat(input, inputFormat){
    return inputFormat.test(input);
}

function getFirstName(){
    let firstName = prompt("Enter First Name: ");
    if(!checkFormat(firstName, namePattern)){
        console.log("Enter Valid First Name");
        getFirstName();
    }
}

function getLastName(){
    let lastName = prompt("Enter Last Name: ");
    if(!checkFormat(lastName, namePattern)){
        console.log("Enter Valid Last Name");
        getLastName();
    }
}

function getEmail(){
    let email = prompt("Enter Email: ");
    if(!checkFormat(email, emailPattern)){
        console.log("Enter Valid Email");
        getEmail();
    }
}

function getMobileNumber(){
    let phone = prompt("Enter Phone Number: ");
    if(!checkFormat(phone, mobilePattern)){
        console.log("Enter Valid Phone Number");
        readmMobileNumber();
    }
}

function getPassword(){
    password = prompt("Enter Password: ");
    if(!checkFormat(password, passwordPattern)){
        console.log("Enter Valid Password");
        getPassword();
    }
}
getFirstName();
getLastName();
getEmail();
getMobileNumber();
getPassword();
