//****************** Object *************/
let user = {
    id: 123,
    name: "John",
    age: 25,
    display: function() {
        console.log(`User id: ${this.id}, name: ${this.name}, age: ${this.age}`);
    },
};

user.display(); // every new user must be added manually

// Solution (automatic). Create a FUNCTION CONSTRUCTOR. This constructor creates RULES - how the future object must look like

let count = 1;

function User(name, age) {
    (this.id = "00" + count++),
    (this.name = name),
    (this.age = age),
    (this.display = function() {
        console.log(`User id: ${this.id}, name: ${this.name}, age: ${this.age}`);
    });
}

const user2 = new User("Tony", 28);
user2.display();
const user3 = new User("Anna", 30);
user3.display();

//**************************** Nasledovanie ********** */
// every prototype has an object. We can use a part of the prototype to creat a new object. For example: prototype = user; newObject has prototype fields +  ADMINISTRATOR field

let employee = {
    id: 123,
    name: "John",
    age: 23,
    display: function() {},
};

let wageEmployee = {
    // employee who gets money per hour
    /*id: 123,
                  name: 'John',
                  age: 23, */
    hours: 100,
    hourPrice: 20,
    __proto__: employee,
};

let salaryEmployee = {
    id: 123,
    name: "John",
    age: 23,
    salary: 1200,
};

wageEmployee.__proto__ = employee;
console.dir(wageEmployee);

/************** */

const arr = [1, 2, 3, 4];
console.dir(arr);