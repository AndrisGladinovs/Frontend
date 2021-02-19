//Task01 Make code correct

let a = prompt("Введите первое число", 1);
let b = prompt("Введите второе число", 2);

a = parseInt(a);
b = parseInt(b);

let result = a + b;

alert("Результат сложение ваших двух чисел равен: " + result);

//Task02
// Спросить сколько стоит работа в час; Сколько часов в день работает;
//Вывести зарплату за месяц (22 рабочих дня в месяце)

let hourRate = prompt("Сколько Вы зарабатываете брутто за час работы?");
let hoursPerDay = prompt("Спасибо. Сколько часов Вы работаете в день?");

hourRate = parseInt(hourRate);
hoursPerDay = parseInt(hoursPerDay);
let workingDays = 22;

let salary = hourRate * hoursPerDay * workingDays;

alert("Ваша зарплата: " + salary + "€ брутто за 22 рабочих дня.");

//Task03
//Спросисть радиус, распечатать площадь круга;

const PI = 3.14;
let radius = prompt("Введите радиус круга в сантиметрах");
radius = parseInt(radius);
let square = PI * Math.pow(radius, 2);
alert("Площадь круга равна: " + square + "cm2");

// Create a BinBash script asking for a name and greet the client with "Hello, his name"

let name = prompt("What is your name?", "no name");
alert(`Hello, ${name}!`);
let age = prompt("How old are you ? ");

if (age > 18) {
    alert("Welcome");
} else {
    alert("You are not adult. Try later");
}