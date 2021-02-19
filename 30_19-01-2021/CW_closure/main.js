// Zamikanie - closure
// kogda estj vnutrennij metod, to on ishet snachala peremenuju, kotoruju nam nuzhna v samom sebe. Zatem on vihodit iz funkcii i ishet vne sebja -  vo vsem dokumente!!!
// Leksicheskoe okruzhenie - zapominaet kakie znachenija estj lokaljno v funkcii i takzhe poluchaet ssilku na peremennie vne funkcii.
// Leksicheskoe okruzhenie - zapominaet to znachenie, pri kotorom vizivaetsja funkcija.

let myName = "Vasya";

function sayHello() {
    console.log(`hello, ${myName}`);
}

myName = "Kolya";
sayHello(); // viveditsja Kolya

function getMessage() {
    let myName = "Petya";

    return function() {
        console.log(myName);
    };
}

let myName = "Vasya";

let test = getMessage();
test();

//***********************    ***** */

const phrase = "Hello";

function say(name) {
    console.log(`${phrase}, ${name}`);
}

say("Vasya");