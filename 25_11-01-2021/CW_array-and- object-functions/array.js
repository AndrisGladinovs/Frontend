// **************** Array functions ***********

// DELETE element from the array
// SPLICE - perezapisivaet
// SLICE - sozdajot novj massiv i ne perezapisivaet starij
const num = [1, 2, 3, 4];
delete num[1]; // ostavljaet jachejku pustuju
console.log(num);

num.splice(1, 1); // s pervogo elementa udalitj 1 element. Polnostju udaljaet element i umenjshaet dlinu
console.log(num);
console.log(num.length);

num.splice(1, 2, 5, 6); // s pervogo elelmenta udalitj 2 elementa. A posle etogo vstavj dva chisla 5 i 6

num.slice(1, 3); // stobi ispoljzovatj slice v massivah kak i v stroke nuzhna novaja peremenaja kuda vsjo sohranjaem
const num1 = num.slice(1, 3); // ne menjaet iznachaljnij massiv i sozdajot novij
console.log(num1);

// CONCAT
// sozdajot novij massiv i ne kopiruet starij

const newNums = num.concat(num1, 6, 7, num1); // k num pribavj num1 i 6,7 i eshe num1
console.log(newNums);

// FOREACH - perebor vseh elementov massiva

/* num.forEach(item => item * 2);
console.log(num); */

num.forEach((item) => console.log(item)); // pechataet v stolbik vse cifry massiva
num.forEach((item, index, array) =>
    console.log(`${item} has index ${index}, in array ${array}`)
);

// indexOf, lastIndexOf
console.log(num.indexOf(5)); // which index has number 5

// FIND
console.log(num.find((item) => (item = 5))); //peredajom strelochnuju funkciju. Vernjot TRUE ili FALSE. No mozhet vernutj i znachenie tozhe (v sledujushem uroke objasnjat)

let users = [
    { id: 1, name: "Vasya" },
    { id: 2, name: "Olga" },
    { id: 3, name: "Vanya" },
];

let user = users.find((item) => item.id == 1); // vernjot true i Vasya
console.log(user); // vernjot ID: 1 name: Vasya
console.log(user.name); // vernjot toljko Vasya

// vernutj u kogo dlina bukv ravna 5
let userWithLongName = users.filter((item) => item.name.length == 5);
console.log(userWithLongName);
let userWithLongName2 = users.filter((item) => item.name.startsWith("O"));
console.log(userWithLongName2);

// MAP - vipolnjaet novij zapolnennij massiv
num = [1, 2, 3, 4];
let result = num.map((num) => num * 2);
console.log(result);
console.log(num);

const cities = ["Berlin", "London", "Paris", "Moscow"];
const citiesLength = cities.map((city) => city.length);
console.log(citiesLength);