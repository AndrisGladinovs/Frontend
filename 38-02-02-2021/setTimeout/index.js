/*
let count = 100;

setTimeout(display, 1000); // zaderzka 1000 milisekund ili 1 sekunda

function display() {
    console.log("hello!");
}

console.log("end of code!");
// snachala napichataetsja "end of code" i toljko potom "hello"
*/

//********************************** */
/*
setTimeout(display, 2000, "hello"); // zaderzka 2000 milisekund ili 2 sekundi

function display(text) {
    console.log(text);
}

display("hello js");

console.log("end of code!");
// snachala napichataetsja "end of code" i toljko potom "hello"
*/

//********************************** SET INTERVAL ********/
/*
let count = 100;

/*setInterval(function() {
    console.log(count--);
}, 1000); // raz v sekundu
*/

// otmena dejstvija STOP
/*
let i = setInterval(function() {
    console.log(count--);
}, 1000); // raz v sekundu

setTimeout(function() {
    console.log("Time out");
    clearInterval(i);
}, 3000); // stobi proizoshlo cherez 3 sek
*/

// Task with BOX

const btn = document.querySelector(".btn");
btn.addEventListener("click", myAnimation);

function myAnimation() {
    const box = document.querySelector(".box");
    let position = 0; // top and left have 0

    const id = setInterval(moveBox, 20);

    function moveBox() {
        if (position === 300) {
            clearInterval(id);
            position = 0;
        }
        position++;
        box.style.top = position + "px";
        box.style.left = position + "px";
    }
}
