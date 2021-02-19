const login = prompt("enter login please");
let message;

if (login == "admin") {
    const password = prompt("enter password");
    if (password == "boss") {
        alert("hello boss!");
    } else if (password == null || password == "") {
        alert("canceled");
    } else {
        alert("wrong password");
    }
} else if (login == null || login == "") {
    alert("canceled");
} else {
    alert("I dont know you");
}