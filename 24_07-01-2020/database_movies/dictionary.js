// Napisatj igru gde russkie slova i anglijskie pokazivajutsja
// Potom chelovek zapominaet eti slova, oni vivoditsja i sravnivaetsja praviljno li on ih zapomnil
// sdelatj cherez dvuhmernij massiv

const words = [
    ["food", "eda", "Essen"],
    ["bike", "velosiped", "Fahrrad"],
    ["apple", "jabloko", "Apfel"],
    ["do", "delatj", "machen"],
    ["mean", "imetj v vidu", "meinen"],
];

/*const indexRu = 1,
    indexDe = 2;
checkUserTranslation(2); // budet proverjatj anglijskij i nemeckij
*/

checkUserTranslation(1);

function checkUserTranslation(index) {
    for (let i = 0; i < words.length; i++) {
        const userTranslation = getUserTranslation(i);
        if (userTranslation === words([i][index])) alert("correct");
        else alert(`Wrong, correct was ${words[i][index]} `);
    }
}

function getUserTranslation(index) {
    return prompt(`What is the word ${words[index][0]} translated? `);
}