const user = {};
user.name = "Ivan";
user.age = 25;

// Descriptors of name 'Ivan'
// value: Ivan
// writable: true   perepisivatj (mozhem menjatj VALUE)
// configarable: true   izmenjatj znachenija writable i emurable (kak sozdali tak i estj esli FALSE)
// enumerable: true   perebiratj

console.dir(user);

const user1 = {};
user1.age = 32;
Object.defineProperty(user1, "name", { value: "Ivan" }); // descriptori ne ukazali i oni stanut vse FALSE
user1.name = "John"; // neljzja izmenitj imja iz-za descriptors FALSE

Object.defineProperty(user, "password", {
    value: "1234",
    configurable: true,
});

Object.defineProperty(user, "password", {
    writable: true,
});

user.password = 24567;

// posmotretj kakie descriptori On i OFF
descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

Object.defineProperties(user1, {
    age: {
        value: 32,
        writable: true,
    },
    address: {
        value: "Berlin",
        writable: true,
        enumerable: true,
    },
});

// zapretitj rashirenie moego objekta

Object.preventExtensions(user);
user.color = "green";
console.dir(user); // ne dobavitsja, potomu sto mi dobavili LOCK na object

console.log(Object.isExtensible(user)); // mozhno li rashiritj objekt ili net??? V nashem sluchae FALSE

// poluchitj PSEVDOMASSIV vseh opisanij Objekta
console.log(Object.getOwnPropertyDescriptors(user));

// FULL LOCK- opechatan polnostju na dobavlenie, udalenie i izmenenie svojstv v objekte. Zapreshaet menjatj konfiguraciju -> configurable stanovitsja FALSE

Object.seal(user);
Object.isSealed(user);

// To freeze
Object.freeze(user); // zapreshaet dobavljatj, udaljatj i izmenjatj svojstva. Configurable: false, writable: false;
Object.isFrozen(user);