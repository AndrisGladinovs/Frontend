//************************ JSON ************** */

const user = {
    name: "John",
    age: 25,
    parent: {
        father: "Jack",
        mother: "Anna",
    },
    print: function() {
        console.log(this.name, this.age); // ne zapishet etu funkciju. JSON ignorituet vse vnutrennie funkcii.
    },
};

const strUser = JSON.stringify(user); // priobrazovivaet objekt v stroku
console.log(strUser);
// {"name":"John","age":25,"parent":{"father":"Jack","mother":"Anna"}}

const user2 = JSON.parse(strUser); // stroka v objekt
console.log(user2);
//{ name: 'John', age: 25, parent: { father: 'Jack', mother: 'Anna' } }

//console.log(JSON.stringify(user));
// {"name":"John","age":25}
//{"name":"John","age":25,"parent":{"father":"Jack","mother":"Anna"}}

//****************** */

class User {
    constructor(name) {
        this.name = name;
    }
    print = () => {
        console.log(this.name);
    };
}

const user1 = new User("Anna");
console.log(user1);
// User { print: [Function: print], name: 'Anna' } funkcija ne otobrazahetsja

console.log(JSON.stringify(user1));
// {"name":"Anna"}