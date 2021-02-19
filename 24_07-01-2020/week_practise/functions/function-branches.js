function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm("Parents allowed to watch this movie?");
    }
}

function showMovie(age) {
    if (!checkAge(age)) {
        return; // end the method
    }
    alert("You can watch this movie"); // this is true option
}

let ageUser = +prompt("Enter your age");
showMovie(ageUser);

//******************************************************* */
// ************** HOSTING ***************************

// probegaet i zagruzhaet snachala komandu script, zatem zagruzheat vse funkcii i vse var. Sohranjaet ih v operativku

console.log(userName); // znachenie eshe neopredelenno UNDEFIENED
var userName = "Vasya"; // probegaet po scriptu, ishhet funkcii i peremennie var
console.log(userName); // uzhe opredelenno

var userName; // znachenie eshe neopredelenno UNDEFIENED
console.log(userName); // znachenie eshe neopredelenno UNDEFIENED
userName = "Vasya"; // probegaet po scriptu, ishhet funkcii i peremennie var
console.log(userName); // uzhe opredelenno

// ************** CALLBACK ***************************
// Sposob borjbi ot sinhronostju, posledovateljnostju
// Callback - vozmozhnostj peredatj odnu funkciju v druguju v vide argumenta

function learnJS(lang, callback) {
    console.log(`I learn: ${lang} `);
    callback();
}

function showMessageThree() {
    console.log("I like it");
}

learnJS("JavaScript", showMessageThree); // vtoraja funkcija bez kruglih skobok
learnJS("English", function() {
    console.log("It is very interesting");
});

//**************************** */
function ask(question, yes, no) {
    if (confirm(question)) {
        yes();
    } else {
        no();
    }
}

ask(
    "Are you agree?",
    function() {
        alert("You agree");
    },
    function() {
        alert("You disagree");
    }
);

//************** Strelochnie */
const calc2 = (a) => a * 3;
console.log(calc2(8));

const calc = (a, b) => {
    return a * b;
};
console.log(calc(3, 9));

const calc = (a, b) => a * b;
console.log(calc(5, 3));

const calc = (a, b) => {
    var a = 5;
    var b = 3;
    return a - b;
};
console.log(calc(5, 3));