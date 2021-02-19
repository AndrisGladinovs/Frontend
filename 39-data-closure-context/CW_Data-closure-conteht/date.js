const now = new Date();
console.log(now);

const now = new Date("2021-02-03");
console.log(now); // sbrositsja chasi i minuti

const now = new Date(2021, 2, 3, 20);
console.log(now);
// 2021-03-03T19:00:00.000Z

const now = new Date(-999999); //minus milisekund ot 1 janvarja 1970 goda
console.log(now);
// 1969-12-31T23:43:20.001Z

console.log(now.getFullYear()); // 2021
console.log(now.getMonth()); // 1 - February
console.log(now.getDate()); // 3
console.log(now.getDay()); // 3 , sunday = 0
console.log(now.getHours()); // vidajot ne po grinvichu, local hours
console.log(now.getUTCHours); // po grinvichu

console.log(now.getTimezoneOffset()); // vozvrashaet raznicu nashego vremeni s Grinvich
console.log(now.getTime()); // vernjot milisekundi skoljko proshlo ot 1.01.1970 do local time
//************************************************** */

console.log(now.setHours(18));
console.log(now);

console.log(now.setHours(40));
console.log(now); // perskochit na sledujushij denj

let start = new Date(); // hranitsja v milisekundah
for (let i = 0; i < 100000; i++) {
    let some = i ** 2;
}
let end = new Date();

console.log(`time running is ${end - start} ms`);

//*************************** Homework */

const endDate = new Date("2021-02-10");

const daysLeft = endDate - new Date(); // vernjot milisekundi
const days = Math.floor(daysLeft / (24 * 60 * 60 * 1000));
hours = Math.floor((daysLeft / (60 * 60 * 1000)) % 24); //ostatok ostanutsja polnie chasi kotorie ne doshli do novogo dnja
minutes = Math.floor((daysLeft / (60 * 1000)) % 60);
seconds = Math.floor((daysLeft / 1000) % 60);

console.log(days, hours, minutes, seconds);