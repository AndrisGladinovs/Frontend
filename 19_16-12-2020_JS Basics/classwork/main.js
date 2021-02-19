//========= Conversion types ========

//**********  Number ********/

let str = "   123   ";
alert(typeof str); // type is String

str = Number(str);
alert(typeof str); // type is Number now

str = "one";
str = Number(str);
alert(typeof str); // type is Number , znachenie NaN

str = null;
str = Number(str);
alert(str); // null is a number 0 here

str = undefined;
alert(+str); // NaN

str = false; // znachenie FALSE vsegda perevoditsja v 0
alert(+str); // vivedit na ekran 0

str = true; // znachenie TRUE vsegda perevoditsja v 1
alert(+str); // vivedit na ekran 1

//********  to String ********   */
// alert perevodit ljubie dannie v stroku

let value = true;
alert(typeof value); // eto boolean
value = String(value);
alert(typeof value); // boolean stal String

// null -> "null", undefined -> "undefined", 124 -> "124"

//********* Boolean ************ */
alert(Boolean(1)); //true
alert(Boolean(0)); // false
alert(Boolean(5)); //true
alert(Boolean(null)); // false
alert(Boolean(undefined)); // false
alert(Boolean("")); // pustaja stroka tozhe FALSE
alert(Boolean("  ")); // pustaja stroka s probelom uzhe TRUE
alert(Boolean("Hi")); // stroka s simvolami tozhe TRUE

/* ******* Operatori sravnenija **** */
// a > b, a < b
// a >= b, a <= b
// a == b vijasnitj ravni li chisla, a === b
// !=    ne ravno

let result = 5 > 4;
alert(result);

alert("a" > "q"); // false
alert("cat" > "cad"); // cad wins
alert("cat" > "cats"); // cats wins
alert("cat" > "Cat"); // cat wins. UNICODE

alert("2" > 1); // string 2 wins. First he transforms String to number 2 and than compare both variables

const num1 = 42;
const num2 = "42";
alert(num1 == num2); // true
alert(num1 === num2); // false strogoe ravenstvo

num1 = 0;
num2 = "0";
str = "";
result = false;

alert(null > 0); // false ne perevodit NULL v 0
alert(null == 0); // false ne perevodit NULL v 0
alert(null >= 0); // TRUE perevodit NULL v 0

/* ******* Conditional operators / vetvlenie ****** */

num1 = +prompt("Enter your number");
num2 = +prompt("Enter second number");

if (num1 > num2) {
    var max = num1;
} else if (num1 == num2) {
    alert("Numbers are equal");
    max = num1;
} else {
    /* if (num2 > num1) {
                                                  max = num2;
                                              }
                                              */
    max = num2;
}
alert("Max number is: " + max);

//Second option better one
num1 = +prompt("Enter your number");
num2 = +prompt("Enter second number");
var max = num1;
if (num1 < num2) {
    max = num2;
}
alert("Max number is: " + max);

if (0) {
    alert("Hello!");
} // budet false i nichego ne vivedit na ekran

if (1) {
    alert("Hello!");
} // budet true i vivedit na ekran Hello

if ("a") {
    alert("Hello!");
} // budet true i vivedit na ekran Hello

//let isFieldChecked = true;
/* let (isFieldChecked) {
    alert("Field is checked");
}  */

let accessAllowed;
let age = +prompt("How old are you?");
if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}
alert(accessAllowed);

/* ********** TERNAR OPERATOR ******* */
accessAllowed = age > 18 ? true : false;
accessAllowed = age > 18 ? "welcome!" : "access denied";

let message =
    age <= 3 ?
    "Hi small one" :
    age <= 25 ?
    "Hi, old one" :
    age <= 100 ?
    "Hello, madam or sir" :
    "Hello, lucky one";
alert(message);

/* ********* Switch ********* */
switch (x) {
    case "one": // strogoe sravnenie (x === 'one') to vipolnitsja eta strochka koda
        alert("one");

    case "two":
        alert("two");

    default:
        alert("undefined");
}

let sumNumber = +prompt("2 + 2 = ?");
switch (sumNumber) {
    case 3:
        alert("too little");
        break;
    case 5:
        alert("too much");
        break;
    case 4:
        alert("bingo!");
        break;
    default:
        alert("try again");
}

//***************** */
let name = prompt("enter your name");

switch (name) {
    case "Lena":
        alert("Hi, " + name);
        break;
    case "Vasya":
        alert("Hi, " + name);
        break;
    case "Juan":
        alert("Hola amigo " + name);
        break;
    default:
        alert("I dont know you");
}

let sumNumber = +prompt("2 + 2 = ?");
switch (sumNumber) {
    case 3:
    case 5:
    case 2:
        alert("wrong answer, try again");
        break;
    case 4:
        alert("bingo!");
        break;
    default:
        alert("try again");
}

// ============= Logical operator ====== //

// II  -> pipe, or
// &&  -> and
// !   -> not

let myAge = 16;
let ageCheck = myAge > 10 && myAge < 50;