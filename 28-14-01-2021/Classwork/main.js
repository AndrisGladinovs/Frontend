// peredavatj parametri v funkciju po umolchaniju

function calc(a, b) {
    return a * b;
}

console.log(calc(2, 3));
//console.log(calc(2)); ne poluchitsja, tak kak odno chislo budet umnozhatjsja na UNDEFIENED

function calc(a, b = 2) {
    // esli NICHEGO ne priletit, to u vas budet znachenie 2
    return a * b;
}

console.log(calc());

function calc(a = 4, b = 2) {
    // esli NICHEGO ne priletit, to u vas budet znachenie a = 4, b = 2
    return a * b;
}

console.log(calc());

function showMessage(from, text) {
    if (text === undefined) {
        text = "text not added";
    }
    console.log(`${from}: ${text}`);
}

showMessage("Vasya");
// Result: Vasya: text not added

// Posle JS6 mozhno srazu peredovatj znachenie

function showMessage(from = "anonym", text = "empty text") {
    // esli nichego ne priletit, to budut takie znachenija
    console.log(`${from}: ${text}`);
}
showMessage("user", "hello");
// user: hello

//************************* DISTRIKTURIZACIJA Array **************/

const arrayName = ["Vasya", "Pupkin"]; // hotim poluchitj, stobi 1 peremenja nazivalasj FIRSTNAME, a vtoraja SECONDNAME

const [firstName, lastName] = arrayName; // estj 3 peremennie: array[], firstName, lastName v First name teperj 'Vasya' , a v lastName 'Pupkin'
console.log(firstName, lastName); //

const arrayName = ["Vasya", "Pupkin"]; // hotim poluchitj, stobi 1 peremenja nazivalasj FIRSTNAME, a vtoraja SECONDNAME
let [firstName, lastName] = arrayName;
firstName = firstName.toUpperCase();
console.log(firstName, lastName); //

const arrayName = ["Vasya", "Pupkin", "Driver"]; // array skobki
let [, lastName, profession] = arrayName; // array skobki. Pervij element ostajotsja pustoj, prosto zapjataja
let [firstName, , profession] = arrayName;
console.log(profession); // obichnie skobki

//******************************* */

const user = {
    name: "Vanya",
    age: 30,
};

for (let [key, value] of Object.entries(user)) {
    // Object.entries , Object. keys, Object.values vozvrashaet MASSIV
    console.log(`${key}: ${value}`);
}
/*   Result:
name: Vanya
age: 30
*/

//********************************** */

let [red, black, ...colors] = ["red", "black", "green", "yellow", "white"]; // ...colors lezit massiv togo, sto mi ne ukazali
console.log(red);
console.log(black);
console.log(colors); // lezhit massiv i vozvrashaet massiv
/*   Result:
red
black
[ 'green', 'yellow', 'white' ]
*/

//********************************** */

let [firstName, lastName] = []; // hranjatsja v pustom massive
console.log(firstName, lastName); // Result: undefiened undefined

let [firstName = "guest", lastName = "anonym"] = []; // hranjatsja v pustom massive
console.log(firstName, lastName);
// Result : guest anonym

let [firstName = "guest", lastName = "anonym"] = ["Vasya"]; // hranjatsja v pustom massive
console.log(firstName, lastName);
// Result : Vasya anonym
//************************************ */

//************************************ DISTRIKTURIZACIJA Object ***********/

const object = {
    title: "box",
    color: "black",
    material: "wood",
};

const { title, color, material } = object; // obrashaemsja v objekte k konkretnim peremenim. Figurnie skobki
// const { color, material, title } = object;  mozhno v raznoj posledovateljnosti
console.log(material);

const object = {
    title: "box",
    color: "black",
    material: "wood",
};

const { title, color = boxColor, material } = object; // (( menjaem nazvanie peremenoj))
const { material } = object; // wood
console.log(boxColor); // Result: black

//****************** */

const options = {
    title: "Menu",
};

let {
    width = +prompt("Which width you need?"),
        title = prompt("Enter the name of product"),
} = options;
console.log(width);
console.log(title);
// 1000 Menu
console.log(options); // Result: Menu. Nichego ne izmenitsja po sravnenija s nachalom options

//********************* Distrikturizacija SLOZHNOGO Objekta ***************** */

const object = {
    title: "box",
    color: "black",
    material: "wood",
    size: {
        width: 200,
        height: 150,
        length: 500,
    },
};

const { material, size } = object; // distrikturiruju - dostaju, vitaskivaju iz korobki otdeljnie elementi
console.log(size);
// { width: 200, height: 150, length: 500 }

const { width, height, length } = object.size;
console.log(size);
console.log(height);
// { width: 200, height: 150, length: 500 }
// 150

const object = {
    title: "box",
    color: "black",
    material: "wood",
    size: {
        width: 200,
        height: 150,
        length: 500,
    },
};

let material, size; // tak tozeh budet rabotatj !!!!!!!!!
({ material, size } = object);
console.log(material, size);
/*
wood { width: 200, height: 150, length: 500 }
*/

/************** */

const complexObject = {
    size: {
        width: 100,
        height: 200,
    },
    items: ["Apple", "Orange"],
    fill: true,
};

const {
    // raskladivaem nash objekt
    size: { width, height },
    items: [fruit1, fruit2],
    fill,
} = complexObject;

console.log(fruit1); // Result: Apple
console.log(fruit1, width, fruit2, height, fill);
/*
Apple
Apple 100 Orange 200 true
*/

// SNACHALA VITASKIVAEM ELEMENT A TOLJKO POTOM MENJAEM

fruit1 = "Cherry"; // ili tak pomenjatj Apple na Cherry
complexObject.items[0] = "Cherry"; // ili tak pomenjatj Apple na Cherry v samom massive
complexObject.items.push("Pineapple"); // ili tak dobavljaem
complexObject.items[complexObject.items.length] = "Patato"; // ili tak dobavljaem

//******************************* REKURSIJA / Recursion *******************/
// 5! = 5 * 4 * 3 * 2 * 1  --> 4! * 5
// 4! = 4 * 3 * 2 * 1      --> 3! * 4
// 3! = 3 * 2 * 1          --> 2! * 3
// 2! = 2 * 1              --> 1! * 2
// 1! = 0 * 1               --> 0! * 1
// 0! = 1                  --> 1

function recursiveFactorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return recursiveFactorial(n - 1) * n;
    }
}

recursiveFactorial(4);