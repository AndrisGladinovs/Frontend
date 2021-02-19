// localStorage.setItem("MyKey", "1234567");

// console.log(localStorage.getItem("MyKey"));
// console.log(localStorage.getItem("key"));
// localStorage.removeItem("MyKey");
// console.log(localStorage.getItem("newKey"));

// localStorage.clear();

// Task with input and button

const input = document.querySelector("#my_input"),
    saveBtn = document.querySelector("#saveBtn");

let count = 0;

saveBtn.onclick = function() {
    localStorage.setItem(`key_${count++}`, input.value);
};

localStorage.clear();

// Value: iz object v stroku

let xml = `
<p1>
<name>John</name>
<age>23</age>
</p1>
`;

let json = `
{"name":"John", "age":23}
`;

let csv = "John,23";

const p1 = {
    name: "John",
    age: 23,
};

localStorage.setItem("person", p1); // result {object Object}

console.log(p1.toString()); // Object object

localStorage.setItem("person", csv);

// iz strochki v objekt

const str = localStorage.getItem("person");
let personDate = str.split(","); // teperj u nas massiv iz dvuh elementov, razdelennie zapjatoj

const p2 = {
    name: personDate[0],
    age: parseInt(personDate[1]),
};
console.log(p2);

// dolzhen bitj obshij key
// sohranjaem vesj massiv/objekt v vide stroki, kotorie razdeleni na kontakti
//John,23&Jack,45&Anna,21&Petr,36
//.split("&") -> [j,23] [j,45] [a,21] [p,36]
// teperj nuzhno massiv cherez zapjatuju vivesti v stroku