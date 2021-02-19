/*
function StringCate['Hello world', 5] ----> hello...
function StringCate["hello", 5] ---> hello
*/

// Task1 Option 1
function catString(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + "...";
    } else {
        return str;
    }
}

const str = catString("hello world", 5);
console.log(str);

//Task2 Option 2

function catString(str, maxLength) {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
}
const str = catString("hello world", 5);
console.log(str);