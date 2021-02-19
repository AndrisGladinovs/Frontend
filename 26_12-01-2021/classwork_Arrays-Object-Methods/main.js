// SPLIT
// razbiraet i priobrazovaet strochku v massiv s opredeljonim razdelitelem

let names = "Ivan, Anna, Vasya, Olya, Petya";
let nameArray = names.split(", ");
console.log(nameArray); // [ 'Ivan', 'Anna', 'Vasya', 'Olya', 'Petya' ]
console.log(nameArray[2]); // Vasya

nameArray.forEach((name) => console.log(`message send to: ${name}`));
// message send to: Ivan
// message send to: Anna
// message send to: Vasya
// message send to: Olya
// message send to: Petya

// JOIN
// skleivaet i priobrazovivaet massiv v stroku cherez opredeljonij simvol/razdelitelj

console.log(nameArray.join("-"));

// REVERSE ARRAY
let names = "Ivan, Anna, Vasya, Olya, Petya";
console.log(names.split(", ").reverse().join(", "));
// posle vizova vernjotsja massiv s takim razdelitelem

console.log("abcdef".split("").reverse().join(""));

// SORT ARRAY - leksigraficheskij
// predstavljaet v vide strok i potom po alfavitu sortiruet
const letters = ["b", "c", "f", "a", "e"];
letters.sort();
console.log(letters);

// imenno poetomu ne otsortiruet cifri. TOLJKO bukvi
const numbers = [2, 1, 7, 11, 15, 20, 12];
numbers.sort();
console.log(numbers);

// **************** Object ******
// vozvrashaet massiv kljuchej objekta -Object.keys()
// vozvrashaet massiv znachenija objekta - VALUES
// vozvrashaet kluch + znachenija massiva objekta -ENTRIES

const user = {
    name: "Vasya",
    age: 25,
    isMarried: true,
}; // esli inicializiruem objekt to objazateljno nuzna tochka s zapjatj ;

console.log(Object.keys(user)); // mozhno tak  [ 'name', 'age', 'isMarried' ]
const keys = Object.keys(user); // mozhno i tak [ 'name', 'age', 'isMarried' ]

// uznatj skoljko vsego kljuchej u objekta. Kolichestvo
console.log(keys.length);
console.log(Object.keys(user).length);

// VALUE
console.log(Object.values(user)); // [ 'Vasya', 25, true ]

// ENTRIES
console.log(Object.entries(user)); // [ [ 'name', 'Vasya' ], [ 'age', 25 ], [ 'isMarried', true ] ]

// *********** Transformacija Objekta v Massiv i obratno  ***********

const prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

// hotim uvelichitj vsjo v dva raza
// 1. predstavljaem snachala v vide massiva
// 2. vernjom massiv s uvelichennim znacheniem
// 3. sohranim v novij objekt s povishennimi cenami

let doublePrice = Object.entries(prices).map(([key, value]) => [
    key,
    value * 2,
]);
console.log(doublePrice);
// [ [ 'banana', 2 ], [ 'orange', 4 ], [ 'meat', 8 ] ]

// 3. Priobrazovatj massiv v objekt

doublePrice = Object.fromEntries(doublePrice); // from Array to Object
console.log(doublePrice);
// { banana: 2, orange: 4, meat: 8 }
console.log(doublePrice.meat); // 8

/// ******************** Links, ssilki *******************
// Ssilki primenjajutsja k slozhnim tipam dannih (Array, Object)
let a = 10;
let b = 20;

function doSomething(a, b) {
    a *= a;
    console.log(a);
    b /= 4;
    console.log(b);
}

//doSomething(12, 15);

//Result 144
//3.75
//10 20

doSomething(a, b);
console.log(a, b); // znachenie a i b ne menjajutsja
/* Result is:
100
5
10 20
*/

let array = [1, 2, 3, 4, 5];

function changeArray(arr) {
    for (let index = 0; index < array.length; index++) {
        arr[index] = arr[index] * 2; // indeksi srabativajut i znachenija elementov massiva menjajutsja
    }
}
changeArray(array);
console.log(array);
//result  [ 2, 4, 6, 8, 10 ]

/* ***************************  Links - oblastj STAKE, oblastj HEAP (kucha)   *************************** */
// STAKE:  1. vse Primitivi 2. rezuljatati, kotorie poluchajutsja v processe metodov 3. Ssilki
// Stake menjshe HEAP i tuda bistree sitema dobiratesja, bistree dostup
// HEAP: hranitsja vsjo ostaljnoe
// Vse primitivi rabotajut po znacheniju
// Objekt i massiv rabotaet po ssilke (vozvrashaetsja adres, ssilka). Menjaju elementi massiva po ego adresu

// eta funkcija srabotaet, tak kak let array eto ssilka (HEAP))
let array = [1, 2, 3, 4, 5];

function changeArray(arr) {
    for (let index = 0; index < array.length; index++) {
        arr[index] = arr[index] * 2; // indeksi srabativajut i znachenija elementov massiva menjajutsja
    }
}
changeArray(array);
console.log(array); // [ 2, 4, 6, 8, 10 ]

// a eta funkcija uzhe ne srabotaet, ne budet nikakih izmenenij, tak kak uzhe rabotajut so znachenijami, a ne ssilkoj i vernjotsja prezhnij massiv so znachenijami
let array = [1, 2, 3, 4, 5];

function changeArray(array) {
    for (num of arr) num *= 2;
}
console.log(array); // [ 1, 2, 3, 4, 5 ]

array.forEach((num) => num * 2);
console.log(array); // tozhe ostanetsja takzhe  [ 1, 2, 3, 4, 5 ]

// *********
const user1 = {
    name: "Vasya",
    age: 25,
    isMarried: true,
};

const user2 = user1; // ne sozdajom novuju oblastj pamjati. Mi govorim, sto user2 budet ssilatsja na tuzhe oblastj pamjati, sto i user1.
// u nas sejchas estj objekt s dvumja ssilkami. Mi kopirujum v user2 putj k user1

user2.name = "Petya";

console.log(user1); //{ name: 'Petya', age: 25, isMarried: true }
console.log(user1); //{ name: 'Petya', age: 25, isMarried: true }

//******************** */

const oldArray = ["a", "b", "c"];
const newArray = oldArray; // newArray kopiruet oblastj vidimosti i imeet tuzhe silku  sto i oldArray
newArray[3] = "d";

console.log(oldArray); // [ 'a', 'b', 'c', 'd' ]  odin i tot zhe rezuljat. Imejut tu zhe ssilku
console.log(newArray); // [ 'a', 'b', 'c', 'd' ]

// SOLUTION for ARRAY:
//const newArray = oldArray.slice();  // sozdajotsja novij massiv a ne kopiruetsja oblastj pamjati / ssilka

// Solution for OBJECT

function copy(obj) {
    let objCopy = {};
    for (key in obj) {
        objCopy[key] = obj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4,
    },
};

const copyNumbers = copy(numbers);
copyNumbers.a = 10;

console.log(numbers);
console.log(copyNumbers);
// Result:
// { a: 2, b: 5, c: { x: 7, y: 4 } }
// { a: 10, b: 5, c: { x: 7, y: 4 } }

copyNumbers.c.x = 10;
// 10 pomenjaetsja i v Object "numbers" i v Object "copyNumbers". Vo vlozhennom objekte pri prjamom izmenenii (numbers.a.x = 4) vlozhennogo elementa samo znachenie a stanovitsja ssilkoj i znachenie menjaetsja srazu v dvuh objektah

// ********************************* OBJECT ASSIGN - metod v objekte **********
// pishu snachala kuda, potom sto dobavitj
//Object. asign (where, what);

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4,
    },
};

const add = {
    d: 17,
    e: 25,
};

console.log(Object.assign(numbers, add));
/* Rezuljtat:

{ a: 2, b: 5, c: { x: 7, y: 4 }, d: 17, e: 25 }

*/

const cloneAdd = Object.assign({}, add);
cloneAdd.d = 25; // SRABOTAET i ne kasnjotsja "add" objekta

console.log(add);
console.add(cloneAdd);

//**************************************** */

const client = { name: "Vasya" };
const permission1 = { canView: true };
const permission2 = { canEdit: true };

Object.assign(client, permission1, permission2);
console.log(client);
// Result: { name: 'Vasya', canView: true, canEdit: true }

Object.assign(client, { name: "Petja", age: 25 }); // infa perezapishetsja i budet toljko Petja
console.log(client);
// Result: { name: 'Petja', canView: true, canEdit: true, age: 25 }

//************************ SPREAD operator for ARRAY - razvorachivajushijsja operator **********/
// [...what you want to add]

const video = ["youtube", "vimeo", "rutube"],
    blogs = ["wordpress", "livejournal", "blogger"],
    internet = [...video, ...blogs, "facebook", "instagram"];

console.log(internet);

/* Result:
[
  'youtube',
  'vimeo',
  'rutube',
  'wordpress',
  'livejournal',
  'blogger',
  'facebook',
  'instagram'
]
*/

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];
log(...num); // raspakuet massiv s dannimi i napechataet v stolbik
/*
2
5
7
*/

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];
const message = ["hello", "nice to see you", "good bye!"];
log(...message);
/*
hello
nice to see you
good bye!
*/

//************** Copy Array with SPREAD **************/
const arrayOne = ["a", "b"];
const copyArrayOne = [...arrayOne]; // sozdastja novij massiv s novoj oblastju pamjati i temi zhe dannimi kka arrayOne
console.log(copyArrayOne);

//************** Copy Object with SPREAD **************/
const objMore = {
    one: 1,
    two: 2,
};

const copyObjMore = {...objMore };
console.log(copyObjMore);

/* Result

{ one: 1, two: 2 }

*/