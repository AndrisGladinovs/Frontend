//***************** Task 1 ***************
// function recursionOutput(10) --> 12345678910

function recursionOutput(num) {
    if (num == "1") {
        return num;
    } else {
        return recursionOutput(num - 1) + `${num}`;
    }
}

console.log(recursionOutput(10));

//Option 1

function checkPalindrom(string) {
    string = string.toLowerCase().replace(/ /g, "");
    return string === string.split("").reverse().join("");
}
console.log(checkPalindrom("nagan"));

// Option 2
function checkPalindrom(string) {
    string = string.toLowerCase().replace(/ /g, "");
    for (let i = 0; i < string.length / 2; i++) {
        if (string.charAt(i) != string.charAt(string.length - 1 - i)) return false;
    }
    return true;
}

console.log(checkPalindrom("nagan"));

//***************** Task 2 ***************
// return FULLNAME which contantains name + surname

const users = [
    { firstName: "Vasya", lastName: "Ivanov", id: 1 },
    { firstName: "Anna", lastName: "Gerber", id: 1 },
    { firstName: "Konstantin", lastName: "Chernov", id: 1 },
    { firstName: "Sergej", lastName: "Samoilov", id: 1 },
];

function putFullName(users) {
    return users.map((user) => ({
        fullName: `${user.firstName} ${user.lastName}`,
        id: user.id,
    }));
}

console.log(putFullName(users));