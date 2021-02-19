/* ******* VARIABLES *********/

// comment example
var age;
let message = "hello my friend";
const PI = 3.14;
const name = "Vasya";
const MONDAY = "monday";

message = "hello world";

alert(message); // comment for this script

let myName = prompt("Enter your name");
alert("Hello, " + myName);

/* example for 
comment in two line */

//********  Variable Names */
//good
let userAge;
let message12;
let $;
let _;

//bad
let kirilica;
let imya;
let ff44;

//cannot use

/* 
let 3 dhjk; // you can not start with a number
let g & VideoPlaybackQuality; // can not use this symbol 
*/

//let let; // zarezervirovannoe uzhe slovo

/**** NUMBERS **** */
let myAge = 48;
let a = 12.56;

console.log(0.2 - 0.1);
alert(1 / 0); // Infinity
alert("one" / 2); // NaN not a number

/* ******* STRING *******/
let str = "Hello";
let str2 = "Hello world";
let str3 = `Hello, `;
let strName = "Andy";
alert(`Hello, ${strName}!`);
alert(`sum 1+2 = ${1 + 2}`);

/******** BOOLEAN  ******* */
let nameFieldChecked = true;
let isGreater = 4 > 1;
alert(isGreater);

/********* NULL ********* */
let age1 = null;
let ageUser = prompt("enter your age");
alert(ageUser);

/********* Undefiened **** */
let dog;
alert(dog);

/********* Object, Symbol - more types in JS ******** */

// Different data types
let x = 12;
const month = "januar";
let isWeekend = true;
let price = null;
let cat;

console.log(typeof x);
console.log(typeof month);
console.log(typeof isWeekend);
console.log(typeof price);
console.log(typeof cat);

// alert, prompt, confirm
alert(2 + 3);
// pokazhet pjatj;
let newName = prompt("enter your name", "kolya");

let isBoss = confirm("Are you boss?"); // confirm vidajot BOOLEAN
alert(isBoss);

/* ******* OPERATORS ******** */
let a = 5;
let b = 10;
a + b; // operant eto sto delaet, a operator eto slz. Binar operator. Binar plus operation

a = -a; // unarnaja operacija

//  +  -  *  /  %  **(stepenj)
a = 5 % 3;
alert(a * b);

let str4 = "hello, ";
let str5 = "world";
alert(str4 + str5); // konkatinacija strok
alert(str4 - str5); // rezuljtat NaN. Not number