//******************* Zamikanie ***********/

function test() {
    let i = 10;
    return function() {
        console.log(i); // zahvativaet znachenie i
    };
}

test(); // ne srabotaet
console.log(i); // budet osibka. i ne nahodit

// SOLUTION:
let func = test();
func(); // poluchaem 10

//********************************** */

for (let i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
} // vsjo ok, vivedit vse cifri

let i; // budet hranitj poslednee znachenie 10
for (i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
} // vivedit 10 raz cifru 10

for (var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
} // vivedit 10 raz cifru 10. Sohranjaetsja poslednee znachenie VAR i

// SOLUTION:
for (var i = 0; i < 10; i++) {
    function f(j) {
        setTimeout(function() {
            console.log(j);
        }, 1000); // zaderzhka 1 sekunda csego spiska
    }
    f(i);
} // vsjo vivedit praviljno