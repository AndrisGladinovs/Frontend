// Task 1
// Reverse function to print the all digits of provided number (n)

function recursionOutput(n) {
    for (let i = 0; i <= n; i++) {
        recursionOutput(console.log(" " + i));
    }
}
recursionOutput(10);

// Task 2
// Palindrom

// 1. Delete all backspaces between words  DONE!
// 2. Make all chars .toLowerCase          DONE!
// 3. Go through the reversed sentence through loops and check if original sentence is equal with reversed sentence; NOT WORKING!!!
// 4. set isPalindrom = true, when we find Palindrom sentences

let text = "а роза упала на лапу Азора";
isPalindrom = false;

console.log(makeStringTogether("а роза упала на лапу Азора"));
console.log(makeSmallChars("а роза упала на лапу Азора"));
//console.log(makeReverseString(makeSmallChars("text")));

function makeStringTogether(str) {
    str = str.split(" ").join(""); // delete all backspaces between words
    return str;
}

function makeSmallChars(str) {
    return makeStringTogether(str).toLowerCase(); // return chars with the small letters
}

/*
function makeReverseString(input) {
    let reversedStr = "";
    for (let i = input.length; i >= 0; i--) {
        reversedStr += input(i);
    }
    return reversedStr;
}
*/

// Task 3
// Sozdatj massiv changedUsers

/* changeUsers= [ 
{ fullName: "Vasya Popov", id: 1 },
{ fullName: "Anna Smirnova", id: 2 },
{ fullName: "Jack McPower", id: 3 },
{ fullName: "Stefan Müller", id: 4 },
]
*/

const users = [
    { firstName: "Vasya", lastName: "Popov", id: 1 },
    { firstName: "Anna", lastName: "Smirnova", id: 2 },
    { firstName: "Jack", lastName: "McPower", id: 3 },
    { firstName: "Stefan", lastName: "Müller", id: 4 },
];

// 1. Transfer array to Object to work with Object keys

let newUsers = Object.entries(users).map(([key, value]) => [key, value]);
console.log(newUsers);

newUsers = Object.fromEntries(newUsers); // from Array to Object
console.log(newUsers);

// 2. Create newUsers.firstName based on name and surname of users KEY

function makeFullName(newUsers) {
    for (key in newUsers) {
        newUsers.fullName = "" + newUsers["firstName"] + "" + newUsers["lastName"];
    }
    return newUsers;
}
console.log(makeFullName(newUsers));