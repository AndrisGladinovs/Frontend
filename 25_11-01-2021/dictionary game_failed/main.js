// ******************++  Task 3 *************
// Написать игру в русско-английские слова
// пользователя спрашивают перевод английского слова, если ответ правильный - вывести сообщение
// "Отлично!" , если нет - правильный перевод слова
//Попробовать реализовать логику используя двухмерный массив;
// esli vse otveti pravilnie, to vivoditsja fraza "Congratulations, you have a great memory!"

// Solution with methods
//1. function - to show all words to user
// 2. function - Ask user to enter translation of some words
// 3. function - Check if user answer was correct
// 4. function - if all 5 answers were correct, type an alert "Congratulations, you have a great memory";

let array = [
    ["dog", "собака", "Hund"],
    ["apple", "яблоко", "Apfel"],
    ["wolf", "волк", "Wolf"],
    ["plane", "самолет", "Flugzeug"],
    ["country", "страна", "Land"],
];

const indexRu = 1,
    indexDe = 2;

showWords(
    `Remember the words and translations:\n 1. ${array[0]}\n 2. ${array[1]}\n 3. ${array[2]}\n 4. ${array[3]}\n 5. ${array[4]}\n`
);

//getUserTranslation(3);
checkUserAnswear(2);

function showWords(alertText) {
    alert(alertText);
}

function checkUserAnswear(index) {
    var correct = 0;
    for (let i = 0; i < array.length; i++) {
        const userTranslation = getUserTranslation(i);
        if (userTranslation === array[i][index]) {
            correct++;
            alert("Correct");
        } else {
            alert(`Wrong. Correct word is ${array[i][index]}`);
        }
    }
    correct == array.length ?
        alert("Everything correct. You have a perfect memory!!!") :
        alert(
            `Not bad. You got ${correct} right answers out of ${wordsArray.length} `
        );
}

function getUserTranslation(index) {
    return prompt(`What was the right translation of '${array[index][0]}' ? `);
}