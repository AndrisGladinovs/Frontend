// Task 21

let salaries = {
    John: 2000,
    Ann: 2100,
    Piotr: 2100,
    Kate: 1900
}
let key = 'John' 
let johnSalary = salaries[key]; //salaries.John

let sum =0;
for(let key in salaries){
    sum += salaries[key];
}

console.log(`All salaries: ${sum}`);
console.log(`John has salary ${salaries.John}, Kate: ${salaries.Kate}`);

salaries.Marya = 3000;
salaries.Mark = 2900;
 
let maxSalary = 0;
let keyName = '';

for (let key in salaries){
    if(salaries[key] > maxSalary){
        maxSalary = salaries[key];
        keyName = key;
    }
}

console.log(`${keyName} has the biggest salary: ${maxSalary}`);


// Big task

let num = 10;
    sum = 0;

while(num > 0){
    if(num%2 == 0){
        sum += num;
    }
    num--;
}

console.log(sum);

num = 10;
sum = 0;

while(num > 0){
    sum = (num%2 != 0) ? sum += num : sum;
    num --;
}

console.log(sum);

num = 10;
sum = 0;

for (let i = 1; i<=num; i++){
    if(i%2 == 0) continue;
    sum += i;
}

console.log(sum);

//Task03
//С помощью цикла сформируйте строку n...987654321, где n - число получаемое от пользователя. 
//Сохраните ее в переменную str, выведите значение этой переменной на экран.

num = 10;
let str = '';

/* while(num > 0){
    str += num;
    num --;
} */

for (let i = num; i>0; i--){
    str += i+ ' ';
}

console.log(str);

num = 12;
for(let i = 1; i<=num; i++){
    if(i%3 != 0) continue;
    console.log(i);
}

//Task 04
//Выведете на экран числа кратные 3 в диапазоне от 0 до n (n - число, получаемое от пользователя)

//Task 05
//Пользователь должен ввести любое трех-, четырех-, пяти- ... значное число. Задача - вывести на экран по очереди все разряды введенного числа.
//Например: при введном числе 521 на экране должно последовательно появиться сообщения, сначала 5, потом 2 и потом 1

num = 521;
let number;

while(num > 0){
    number = num%10;
    console.log(number);
    num = parseInt(num/10);
}


//Task 06
//Напишите код, который выводит все простые числа из интервала от 2 до n.
//Например для n = 10 результат должен быть 2,3,5,7. (Можно использовать alert, в этом случае будет четыре сообщения или console.log, тогда результат будет выводится в столбик (те вывод не должен быть буквальным 2,3,5,7))
//Натуральное число, большее 1, называется простым, если оно делится на себя и на 1. (То есть таки числа как 2, 3, 5, 7, 11, 13 и тд)

num = 10;    // 2 3 4 5 6 7 8 9 10
let isPrime;

for(let i = 2; i<=num; i++){
    isPrime = true;
        for(let j =2; j<i; j++){
            if(i%j==0){
                isPrime = false;
                break;
            }
        }
     if(isPrime) console.log(i);
}

//Task 07
//Напишите калькулятор, который умеет складывать, вычитать, умножать и делить. Вам нужно будет запросить у пользователя два числа (при этом добиться именно чисел) и символ операции (в качестве символа принимаются только + - / * )
//Выпольнить соотвесвующую операцию и вернуть результат. Если для деления пользователь передаст 0 - вывести сообщение, что на 0 делить нельзя и запрашивать новое число, пока не будет введен корректный делитель.

let firstNum, secondNum, operation;
let repeat = true;
let agree;

while(repeat){
while(isNaN(firstNum) || firstNum == 0){
    firstNum = +prompt('Enter first number'); // parseFloat(prompt('Enter first number'))
}

while(isNaN(secondNum)){
    secondNum = +prompt('Enter second number');
}

operation = prompt('Select operation: + - * /');

switch(operation){
    case '+': {
        alert(`${firstNum}${operation}${secondNum} = ${firstNum + secondNum}`);
        repeat = false;
        break;
    }
    case '-': {
        alert(`${firstNum}${operation}${secondNum} = ${firstNum - secondNum}`);
        repeat = false;
        break;
    }
    case '*': {
        alert(`${firstNum}${operation}${secondNum} = ${firstNum * secondNum}`);
        repeat = false;
        break;
    }
    case '/': {
        if(secondNum==0){
            agree = prompt('Error. Division by zero is forbidden. Would you like enter another divider?\nType "y" if yes');
            if(agree != 'y'){
            repeat = false;
            break;
            }else{
                secondNum = 'two';
                break;
            }
        }else{
        alert(`${firstNum}${operation}${secondNum} = ${firstNum / secondNum}`);
        repeat = false;
        break;
        }
    }
    default: {
       agree = prompt('Error. Wrong operator. Would you like try again?\nType "y" if yes');
       if(agree != 'y'){
           repeat = false;
       }
    }
}
}
