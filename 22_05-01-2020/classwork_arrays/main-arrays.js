// Create new array

/*  Option 1 (not common))

let arr = new Array();

*/

let arr = ["Denmark", "Estonia", "USA", "Germany", "Nigeria"];
console.log(arr[1]);
console.log(arr.length);
arr[5] = "Australia";
console.log(arr);
console.log(arr.length);
console.log("************");

// ADD a new element in the END of the array
arr[arr.length] = "Japan";
console.log(arr, arr.length);
console.log("************");

// DELETE the LAST element in the array
arr.length = arr.length - 1;
console.log(arr);
console.log("************");

// ADD element in the START of array
// [0] [1] [2] []
for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
}
arr[0] = "Canada";
console.log(arr);

// ADD element in the END of the array

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
}
console.log(arr);
arr[arr.length - 1] = "Canada";
console.log("Adding new element 'Canada' int the last index");
console.log(arr);

/* PUSH, POP, UNSHIFT, SHIFT operations   */

// PUSH - we use to ADD a new element in the END of an array
arr.push("Latvia");
console.log(arr);

// POP - we use to DELETE the element from the END of array
let latvia = arr.pop();
console.log(arr);

// UNSHIFT - we use to ADD an element in the START of array
arr.unshift("Warsaw", "Berlin");
console.log(arr);

// SHIFT - we use to DELETE an element in the START of array
let warsaw = arr.shift();
console.log(arr);
console.log(warsaw);

let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * 2);
}

for (let key of numbers) {
    console.log(key + 5);
}

// ******** MULTIPLE TABLE *********
let str = "";

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        str += i * j + "\t";
    }
    console.log(str);
    str = "";
}

let result = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        result += i * j + "\t";
    }
    console.log(result);
}