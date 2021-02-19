const words = [
        ["food", "еда", "Essen"],
        ["bike", "велосипед", "Fahrrad"],
        ["apple", "яблоко", "Apfel"],
        ["do", "делать", "machen"],
        ["mean", "иметь в виду", "meinen"],
    ],
    ru = 1;
eng = 0;

let nextLevel = finalMessage(checkUserTranslation());
console.log(nextLevel);

checkUserTranslation();

function checkUserTranslation() {
    let errorCount = 0;
    while (words.length != 0) {
        const index = getRandomArrayIndex(words.length);
        const userTransaltion = getUserTranslation(index);
        if (userTransaltion === words[index][ru]) {
            alert("correct!");
            words.splice(index, 1);
        } else {
            alert(`wrong, correct answear is ${words[index][ru]}`);
            errorCount++;
        }
    }
    return errorCount;
}

function getUserTranslation(index) {
    return prompt(`how is the word ${words[index][eng]} translated?`);
}

function getRandomArrayIndex(range) {
    return Math.floor(Math.random() * range);
}

function finalMessage(errorCount) {
    if (errorCount == 0) alert("Great job!");
    else alert(`you were wrong ${errorCount} times`);
    return confirm("Do you want to play one more time?");
}