// Task01
// Отсортировать массив users по возрасту

const users = [
    { name: "Vasya", age: 25 },
    { name: "Anna", age: 24 },
    { name: "Masha", age: 18 }, // firstName
];

function sortArrayAges(arr) {
    let sorted = arr.sort((a, b) => a.age - b.age);
    return sorted;
}

console.log(sortArrayAges(users));

//Task02
// [1,5,8,2,4,6,9,3];
//function filterRange(3, 6) -> [3,4,5,6]

/*function filterRange(array) {
    for (let i = 0; i < array.length; i++) {
        filtered = array.filter((item) => item[i] >= 3 && item[i] <= 6);
    }
    return filtered;
}
console.log(filterRange(numbers)); */

const numbers = [1, 5, 8, 2, 4, 6, 9, 3];

function filterRange(array) {
    let filtered = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] >= 3 && array[i] <= 6) {
            filtered.push(array[i]);
        }
    }
    return filtered.sort((a, b) => a - b);
}

console.log(filterRange(numbers));

//Task03
//отсортировать в порядке убывания [ 7,3,2,9,10 ] ->[10,9,7,3,2]

const array = [7, 3, 2, 9, 10];

function sortArray(arr) {
    let sorted = arr.sort((a, b) => b - a);
    return sorted;
}

console.log(sortArray(array));