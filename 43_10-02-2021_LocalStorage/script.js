//************************ Call, apply, bind ***********/
function sayName() {
    console.log(this); // raspechativaet kontekst. This budet WINDOW
    console.log(`${this.name}, ${surname}`); // nichego ne napechataet. U Window netu name
}

const user = {
    name: "John",
};

// Solution:
sayName.apply(user, ["Smith"]); //primenjaju
sayName.call(user, Smith); // vizivaju

function personalMessage(message) {
    console.log(`${this.name} say: ${message}`);
}

personalMessage("Hello!"); // undefined say Hello!

// Solution:

const messageFromJohn = personalMessage.bind(user);
messageFromJohn("Nice to see you!"); // bind nam vsegda vozvrashaet metod. V bind nuzhno sozdavatj peremenuju, stobi vospoljzovatsja v nuzhnij moment etim metodom. Svjazivaem, no ne vizivaem. Poetomu nuzhna peremenaja.

//*********************************** Parametri po umolchaniju */
// esli nichego ne peredajotsja

function getSomething(num, num1) {
    let n = num || 100;
    let n1 = num1 || 5;
    console.log(n + n1);
}
getSomething(0, 5); // Kogda primenjali ranjshe s 0, to vernjotsja podschet s oshibkoj i postavitsja vmesto 0 cifra 100.

// New solution:
function getSomething(num = 100, num1 = 5) {
    console.log(num + num1);
}
getSomething(0, 5); // vsjo srabotaet

//********************************************* */
function fun1() {
    console.log(arguments); //vnutrenee pole ljubogo metoda. Vozvrashaet objekti  vseh argumentov
}
fun1();
fun1("Anna", "John", "Jack"); // vernjotsja psevdomassiv so vsemi znachenijami, kotorie peredanni pri vizove

function sumAll() {
    let sum = 0;
    for (let key in arguments) {
        sum += arguments[key];
    }
    return sum;
}

console.log(sumAll(1, 2));
console.log(sumAll(1, 2, 4, 5, 8));
console.log(sumAll(1, 2, 45, 17, 99));

function print() {
    for (let key in arguments) {
        console.log(arguments[key]);
    }
}
print("hallo", "everyone", "in", "Berlin!");