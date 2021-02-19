// Simple multiple table

let max = 10;
let result = "";
for (let i = 0; i <= max; i++) {
    for (let j = 0; j <= max; j++) {
        result += i * j + "\t";
    }
    console.log(result);
    result = "";
}

// Multiple table in double array [][]

let tableMultiple = [
    [],
    [],
    [],
    [],
    []
];

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        tableMultiple[i][j] = (i + 1) * (j + 1);
    }
}
console.log(tableMultiple);

// with help of PUSH
let numbers = [1, 2, 3, 4, 5];
let multipleTable = [];
for (let k = 1; k <= 5; k++) {
    let temp = []; // always reset to an empty array
    for (let i = 0; i <= numbers.length - 1; i++) {
        temp.push(k * numbers[i]);
    }
    multipleTable.push(temp);
}
console.log(multipleTable);
console.log(multipleTable[2][4]);

//** ** ** ** *
let array = [2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
}
console.log(array);
array[array.length - 1] = "Canada";
console.log(array);

// *********************
let numbers = [];