// Task 1.
// Count the total amount (sum) of all salaries)

let salaries = {
    John: 2000,
    Ann: 2100,
    Piotr: 2100,
    Kate: 1900,
};

let sum = salaries.John + salaries.Ann + salaries.Piotr + salaries.Kate;
// console.log("The sum of all salaries is: " + sum); WORKS!!!
console.log(`Salaries sum = ${sum} euros`);

let sum2 =
    salaries["John"] + salaries["Ann"] + salaries["Piotr"] + salaries["Kate"];
console.log(`Salaries sum extra check result = ${sum2} euros`);
console.log("******* TASK END ******");

// Task 2
// Display only John's and Kate's salary
console.log(
    `John has a salary ${salaries["John"]} and Kate has a salary ${salaries["Kate"]} `
);

for (let key in salaries) {
    console.log(`Worker ${key} has a salary ${salaries[key]}`);
}
console.log("******* TASK END *******");

// Task 3
// Create 2 new literals in salaries

salaries["Adam"] = 2400;
salaries["Ivan"] = 2200;
for (var key in salaries) {
    console.log(`Worker '${key}' has a salary: ${salaries[key]}`);
}

console.log("******* TASK END ******");

//Task 4
// Find out who has the highest salary

let arr = Object.values(salaries);
let min = Math.min(...arr);
let max = Math.max(...arr);
console.log(`Min value: ${min}, max value: ${max}`); // work
console.log(`Max salary: ${max} has ${key.max}`); // DONT WORK :(