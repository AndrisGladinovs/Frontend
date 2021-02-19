// stobi input sohranjalsja dazhe posle perezagruzki browser
// sohranjaem v massiv

let todoArr = []; // mesto kuda sohranjaem vse input

const inputText = document.querySelector("#inputText"),
    addBtn = document.querySelector("#addBtn");

function renderAll(selector, array) {
    // 1. selector - eto <ul></ul>
    // 2. array -spisok elementov

    const elem = document.querySelector(selector);
    if (elem) {
        // uzhe sto-to estj vnutri, poluchili
        elem.innerHTML = "";
        array.forEach(function(item) {
            elem.append(item);
        });
    }
}

function mapStringToListElement(str, index) {
    const li = document.createElement("li"),
        checkbox = document.createElement("input"),
        title = document.createElement("h2"),
        button = document.createElement("button");

    li.className = "list-group-item d-flex align-items-center";
    // li.classList.add('list-group-item', 'd-flex', 'align-items-center')
    checkbox.type = "checkbox";
    checkbox.className = "col-1";
    title.className = "col-9";
    title.innerText = str;
    button.className = "col-2 btn btn-danger";
    button.innerText = "Remove";

    button.onclick = function() {
        todoArr.splice(index, 1); // po indeksu udali toljko 1 element
    };
    checkbox.onchange = function() {
        title.style.textDecoration = checkbox.checked ? "line-through" : "none";
    };
    li.append(checkbox);
    li.append(title);
    li.append(button);
    return li;
}

addBtn.onclick = function() {
    const input = inputText.value;
    if (input) {
        todoArr.push(input);
        renderAll("#todoList", todoArr.map(mapStringToListElement));
        inputText.value = "";
    }
};