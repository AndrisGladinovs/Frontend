// Task 2
// Palindrom

function checkPalindrom(string) {
    // string = string.toLowerCase().replaceAll(" ", ""); Mozhno i tak
    string = string.toLowerCase().replace(/ /g, ""); // zamenjaem probel globally na strochku bez probelov
    for (let i = 0; i < string.length / 2; i++) {
        if (string.charAt(i) != string.charAt(string.length - 1 - i)) return false;
        // mozhno takzhe SRAZU sdelatj cherez indeks bukvi ne perevodja stroku v masiv
    }
    return true;
}
console.log(checkPalindrom("nagan"));

// Option 2

function checkPalindrom(string) {
    string = string.toLowerCase().replace(/ /g, "");
    return string === string.split("").reverse().join("");
}
console.log(checkPalindrom("nagan"));

// Option 3 - recursion

function isPalindrom(string, checker = false) {
    if (!checker) {
        string = string.toLowerCase().replace(/ /g, "");
        console.log(string); // арозаупаланалапуазора
    }
    if (string.length < 2) {
        return true;
        // obrizaem po bukve s nachala i konca. Esli dohodim do momenta, kogda ostalasj 1 bukva, to znachit palindrom. Vse ostaljnie bukvi bili odinakovie
    }
    if (string.charAt(0) === string.charAt(string.length - 1)) {
        return isPalindrom(string.slice(1, string.length - 1), true);
    }
    return false;
}
console.log(isPalindrom("а роза упала на лапу Азора"));

//Option 4 - strelochnaja funkcija

const palindrom = (s = "", left = 0, right = s.length - 1) =>
    right - left < 2 ?
    true :
    s[left] === s[right] && palindrom(s, left + 1, right - 1);

console.log(palindrom("арозаупаланалапуазора"));

//****************** Task 3 **************** */
// sdleatj fullName

const users = [
    { firstName: "Vasya", lastName: "Ivanov", id: 1 },
    { firstName: "Anna", lastName: "Petrova", id: 2 },
    { firstName: "Masha", lastName: "Mishina", id: 3 },
];

function changeUserArray(users) {
    let changedUsers = [];
    for (user of users) {
        const { firstName, lastName, id } = user; // razbiraem, distruktarizacija na elementi i prisvaivaem eti znachenija k USER
        changedUsers.push({ fullName: `${firstName} ${lastName}`, id });
    }
    return changedUsers;
}

const newUsers = changeUserArray(users);
console.log(newUsers);

// Option 2 with method MAP

const users = [
    { firstName: "Vasya", lastName: "Ivanov", id: 1 },
    { firstName: "Anna", lastName: "Petrova", id: 2 },
    { firstName: "Masha", lastName: "Mishina", id: 3 },
];

function changeUserArray(users) {
    return users.map((user) => ({
        fullName: `${user.firstName} ${user.lastName}`,
        id: user.id,
    }));
}

const newUsers = changeUserArray(users);
console.log(newUsers);

// Option 3
const person = { firstName: "Vasya", lastName: "Ivanov", id: 1 }; // esli boljshe person, to nuzhno cherez cikl bratj kljuchi
const newPerson = {
    fullName: `${user.firstName} ${user.lastName}`,
    id: person.id,
};

//************************** TASK 4 **************** */
// find average age

const users = [
    { name: "Vasya", age: 25 },
    { name: "Anna", age: 24 },
    { name: "Masha", age: 18 },
];

function getAverageUsersAge(users) {
    let ageSum = 0;
    for (user of users) {
        ageSum += user.age;
    }
    return ageSum / users.length;
}
console.log(getAverageUsersAge(users));

// Option 2

const users = [
    { name: "Vasya", age: 25 },
    { name: "Anna", age: 24 },
    { name: "Masha", age: 18 },
];

function getAverageUsersAge(users) {
    return users.reduce((sum, user) => sum + user.age, 0) / users.length; // sum (kuda?); user (otkuda?), sum = 0 (pervonachaljno)
    // .reduce rabotaet s massivami. Nuzhno ukazatj chemu ravna sum pervonachaljno
}
console.log(getAverageUsersAge(users));

//************************* TASK Calculator ********************** */

const calculator = {
    methods: {
        "+": (a, b) => a + b,
    },
    calculate: function(str) {
        // 1+2
        let parameters = str.split(" "),
            a = +parameters[0],
            operation = parameters[1],
            b = +parameters[2];

        if (!this.methods[operation] || isNaN(a) || isNaN(b)) return NaN;

        return this.methods[operation](a, b);
    },

    addMethods: function(name, func) {
        this.methods[name] = func;
    },
};

calculator.addMethods("+", (a, b) => a + b);
console.log(calculator.calculate("1 + 2"));
calculator.addMethods("*", (a, b) => a * b);
console.log(calculator.calculate("2 * 8"));

calculator.addMethods("u", (a, b) => String(a).toUpperCase() + `${b}`);
console.log(calculator.calculate("hello u"));