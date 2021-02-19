//************************* THIS ************ */
// ************************ kontekst vizova **********
/*
console.log(this); // vivedit globaljnuju window so vsemi sobitijami

function test() {
    console.log(this);
}

test(); // takzhe viveditsja global window
*/

function clickHandler() {
    console.log(this);
}

clickHandler();

const btn = document.querySelector(".btn");
btn.onclick = clickHandler; // otobrazit <btn></btn>

// sostrelochnoj funkciej
// strel.funkcii ne privjazivajutsja k kontekstu. U nih vsegda kontekst window
// u nih kontekst tam gde oni vizivajutsja. Esli vnutri, to local, esli snaruzhi, to global. Zamikanija u nih netu
// k strelochnoj funkcii ne privjazivaetsja bind, call, apple :(

let clickArrowHandler = () => console.log(this); // global result
clickArrowHandler();
btn.onclick = clickArrowHandler; // otobrazit <btn></btn>

let p1 = {
    name: "John",
    displayName: function() {
        console.log(this.name);
    },
};

let p1 = {
    name: "John",
    displayName: () => {
        console.log(this.name); // poterja konteksta
    },
};

let p2 = {
    name: "Jack",
};

p2.display = p1.displayName; // undefined
p2.display(); // Jack. cherez tochku mozhem dobavitj sto ugodno, dazhe funkciju()

// Object this

let person = {
    name: "John",
    age: 23,
    display: function() {
        console.log(this);
        console.log(this.name, this.age);
    },
};

person.display(); // FUNKCIJA!!! Vizivaetsja v kontekste moego objekta
// { name: 'John', age: 23, display: [Function: display] }
// John 23

let print = person.display; // sohranjaem funkciju v funkciju
print(); // poterja konteksta. On ne ssilaetsja na objekt person, ne v ramkah objekta vipolnjaetsja. Kontekstom vizova stanovitsja snova GLOBAL WINDOW

let print = function() {
    console.log(this); // global window
    console.log(this.name, this.age); // undefined. Poterja konteksta
};

print(); // poterja konteksta

// SOLUTION
print.call(person); // vsjo srabotaet i raspechataet znachenie person. Vizov person
print.apply(person); // tozhe srabotaet
print.apply([person, car]); // esli 2 i boljshe, to v vide massiva

let printPerson = print.bind(person); // svjazivaet kontekst cherez objavlenie peremennoj
printPerson();

//***************************** FUNKCIJA KONSTRUKTOR ************ */
// so strelochnoj funkciej vsjo rabotaet

function Timer(seconds) {
    this.counter = seconds;
    /*
  this.tick = () => {
        this.counter--;
        console.log(this.counter);
    }; srabotaet vsjo
*/
    this.tick = function() {
        this.counter--;
        console.log(this.counter);
    };
    this.start = function() {
        // nuzhna peremenaja, stobi vsjo poluchilosj i proizoshlo zamikanie
        // strelochnaja funkcija toze srabativaet
        /*setInterval(() => {
            this.tick();
        }, 1000);
*/
        let that = this;
        setInterval(function() {
            console.log(that);
            that.tick();
        }, 1000);
    };
}

const timer = new Timer(20); // {counter: 20, tick: function(){counter--;}}
console.log(timer.counter); // vidast poka toljko 20
timer.tick(); // 19
timer.tick(); // 18
timer.tick(); // 17
console.log(timer.counter); // 17

setInterval(timer.tick, 1000); // tak kak vizivaem cherz globaljnuju funkciju, to ne srabotaet, poterja konteksta. Vidast NaN

setInterval(timer.tick.bind(timer), 1000); // vsjo srabotaet

timer.start(); // proishodit poterja konteksta, no esli sdelaem peremenuju THAT, to vsjo poluchitsja

timer.start(); // srabotaet srazu, esli ispoljzuem strelochnuju funkciju