// ****************** Task 1 ****************
// Max sum sub array

const arr = [2, 4, -8, 9, 11];

function getMaxSubSum(arr) {
    let currentSum = 0;
    let maxSum = 0;
    for (let item of arr) {
        // rabotaet kak let i. Posledovateljno kazhduju cifru pereberaet
        currentSum += item;
        maxSum = Math.max(maxSum, currentSum);
        if (currentSum < 0) {
            currentSum = 0;
        }
    }
    return maxSum;
}
console.log(getMaxSubSum(arr));

// dopolniteljno ,esli sozdatj funkciju, kotoraja sravnivaet 2 chisla

function findMaxNumber(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

// dopolniteljno vtoroj metod kak sdelatj funkciju, kotoraja sravnivaet 2 chisla
function findMaxNumber(a, b) {
    return a > b ? a : b;
}

// dlja trenirovki proveritj massiv sostoit iz 5 elementov ili net (dlinna massiva))
function checkArrayLength(arr) {
    return arr.length == 5;
    // return arr.length == 5 ? true : false;
}

/******************** Task 2 ************ */
// find factorial

function factorial(n) {
    let result = 1;
    if (n == 0 || n == 1) return result;
    for (let index = 0; index <= n; index++) {
        result *= index;
    }
    return result;
}