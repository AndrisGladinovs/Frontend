// ************** String methods *************

const str = "Hello!\n'world'\u{1F60D}";
const str2 = `hello
world!`;
console.log(str2);
console.log(str);

//Dlina stroki
console.log(str.length);

// Dostup k simvolam. Obrashaemsja po indeksu kak v massive
console.log(str[2]);
console.log(str.charAt(4)); //vernjot element pod vtorim indeksom
console.log(str2.charAt(str2.length - 1));

// Menjaet simvol v strochke
str2[0] = "H";
console.log(str2); // bukva kak bila tak i ostanetsja malenjkoj!!!! Mi ne mozhem tak prosto pomenjatj simvol v uzhe sushhestvujushhej stroke
// nelzja pomenjatj staruju stroku, toljko esli sozdatj i perepisatj ejo v novuju
str2 = "HELLO world!";

str2.toLowerCase();
console.log(str2); // nichego ne proizoshlo

str2 = str2.toLowerCase();
console.log(str2); // poluchilosj!!! Works!!!

str2 = str2.toUpperCase();
console.log(str2);

// .indexOf - kakoj po scheti indeks simvola v stroke
console.log(str2.indexOf("w"));
console.log(str2.indexOf("W", 9)); // 9 eto s kakogo indeksa nachinaem iskatj bukvu
console.log(str2.lastIndexOf("o")); // vivodit poslednij indeks poslednej bukvi o

// .startsWith / endsWith - chuvstvitelen k registru. Vozvrashaet TRUE ili FALSE
console.log(str2.startsWith("HEL")); // true
console.log(str2.endsWith("!"));

// .includes - chuvstvitelen k registru. Vozvrashaet TRUE ili FALSE
console.log(str2.includes("WOR")); // true

// SREZ stroki

// 1 option SLICE - rabotaet dazhe s otricateljnimi znachenijami

console.log(str2.slice(6, 11)); // 11 not includes
console.log(str2.slice(-6, -2)); // s konca

// 2 option SUBSTRING - ne rabotaet s otricateljnimi znachenijami
console.log(str2.substring(11, 6)); // vsjo ravno pojmjot, sto nachinaem s menjshego
console.log(str2.substring(str2[str2.length - 1])); // poslednij simvol
console.log(str2.substring(str2.length - 1));

// 3 option SUBSTR
console.log(str2.substr(6, 3)); // s kakogo simvola nachinaem i skoljko simvolov polse nego hotim uvidetj

// REPLACE
str3 = str2.replace("e", "T"); // ishet toljko po simvolu
console.log(str3); // zamenjaet 2 element na bukvu T
// console.log(str2.replace('E', 'T'));