// Function declaration

function showFirstMessage() {
    console.log("Hello!");
}
showFirstMessage();

//*************** */

function showFirstMessage(text) {
    console.log(text);
}
showFirstMessage("Hello John Brown!");

//*************** */

let message = "Game starts later";
showFirstMessage(message);

//*************** */
let num = 20;

function showFirstMessage(num) {
    console.log(num);
}
showFirstMessage(num); // will show 20

//*************** */
let num = 20;

function showFirstMessage(num) {
    num = 10;
}
showFirstMessage(num); // will show 10, because global variable has been changed inside method

//*************** */
let num = 20;

function showFirstMessage(num) {
    let num = 10; // new variable with the same name
    console.log(num); // will show 10
}
showFirstMessage(num); // will show global 20

//*************** */

function showFirstMessage(text) {
    // here you can not write alert message
    alert(text);
}
showFirstMessage("Hello, John Brown!");

//*************** */
function sum(a, b) {
    let sum = a + b;
    return sum;
}
console.log(sum(4, 6)); // prosto pokazivaet rezuljtat

let result = sum(5, 6); // eshe sohranjaet rezuljtat
console.log(result);

//******************************** */
function sum(a, b) {
    let sum = a + b;
    return sum;
}
console.log(sum(42, 14));

//******************************** */
function sum(a, b) {
    return a + b;
}
let result = sum(5, 6); // eshe sohranjaet rezuljtat
console.log(sum(42, 14) + result);

//******************************** */

function powNumber(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}
const res = powNumber(3, 3);
console.log(res);

//*************** */
let numbers = [2, 3, 4, 5, 6];

function reverse(array) {
    let result = [];
    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i]);
    }
    return result;
}
console.log(reverse(numbers));