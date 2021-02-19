//Task01
// 'background-color' -> backgroundColor;
// 'list-style-image' -> listStyleImage;

function changeString(str) {
    const words = str.split("-"); // perevesti stroku v massiv i razdelitj ih tire
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1); // obrashaemsja k elelmentu, tam lezhit stroka -slovo
    }
    return words.join("");
    // return str.split('-').map((word, index) => index == 0 ? word: word[0].toUpperCase() + word.slice(1)).join('');
}
console.log(changeString("list-style-image"));

// Task 2
// Create a newArray = ['Vasya', 'Anna', 'Masha'];

/*
Шаги решения:

1. Вытаскиваем данные объекта по индексу существующего массива. 
2. Тест - выводим вытащили ли все данные или нет (console.log)
3. Объект с данными помещаем в новый массив
*/

//1 step
let users = [
    { name: "Vasya", age: 25 },
    { name: "Anna", age: 24 },
    { name: "Masha", age: 18 },
];

//console.log(Array.from(users));

function getNames(arrayUsers) {
    return arrayUsers.map((item) => item.name);
}

console.log(getNames(users));

function getNames(arrayUsers, propertiesName) {
    return arrayUsers.map((item) => item.propertiesName);
}

//***************************** */

let database = [
    { name: "Vasya", age: 24 },
    { name: "Olga", age: 21 },
    { name: "Egor", age: 28 },
];

function giveMeNames(database) {
    let userData = database.map((item) => item.name);
    return userData;
}

console.log(giveMeNames(database));

// Practise the old homework
function changeString(str) {
    let words = str.split("-");
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
    }
    return words.join("");
}

console.log(changeString("list-style-image"));