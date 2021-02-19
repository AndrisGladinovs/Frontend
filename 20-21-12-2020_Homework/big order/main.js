/* Task01
Найдите и выведите на экран сумму четных чисел от 2 до n. (n -
число, получаемое от пользователя)
*/

let sum = 0; // наш счетчик четных чисел. Стартуем с нуля!!!
const startPoint = 2; // Мы начинаем наш отчёт с цифры 2, так как ищем чётные числа
const maxNumber = 100;
let number = +prompt(
    "Введите любое число от " +
    startPoint +
    " до " +
    maxNumber +
    " и я посчитаю сумму всех чётных чисел"
);

for (var i = startPoint; i <= number; i += 2) {
    if (number <= maxNumber && i % 2 == 0 && number != null) {
        sum += i;
    } else if (number == null || number < 2) {
        document.write(
            "Вы ввели неправильное число. Введите от " +
            startPoint +
            " до " +
            maxNumber +
            " и я посчитаю сумму всех чётных чисел"
        );
    } else {
        document.write("System error");
    }
}

document.write("Общая сумма чётных чисел равна: " + sum + "<br>");

//Task02
// Найдите и выведите на экран сумму нечетных чисел от 1 до n. (n - число, получаемое от пользователя)

let sumNew = 0; // наш счетчик четных чисел. Стартуем с нуля!!!
const begin = 1; // Мы начинаем наш отчёт с цифры 1, так как ищем нечетныe числа
const maximal = 100;
var inputDigit = +prompt(
    "Введите любое число от " +
    begin +
    " до " +
    maximal +
    " и я посчитаю сумму всех нечетных чисел"
);

for (i = begin; i <= inputDigit; i += 2) {
    if (inputDigit <= maximal && i % 2 == 1 && inputDigit != null) {
        sumNew += i;
    } else if (inputDigit == null || inputDigit < 2) {
        document.write(
            "Вы ввели неправильное число. Введите от " +
            begin +
            " до " +
            maximal +
            " и я посчитаю сумму всех нечетных чисел"
        );
    } else {
        document.write("System error");
    }
}

document.write("Общая сумма нечетных чисел равна: " + sumNew + "<br>");

//Task03
//С помощью цикла сформируйте строку n...987654321, где n - число получаемое от пользователя. Сохраните ее в переменную str, выведите значение этой переменной на экран.

const min = 1;
const max = 20;
let str = "";
const userInput = +prompt("Enter any number from " + min + " to " + max);

for (let i = userInput; i >= min; i--) {
    str = str + " " + i;
}
document.write(str + "<br>");

//Task 04
//Выведете на экран числа кратные 3 в диапазоне от 0 до n (n - число, получаемое от пользователя)

let start = 0;
let end = 100;
const input = Number(prompt("Enter any number from " + start + " to " + end));
let result = "";

for (let j = start; j <= input; j++) {
    if (j % 3 == 0) {
        result = result + " " + j;
    } else if (input < 0 || input == null) {
        alert("Enter any number from 0 to 100");
    } else {
        alert("System error");
    }
}
document.write(
    "Список чисел, которые делятся на 3 без остатка: " + result + "<br>"
);

/*

//Task 05
//Пользователь должен ввести любое трех-, четырех-, пяти- ... значное число. Задача - вывести на экран по очереди все разряды введенного числа.
//Например: при введном числе 521 на экране должно последовательно появиться сообщения, сначала 5, потом 2 и потом 1

let output = "";
let userDigit = +prompt("Enter any number from 0 to 99 999");
output = userDigit;

if (userDigit.length == 1) {
    document.write(output.slice(0, 1));
} else if (userDigit.length == 2) {
    document.write(output.slice(0, 1));
    document.write(output.slice(1, 2));
} else if (userDigit.length == 3) {
    document.write(output.slice(0, 1));
    document.write(output.slice(1, 2));
    document.write(output.slice(2, 3));
} else if (userDigit.length == 4) {
    document.write(output.slice(0, 1));
    document.write(output.slice(1, 2));
    document.write(output.slice(2, 3));
    document.write(output.slice(3, 4));
} else if (userDigit.length == 5) {
    document.write(output.slice(0, 1));
    document.write(output.slice(1, 2));
    document.write(output.slice(2, 3));
    document.write(output.slice(3, 4));
    document.write(output.slice(5, 6));
} else if (userDigit != 0 || userDigit != null) {
    document.write("Enter a number from 0 to 99 999");
} else {
    document.write("Uknown error");
}

*/