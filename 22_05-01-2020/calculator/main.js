// Summa na 2 chisel

/*

let num = 10;
let sum = 0;

while (num > 0) {
    if (num % 2 == 0) {
        sum += num;
    }
    num--;
}
console.log(sum);

// summa ne na 2 chisel

sum = 0;
num = 10;

while (num > 0) {
    sum = num % 2 != 0 ? (sum += num) : sum;
    num--;
}
console.log(sum);

// summa ne na 2 chisel s CONTINUE

num = 10;
sum = 0;

for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) continue;
    sum += i;
}
console.log(sum);

// Task 3

num = 10;
let str = "";

 while (num > 0) {
    str += num + " ";
    num--;
}
console.log(str);


for (let i = num; i > 0; i--) {
    str += i + " ";
}
console.log(str);

// Task 4

num = 12;
for (let i = 1; i <= num; i++) {
    if (i % 3 != 0) continue;
    console.log(i);
}

// Task 5

num = 521;
let number;

while (num > 0) {
    number = num % 10;
    console.log(number);
    num = parseInt(num / 10);
}

// Task 6

num = 11;
let isPrime;
for (let i = 2; i <= num; i++) {
    isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(i);
}

*/

// Task 7 - calculator

let firstNum, secondNum, operation;
let repeat = true;
let agree;

while (repeat) {
    while (isNaN(firstNum)) {
        firstNum = +prompt("Enter first number");
    }

    while (isNaN(secondNum)) {
        secondNum = +prompt("Enter second number");
    }

    operation = prompt("Select operation: + - * /");

    switch (operation) {
        case "+":
            {
                alert(`${firstNum}${operation}${secondNum} = ${firstNum + secondNum}`);
                repeat = false;
                break;
            }
        case "-":
            {
                alert(`${firstNum}${operation}${secondNum} = ${firstNum - secondNum}`);
                repeat = false;
                break;
            }
        case "*":
            {
                alert(`${firstNum}${operation}${secondNum} = ${firstNum * secondNum}`);
                repeat = false;
                break;
            }
        case "/":
            {
                if (secondNum == 0) {
                    agree = prompt(
                        "Error. Divide by zero is forbidden. Would you like to repeat?\nType 'y' if yes"
                    );
                    if (agree != "y") {
                        repeat = false;
                        break;
                    } else {
                        secondNum = "two";
                        break;
                    }
                } else {
                    alert(`${firstNum}${operation}${secondNum} = ${firstNum / secondNum}`);
                    repeat = false;
                    break;
                }
            }
        default:
            {
                agree = prompt(
                    "Error. Wrong operator. Would you like to repeat?\nType 'y' if yes"
                );
                if (agree != "y") {
                    repeat = false;
                }
            }
    }
}