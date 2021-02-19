const contacts = []; // array where we gonna push all new contacts

const userForm = document.forms.userInfo,
    inputName = userForm.name,
    inputLastName = userForm.lastname,
    inputPhone = userForm.phone,
    inputEmail = userForm.email,
    addBtn = document.querySelector(".btn-success"),
    ulList = document.querySelector("#contact-list"),
    contactView = document.querySelector(".flex-grow-1");

ulList.style.display = "none";

userForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if (inputName.value) {
        contacts.push({
            name: inputName.value,
            lastname: inputLastName.value,
            phone: inputPhone.value,
            email: inputEmail.value,
        });
        var item = contacts[contacts.length - 1]; // last element
        var str = "";
        for (var i in item) {
            str += item[i] + ",";
        }
        str = str.substring(0, str.length - 1) + "&"; // udaljaem zapjatuju i stavim &
        //var str = item.join(",") + "&";

        var localStorageContent = localStorage.getItem("CONTACTS");
        localStorage.setItem("CONTACTS", localStorageContent + str);
    }

    console.log(contacts);
    renderContacts(); // metod kak budut otobrazhatsja kontakti na HTML stranice v <ul></ul>
    showContacts(); // funkcija, kotoraja otobrazahet vse <ul></ul> elementi
    inputName.value = "";
    inputLastName.value = "";
    inputPhone.value = "";
    inputEmail.value = "";
});

function showContacts() {
    ulList.style.display = "block";
    //renderContacts();
}

function renderContacts() {
    ulList.innerHTML = "";
    console.log(contacts.length);
    for (let i = 0; i < contacts.length; i++) {
        let li = document.createElement("li");
        let h2 = document.createElement("h2");
        let h4 = document.createElement("h4");
        let removeBtn = document.createElement("button");
        let div = document.createElement("div");
        div.className = "flex-grow-1";
        li.className = "list-group-item d-flex w-100";
        h2.className = "m-0";
        h4.className = "m-0";
        removeBtn.className = "btn btn-danger align-self-center";
        removeBtn.innerText = "remove";
        //removeBtn.style.cssText = "margin-left: 30px";
        h2.innerHTML = contacts[i].name;
        h4.innerHTML = contacts[i].phone;
        div.append(h2);
        div.append(h4);
        li.append(div);
        li.append(removeBtn);
        ulList.append(li);

        removeBtn.onclick = function() {
            contacts.splice(i, 1);
            contactView.style.display = "none";
            renderContacts();
        };
    }
}