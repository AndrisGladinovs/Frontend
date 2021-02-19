/* ***** Task 1 -  If Operator ****** */

let num1 = +prompt("Enter first number");
let num2 = +prompt("Enter second number");
let sum = num1 + num2;

if (sum == 10) {
    alert("Bingo!");
} else if (sum < 10) {
    alert("Sum is too small");
} else {
    alert("Sum is too big");
}

/* ***** Task 1 -  Ternar ****** */

let message =
    sum < 10 ?
    "sum is too small" :
    sum > 10 ?
    "sum is too big" :
    sum == 10 ?
    "Bingo!" :
    "unknown sum";

/* ***** Task 2 -  If ****** */
//CODE DOENST WORK!!!!

let login = prompt("Enter your login");

if (login == "employee") {
    alert("Hi, employee");
} else if (login == "boss") {
    alert("Hello boss!");
} else if (login == "") {
    alert("no login");
} else {
    alert("Hi user");
}

/******* Task 2 - Switch ********** */
let password = prompt("Enter your login");

switch (password) {
    case "employee":
        alert("Hi " + password);
        break;
    case "boss":
        alert("Hello " + password);
        break;
    case "":
        alert("no login");
        break;
    default:
        alert("Hi user");
}

/******* Task 3 - First option*/

let age = Number(prompt("How old are you?"));
let isInDiapason = true;
let notInDiapason = false;

if (age >= 14 && age <= 90) {
    alert(isInDiapason + " Your age is in diapason between 14 and 90");
} else {
    alert(
        notInDiapason + " Sorry, your age is out of our diapason 14 - 90 years"
    );
}

/******* Task 3 - First option*/
let ageDigit = Number(prompt("How old are you?"));

let result = ageDigit >= 14 && ageDigit <= 90 ? true : false;
alert(result);