let firstNum, secondNum, operation;

while (isNaN(firstNum)) {
    firstNum = +prompt("Enter first number");
}

while (isNaN(secondNum)) {
    secondNum = +prompt("Enter second number");
}

operation = prompt("Enter which operation you choose + - / *");

switch (operation) {
    case "+":
        {
            alert(`${firstNum} ${operation} ${secondNum} = ${firstNum + secondNum}`);
            break;
        }
    case "-":
        {
            alert(`${firstNum} ${operation} ${secondNum} = ${firstNum - secondNum}`);
            break;
        }
    case "*":
        {
            alert(`${firstNum} ${operation} ${secondNum} = ${firstNum * secondNum}`);
            break;
        }
    case "/":
        {
            if (secondNum == 0) {
                alert("Error. You can not divide number to 0");
            } else {
                alert(`${firstNum} ${operation} ${secondNum} = ${firstNum / secondNum}`);
                break;
            }
        }
    default:
        {
            alert("Error. Wrong operator.");
        }
}