const input = document.querySelector("#input"),
    btnAdd = document.querySelector("#btnAdd");
let output = document.querySelector("#output");

function createOutputRow() {
    let li = document.createElement("li");
    ul.insertAdjacentHTML(
        "beforeend",
        `<li> <input type="checkbox"> ${input.value} <button>Remove</button></li>`
    );
    return li.outerHTML;
}

btnAdd.onclick = function() {
    output.insertAdjacentHTML("beforeend", createOutputRow);
};

/*
function createLi() {
    let li = document.createElement("li");
    li.innerHTML = `<input type='checkbox'> ${input.value} <button>Remove</button>`;
    ul.append(li);
return ul.outerHTML;
}

let isClicked = true;

btnAdd.onclick = function() {
    if (isClicked) {
        output.append = createLi;
        output.style.display = "inline";
        return false;
    } else {
        output.style.display = "none";
    }
};
*/