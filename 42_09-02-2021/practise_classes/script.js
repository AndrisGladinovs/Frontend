const contactsList = new ContactsList("#root");

contactsList.addContact(
    new Contact(
        "John Doe",
        "123456789",
        "john@mail.com",
        "Tel Aviv",
        "Best friend",
        "#root"
    )
);

contactsList.addContact(
    new Contact(
        "Jack Sparrow",
        "1333333",
        "jack@mail.com",
        "Carribian Sea",
        "Pirate",
        "#root"
    )
);

contactsList.addContact(
    new Contact(
        "Tony Stark",
        "123456789",
        "tony@mail.com",
        "New York",
        "IronMen",
        "#root"
    )
);

const root = document.querySelector("#root"),
    nav = document.querySelector(".nav");

let currentPage = document.querySelector('a[href = "contacts"]'),
    currentContactRow;

contactsList.renderContactList();

nav.onclick = function(event) {
    event.preventDefault();
    if (event.target.tagName === "A") {
        if (
            event.target.getAttribute("href") !== currentPage.getAttribute("href")
        ) {
            currentPage.classList.remove("active");
            currentPage = event.target;
            currentPage.classList.add("active");
            navigation(currentPage.getAttribute("href"));
        }
    }
};

function navigation(path) {
    switch (path) {
        case "contacts":
            contactList.renderContacts();
            break;
        case "addContact":
            renderAddContact();
            break;
    }
}

function contactClickHandler(e) {
    //console.log(e.target);
    let li = e.target;
    if (li.classList.contains("delete")) {
        li.classList.remove("item-active");
        contactsList.list.splice(li.dataset.index, 1);
        contactsList.renderContactsList();
    } else {
        if (li.tagName !== "LI") {
            li = e.target.parentNode;
        }
        if (currentContactRow) {
            currentContactRow.classList.remove("item-active");
        }
        schowContact(li.dataset.index);

        currentContactRow = li;
        currentContactRow.classList.add("item-active");
    }
}

function schowContact(index) {
    const contact = contactsList.list[index];
    contact.renderContactView();
}

function renderAddContact() {
    root.className = "add-contact";
    root.innerHTML = `
    <form name = "addContactForm" action="#">
       <input
         id="inputName"
         class="form-control"
         type="text"
         name="name"
         placeholder="Type name"
       />
       <input
         id="inputPhone"
         class="form-control"
         type="text"
         name="phone"
         placeholder="Type phone"
       />
       <input
         id="inputEmail"
         class="form-control"
         type="text"
         name="email"
         placeholder="Type email"
       />
       <input
         id="inputAddress"
         class="form-control"
         type="text"
         name="address"
         placeholder="Type address"
       />
<textarea
       id="inputDesc"
         class="form-control"
         type="text"
         name="description"
         placeholder="Type description"
       ></textarea>
       <div class="buttons"><button class="add-btn">Add</button></div>
     </form>
    `;

    const form = document.forms.addContactForm;
    form.onsubmit = formSubmitHandler;
    //console.log(form.elements.phone);
}

function formSubmitHandler(e) {
    e.preventDefault();
    const form = e.target;
    contactsList.addContact(
        new Contact(
            form.name.value,
            form.phone.value,
            form.email.value,
            form.address.value,
            form.description.value
        )
    );
    clearForm(form);
}

function clearForm(form) {
    for (let i = 0; i < form.elements.length; i++) {
        if (form.elements[i].localName !== "button") {
            form.elements[i].value = "";
        }
    }
}