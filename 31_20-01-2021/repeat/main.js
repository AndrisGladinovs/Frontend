// Task 1
// najti dlinu samogo korotkogo elementa stroki i vivesti na ekran

function findShortWord(string) {
    string = string.split(" "); // from String to Array
    let min = string[0].length;
    for (let i = 0; i < string.length; i++) {
        if (string[i].length < min) min = string[i].length;
    }
    return min;
}

const result = findShortWord("We are back for the game!");
console.log(`The smallest elements length size is: ${result}`);

// Option 2

function findMin(string) {
    return Math.min(...string.split(" ").map((str) => str.length));
}

console.log(findMin("Let us join you!"));

// Option 3

const findMinLength = (str) =>
    str
    .split(" ")
    .sort((a, b) => b.length - a.length)
    .pop().length;

console.log(findMinLength("Let us join you!"));

//************************* Task 2 *********************** */
// isIsogram or not
// function isIsogram('abcd') --> TRUE;
// function isIsogram('abcdA') --> FALSE;
// function isIsogram('aabbbbcddda') --> FALSE;

const isIsogram = (str) =>
    str
    .toLowerCase()
    .split("")
    .every((element, index) => str.indexOf(element) === index);

console.log(isIsogram("abcdea"));
console.log(isIsogram("aabbbbcddda"));

function isIsogram(words) {
    words = words.toLowerCase().split("").sort();
    let i = 0;
    while (words[i] != words[i + 1] && i < words.length - 1) i++;
    return i === words.length - 1 ? true : false;
}
console.log(isIsogram("abcdea"));
console.log(isIsogram("abcd"));

function checkArrayNumber(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] != input[i + 1]) result.push(input[i]);
    }
    return result;
}

console.log(checkArrayNumber("123456777"));