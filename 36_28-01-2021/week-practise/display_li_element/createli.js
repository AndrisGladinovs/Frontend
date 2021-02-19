const inputText = document.querySelector(".inputText"),
    addBtn = document.querySelector(".addBtn"),
    ulList = document.querySelector(".list");

addBtn.onclick = function() {
    const li = document.createElement("li");
    li.innerHTML = inputText.value;

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    li.prepend(checkBox);

    const removeBtn = document.createElement("button");
    removeBtn.innerText = "remove";
    removeBtn.style.cssText =
        "width: 60px; height: 30px; margin-left: 10px; border: 2px solid black; background-color: lightgrey; border-radius: 5px";
    li.append(removeBtn);

    removeBtn.onclick = function() {
        li.remove();
    };

    checkBox.onchange = function() {
        li.style.textDecoration = checkBox.checked ? "line-through" : "none";
    };

    ulList.append(li);
    inputText.value = "";
};

/*
addBtn.onclick = function() {
    const li = document.createElement("li");
    li.innerHTML = inputText.value;

    const removeBtn = document.createElement("button");
    removeBtn.innerText = "remove";
    li.append(removeBtn);

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    li.prepend(checkBox);

    removeBtn.onclick = function() {
        li.remove();
    };

    checkBox.onchange = function() {
        li.style.textDecoration = checkBox.checked ? "line-through" : "none";
    };
    ulList.append(li);
    inputText.value = "";
};
*/