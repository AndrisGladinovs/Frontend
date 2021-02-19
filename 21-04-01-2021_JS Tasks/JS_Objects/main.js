// const person = new Object ();
const person = {
    name: "John",
    age: 30,
    "likes books": true,
};

console.log(person.name + ", " + person.age);

person.name = "Ivan";
console.log(person.name);

person.isMarried = "true";

console.log(person.isMarried);
console.log(person.person); // undefined result

// delete person.age;
// console.log(person.age);

console.log(person["likes books"]);
console.log(person["name"]);

let key = "likes books";
console.log(person[key]);

let personKey = prompt("What would you like to know?", "name");
alert(person[personKey]);

// ************************************** //

let fruit = prompt("Which fruit would you like to buy?", "apple");
let bag = {
    [fruit]: 5,
};
alert(bag.apple); // will show us amount of apples we need to buy

// ************************************** //

console.log(person.lastName === undefined); // check if we have last name vivedit true

console.log("lastName" in person); // check if we have last name

// ************************************** //

for (let key in person) {
    console.log(`Properties ${key} has value ${person[key]}`);
}

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    color: {
        border: "black",
        bg: "red",
    },
    padding: {
        top: 10,
        bottom: 20,
        left: 50,
    },
};

for (let key in options) {
    if (typeof options[key] === "object") {
        for (let i in options[key]) {
            console.log(`Properties '${i}' has value ${options[key][i]}`);
        }
    } else console.log(`Properties '${key}' has value ${options[key]}`);
}

console.log(options["color"]["border"]);
/* console.log(options.color["border"]);  also works!!! */