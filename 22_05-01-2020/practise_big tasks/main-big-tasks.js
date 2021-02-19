// Task 1
// Sum of even numbers

// Option 1
let sum = 0;
let num = 12;
for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
        sum += i;
    }
}
console.log("Sum of even numbers is: " + sum);

// Option 2
let sum = 0;
let num = 12;
for (let i = 1; i <= num; i++) {
    if (i % 2 != 0) continue;
    sum += i;
}
console.log("Sum of even numbers is: " + sum);

// Option 3
let sum = 0;
let num = 12;
while (num > 0) {
    if (num % 2 == 0 ? (sum += num) : sum) num--;
}
console.log("Sum of even numbers is: " + sum);

// Option 4
let sum = 0;
let num = 12;
while (num > 0) {
    if (num % 2 == 0) {
        sum += num;
    }
    num--;
}
console.log("Sum of even numbers is: " + sum);

// Task 3
// Create a row 987654321 when n is 9
// Option 1

let n = 9;
let str = "";
for (let i = n; i > 0; i--) {
    str += i + "\t";
}
console.log(str);

// Option 2
let n = 9;
let str = "";
while (n > 0) {
    str += n + "\t";
    n--;
}
console.log(str);

// Task 4
// numbers who are even 3

let num = 12;
for (i = 1; i <= num; i++) {
    if (i % 3 != 0) continue;
    console.log(i);
}