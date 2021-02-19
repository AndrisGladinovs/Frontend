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

/* const contacts =[
    {name:'John Doe',phone:'123456789',email:'john@mail.com',address:'Tel Aviv',desc:'Best friend'},
    {name:'Jack Sparrow',phone:'0987654321',email:'jack@mail.com',address:'Carribian Sea',desc:'Pirate'},
    {name:'Tony Stark',phone:'4566778',email:'tony@stark.com',address:'New York',desc:'IronMen'}
]; */

const root = document.querySelector("#root"),
    nav = document.querySelector(".nav"),
    searchInput = nav.querySelector(".search input"),
    searchBtn = nav.querySelector("#search-btn");

let currentPage = document.querySelector('a[href = "contacts"]'),


    contactsList.renderContactsList();

nav.onclick = function(e) {
    e.preventDefault();
    if (e.target.tagName === "A") {
        if (e.target.getAttribute("href") !== currentPage.getAttribute("href")) {
            currentPage.classList.remove("active");
            currentPage = e.target;
            currentPage.classList.add("active");
            navigation(currentPage.getAttribute("href"));
        }
    }
};

function navigation(path) {
    switch (path) {
        case "contacts":
            contactsList.renderContactsList();

            break;
        case "addContact":
            renderAddContact();
            break;
    }
}
/*
// filtruem po poisku cherz vvod slova OPTION 1
searchInput.oninput = function(e) {
    const input = e.target.value;
    const contactList = document.querySelectorAll("#root .list-item");
    //contactList.forEach((item) => console.log(item.textContent)); // vivedit vse imena v concole.log
    contactList.forEach((item) => {
        // eto <li></li>
        if (!item.textContent.toLowerCase().includes(input.toLowerCase())) {
            item.style.display = "none";
            console.log(item.textContent.toLowerCase());
        }
    });
};
*/

// Option 2 filter search
searchInput.oninput = function() {
    const filterContact = contactsList.list.filter((item) => {
        // sozdalsja novij otfiltrovannij massiv
        item.name.toLowerCase().startsWith(searchInput.value.toLowerCase());
        const newContacts = new ContactList("#root", filter);
        newContacts.renderContactsList();
    });
};

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