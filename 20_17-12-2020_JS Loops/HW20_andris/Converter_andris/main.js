// Currency converter from rubles to € and $

const rateEuro = 0.011;
const rateDollar = 0.014;
let converterEuro, converterDollar;

let rublesAmount = +prompt("Please enter amount in rubles");
console.log(typeof rublesAmount);

if (isNaN(rublesAmount) || rublesAmount <= 0 || rublesAmount == null) {
    alert("Please, enter positive amount in rubles to continue!!!");
    /* continue; */
} else {
    converterEuro = (rublesAmount * rateEuro).toFixed(2);
    converterDollar = (rublesAmount * rateDollar).toFixed(2);
}
alert(
    "Amount in € (euro) is: " +
    converterEuro +
    "RUR" +
    "\n" +
    "Amount in $ (dollars) is: " +
    converterDollar +
    "RUR"
);