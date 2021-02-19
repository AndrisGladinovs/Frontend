const box = document.getElementById("box"), // ukazatj id HTML, kotoroe nas interesuet
    btns = document.getElementsByTagName("button"), // HTML
    circles = document.getElementsByClassName("circle"), // HTML
    squares = document.querySelectorAll(".square"), // query selector - po kakomu selektoru ispoljzuem v CSS
    oneSquare = document.querySelector(".square"), // CSS
    title = document.querySelector("h1");

console.dir(box);

console.log(circles);

/* console.log(btns[0]);

console.log(circles);

console.log(squares);

squares.forEach((item) => console.log(item));

console.log(oneSquare);
*/

// Vsjo sto menjaem cherez CSS - eto inline stili. MOST IMPORTANT STYLES

box.style.backgroundColor = "blue"; //esli zahodim cherez style v svojstvo v fajle JS nuzhno vsjo pisatj v stile CAMEL
box.style.width = "400px"; // objazateljno v vide stroki

btns[0].style.borderRadius = "50%"; // u HTML COLLECTION netu stilej. Nelzja ko vsem srazu. Toljko esli obratitsja k kakomu-to konkretnomu elementu

//********** FROM pseudo Array (HTML Collection)  to normal Array ******/

const elements = Array.from(circles);
console.log(elements); // stanet massivom
console.log(circles);

box.style.cssText = "background-color: orange; width: 100px"; // esli hotim pisatj takzhe kak v CSS

circles[0].style = `background-color: red`;

for (let index = 0; index < squares.length; index++) {
    squares[index].style.backgroundColor = "red";
}

//title.className = "title active";

title.classList.toggle("active"); // perekljuchatelj esli netu to dobavljaet
title.classList.add("title");
title.classList.toggle("active"); // esli estj, to otkljuchaet
title.classList.remove("title");

const div = document.createElement("div"); // sozdajom i eshe nuzhno dobavitj
div.classList.add("black"); // prikreili k div class BLACK iz CSS
//document.body.append(div); // dobavit v samij konec body etot novij element

//wrapper.prepend(div); // dobavit pered

squares[1].before(div);
squares[0].after(div);

circles[0].remove();
// squares[0].replaceWith(circles[0]);

//**************************** INNER HTML *********/
// razmeshatj tekst vnutri elementa

//div.innerHTML = "<h1>Hello world!</h1>";
div.textContent = "Hello world!"; // otobrazhaet vsjo takzhe kak mi pishem. Dazhe kavichki budet pisatj

div.insertAdjacentHTML("beforeend", "<h2>Hello world!</h2>");