/*
class Car {  
constructor(model, manufc) {
        this.model = model;
        this.manufc = manufc;
        this.yearOfProduction = 2001;
    }
}
*/

class Car {
    yearOfProduction = 2001;
    model = "Civic";
    manufc = "Honda";
    /*
constructor(model, manufc) {
        this.model = model;
        this.manufc = manufc;
    }
*/
}

let car1 = new Car();
console.log(car1.model, car1.manufc, car1.yearOfProduction); // Civic Honda 2001

//Option 2
class Car {#
    yearOfProduction = 2001; //private field

    constructor(model, manufc) {
        this.model = model;
        this.manufc = manufc;
    }
    static country = "Japan";
    static doSome() {
        console.log("Hello!");
        console.log(this);
    }
    print() {
        console.log(this.#yearOfProduction);
        this.#printPrivate();
    }#
    printPrivate() {
        console.log("private method");
    }
}

console.log(Car.country); // raspechataet prosto stroku
Car.doSome();

let car1 = new Car("Civic", "Honda");
car1.print(); // raspechataet polja i objekti metoda
console.log(car1.model, car1.manufc, car1.yearOfProduction);

car1.color = "black";

console.log(car1.model);
car1.print();