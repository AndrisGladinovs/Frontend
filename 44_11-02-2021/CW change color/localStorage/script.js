"use strict";

const checkbox = document.querySelector("#checkbox"),
    form = document.querySelector("form"),
    changeBtn = document.querySelector("#color");

/*
if(localStorage.getItem('isChecked')){
    checkbox.checked = true;
}

if(localStorage.getItem('bg')==='changed'){
    form.parentElement.style.backgroundColor = '#87b5ff';
}

checkbox.onchange = ()=>{
    if(checkbox.checked){
    localStorage.setItem('isChecked', true);
    }else{
        localStorage.removeItem('isChecked');
    }
}

changeBtn.onclick = ()=>{
    const parent = form.parentElement;
    if(localStorage.getItem('bg')==='changed'){
        localStorage.removeItem('bg');
        parent.style.backgroundColor = '#fff'
    }else{
        localStorage.setItem('bg', 'changed');
        parent.style.backgroundColor = '#87b5ff';
    }
}
*/

/*

if (localStorage.getItem("isChecked")) {
    checkbox.checked = true;
}

if (localStorage.getItem("bg") === "changed") {
    form.parentElement.style.backgroundColor = "blue";
}

checkbox.onchange = function() {
    if (checkbox.checked) {
        localStorage.setItem("isChecked", "true");
    } else {
        localStorage.getItem("isChecked");
        localStorage.removeItem("isChecked");
    }
};

changeBtn.onclick = () => {
    const parentWrapper = form.parentElement;
    if (localStorage.getItem("bg") === "changed") {
        localStorage.removeItem("bg");
        parentWrapper.style.backgroundColor = "#fff";
    } else {
        localStorage.setItem("bg", "changed");
        parentWrapper.style.backgroundColor = "blue";
    }
};

*/

if (localStorage.getItem("isChecked")) {
    checkbox.checked = true;
}

if (localStorage.getItem("bg") === "isChanged") {
    form.parentElement.style.backgroundColor = "blue";
}

checkbox.onchange = () => {
    if (checkbox.checked) {
        localStorage.setItem("isChecked", "true");
    } else {
        localStorage.getItem("isChecked");
        localStorage.removeItem("isChecked");
        checkbox.checked = false;
    }
};

changeBtn.onclick = function() {
    const formWrapper = form.parentElement;
    if (localStorage.getItem("bg") === "isChanged") {
        localStorage.removeItem("bg");
        formWrapper.style.backgroundColor = "#fff";
    } else {
        localStorage.setItem("bg", "isChanged");
        formWrapper.style.cssText = "background-color: blue";
    }
};