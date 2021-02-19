// Create a script to find a factorial of the provided number

let result = 1;
let factorial = 4; // the number of which factorial we need to find

function findFactorial(factorial) {
    for (let i = 1; i <= factorial; i++) {
        result *= i;
    }
    return result;
}
console.log(`Factorial of number ${factorial} is ` + findFactorial(factorial));