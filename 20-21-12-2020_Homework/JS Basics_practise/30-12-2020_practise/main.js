var nameArray = ["Sweden", "Russia", "Germany"];
var name = nameArray[5];

if (name === "Sweden") {
    console.log("Hi, Swedenska");
} else if (name === "Russia") {
    console.log("Privet Rossija");
} else if (name === "Germany") {
    console.log("Hallo, Deutschland!");
} else {
    console.log("Uknown, you are not in my list");
}

for (var i = 3; i < 10000; i *= 3) {
    document.write(i + ", " + "<br>");
}

let animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
for (var i = 0; i < animals.length; i++) {
    document.write(animals[i] + " - прекрасное животное" + "<br>");
}

// Task. Take a random char from an alphabet and put it to the new String which has length 6.
var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let randomString = "";
while (randomString.length < 6) {
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
}
document.write(randomString);