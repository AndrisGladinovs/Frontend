// ************* Task 1 *******************
// calculate the sum of all salaries

let salaries = {
    John: 2000,
    Ann: 2100,
    Dave: 2100,
    Kate: 1900,
};

let sum = salaries.John + salaries.Ann + salaries.Dave + salaries.Kate;

console.log("The sum of all salaries is: " + sum + "€");
console.log(`All salaries sum: ${sum} €`);

// Option 2
// using key in salaries
let sum2 = 0;
for (let key in salaries) {
    sum2 += salaries[key];
}
console.log(`Sum of the salaries: ${sum2} €`);

// Option 3
let sum3 =
    salaries["John"] + salaries["Ann"] + salaries["Dave"] + salaries["Kate"];
console.log(sum3 + "€");

// ************* Task 2 *******************
console.log(
    `John has a salary ${salaries.John} € and Kate has a salary ${salaries.Kate} €`
);

//********************************************************

for (let key in salaries) {
    console.log(`${key} has a salary ${salaries[key]} €`);
}

// ************* Task 3 *******************
// create 2 new literals in object

salaries.Andris = 3500;
salaries.Robert = 3200;

console.log("********************");

for (let key in salaries) {
    console.log(`${key} has a salary ${salaries[key]} €`);
}

// to show a salary just of 2 new workers
let keyAndris = "Andris";
let keyRobert = "Robert";
console.log("Salary of 2 new workers are: ");
console.log(
    `${keyAndris} has a salary ${salaries.Andris} € and ${keyRobert} has a salary ${salaries.Robert} €`
);

// practise option
//creating an objects with 2 new workers. PERFECT WORKS!!!!

const newWorkers = {
    Andris: 3500,
    Robert: 2000,
};

for (const [key, value] of Object.entries(newWorkers)) {
    console.log(`${key} € has a salary ${value} €`);
}

// ************* Task 4 *******************

/*  let salaries = {
    John: 2000,
    Ann: 2100,
    Dave: 2100,
    Kate: 1900,
};

salaries.Andris = 3200;
salaries.Robert = 3100;

let maxSalary = 0;
let keyName = "";

for (let key in salaries) {
    if (salaries[key] > maxSalary) {
        maxSalary = salaries[key];
        keyName = key;
    }
}
console.log(`${keyName} has a biggest salary: ${maxSalary} €`);

*/