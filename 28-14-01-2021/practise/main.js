// Task 1

const users = [
    { name: "Vasya", age: 25 },
    { name: "Anna", age: 24 },
    { name: "Masha", age: 18 }, // firstName
    { name: "Misha", age: 19 },
];

users.sort((user1, user2) => user1.name.localeCompare(user2.name));
console.log(users);

function usersSmallSort(key) {
    return (a, b) => a[key] - b[key];
}
users.sort(usersSmallSort("age"));

users.sort((user1, user2) => (user1.age > user2.age ? 1 : -1));
console.log(users);

users.sort((a, b) => a.age - b.age);
console.log(users);

/* users.sort((user1, user2) => (user1.age > user2.age ? 1 : -1));
console.log(users); */

//users.sort((user1, user2) => user1.age - user2.age);
//console.log(users);

/*function byField(key) {
    return (a, b) => (a[key] > b[key] ? 1 : -1);
}
users.sort(byField("age"));
console.log(users); */

// Task 2
// Vernutj massiv chisel v diapazone ot 3 do 6

const arr = [1, 5, 8, 2, 4, 6, 9, 3, 12, 32];

function filterRange(arr, min, max) {
    return arr.filter((num) => num >= min && num <= max);
}
const newArr = filterRange(arr, 3, 6); // otsortirovali ot 3 do 6
newArr.sort((a, b) => a - b);
console.log(newArr);

// Option 2
const arr = [1, 5, 8, 2, 4, 6, 9, 3, 12, 32];

function filterCatRangeArray(arr, min, max) {
    for (let index = 0; index < arr.length; index++) {
        // [2],[3],[4],[5],[6],[8],[9],[12],[32]
        if (arr[index] < min || arr[index] > max) {
            arr.splice(index, 1);
            index--;
        }
    }
}

filterCatRangeArray(arr, 5, 9);
console.log(arr);

let name = "Ivan, Olga, Anna, Olav";

let sortAlphabets = function(string) {
    return string.split(",").sort().join(",");
};
console.log(sortAlphabets(name));

num = '22.24.34 px';
console.log(typeof num);
num = parseFloat(num);
console.log(typeof num);
console.log(num);

