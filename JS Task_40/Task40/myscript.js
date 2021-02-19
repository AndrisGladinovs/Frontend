const contacts = [{
        name: "John Doe",
        phone: "123456789",
        email: "john@mail.com",
        address: "Tel Aviv",
        desc: "Best friend",
    },
    {
        name: "Jack Sparrow",
        phone: "0987654321",
        email: "jack@mail.com",
        address: "Carribian Sea",
        desc: "Pirate",
    },
    {
        name: "Tony Stark",
        phone: "4566778",
        email: "tony@stark.com",
        address: "New York",
        desc: "IronMen",
    },
];

const root = document.querySelector("#root"),
    nav = document.querySelector(".nav");

let currentPage = document.querySelector('a[href = "contacts"]'), // otobrazhenie po tegu i atributu
    currentContactRow; //na kakom rjade nahoditsja nash kontakt

renderContacts();

nav.onclick = function(e) {
    e.preventDefault();
    if (e.target.tagName === "A") {
        if (e.target.getAttribute("href") !== currentPage.getAttribute("href")) {
            currentPage.classList.remove = "item-active";
            currentPage = e.target;
            currentPage.classList.add = "item-active";
            navigation(currentPage.getAttribute("href"));
        }
    }
};

function navigation(href) {
    switch (href) {
        case "contacts":
            renderContacts();
            break;
        case "addContact":
            renderAddContact();
            break;
    }
}

function renderContacts() {
    root.className = "contacts";
    // ${contacts.map(item, index) => item.id = index}
    root.innerHTML = `
<ul class="list">
${contacts.map(mapToContactRow).join("")}
</ul>
<div class="contact-view">No selected contact</div>
`;
    root.querySelector(".list").onclick = contactClickHandler;
}

function mapToContactRow(contact, index) {
    // prorisovivaem kak vigljadet short contact data
    return `
<li class = 'list-item' data-index = ${index}>
<h2 class = "title">${contact.name}</h2>
<h3 class = "sub-title">${contact.phone}</h3>
<img class = "delete" src = "./img/trash.png" alt="delete">
</li>
`;
}

function contactClickHandler(e) {
    let li = e.target;
    if (li.classList.contains("delete")) {
        li.classList.remove("item-active");
        contacts.splice(li.dataset.index, 1);
        renderContacts();
    } else {
        if (li.tagName !== "LI") {
            li = e.target.parentNode;
        }
        if (currentContactRow) {
            currentContactRow.classList.remove("item-active");
        }
        showContact(li.dataset.index);

        currentContactRow = li;
        currentContactRow.classList.add("item-active");
    }
}

function showContact(index) {
    const contact = contacts[parseInt(index)];
    const contactView = root.querySelector(".contact-view");
    contactView.innerHTML = `
<h2 id="viewName">${contact.name}</h2>
                <div class="contact-view-row">
                    <img src="./img/technology.png" alt="" />
                    <h3 id="viewPhone">${contact.phone}</h3>
                </div>
                <div class="contact-view-row">
                    <img src="./img/multimedia.png" alt="" />
                    <h3 id="viewEmail">${contact.email}</h3>
                </div>
                <div class="contact-view-row">
                    <img src="./img/buildings.png" alt="" />
                    <h3 id="viewAddress">${contact.address}</h3>
                </div>
                <p id="viewDesc">
                    ${contact.desc}
                </p>
`;
}

function renderAddContact() {
    root.className = "add-contact";
    root.innerHTML = `
<form name="addContactForm" action="#">
                <input id="inputName" class="form-control" type="text" name="name" placeholder="Type name" />
                <input id="inputPhone" class="form-control" type="text" name="phone" placeholder="Type phone" />
                <input id="inputEmail" class="form-control" type="text" name="email" placeholder="Type email" />
                <input id="inputAddress" class="form-control" type="text" name="address" placeholder="Type address" />
                <textarea id="inputDesc" class="form-control" type="text" name="description" placeholder="Type description"></textarea>
                <div class="buttons"><button class="add-btn">Add</button></div>
            </form>
`;

    const form = document.forms.addContactForm;
    form.onsubmit = formSubmitHandler;
    // console.log(form.elements); vidast psevdomassiv so vsemi znachenijami Formi
    // console.log(form.elements.email) // mozhem obrashatsja po imeni k elementu
    // console.log(form.elements[4]) // mozhem obrashatsja po indeksu k elementu
}

function formSubmitHandler(e) {
    e.preventDefault();
    const form = e.target;
    contacts.push({
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        address: form.address.value,
        des: form.description.value,
    });
    clearForm(form);
    //e.target.reset()
}

function clearForm(form) {
    for (let i = 0; i < form.elements.length; i++) {
        if (form.elements[i].localName !== "button") {
            form.elements[i].value = "";
        }
    }
}