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

let currentPage = document.querySelector('a[href = "contacts"]'),
    currentRow;

renderContacts();

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
            renderContacts();
            break;
        case "addContact":
            renderAddContact();
            break;
    }
}

function renderContacts() {
    root.className = "contacts";
    root.innerHTML = `
        <ul class="list">
           ${contacts.map(mapToContactRow).join("")} 
        </ul>
        <div class="contact-view">No selected contact</div>
       `;
    root.querySelector(".list").onclick = contactClickHandler;
}

function contactClickHandler(event) {
    //console.log(event.target);
    let li = event.target;
    if (li.classList.contains("delete")) {
        li.classList.remove("item-active");
        contacts.splice(li.dataset.index, 1);
        renderContacts();
    } else {
        if (li.tagName !== "LI") {
            li = event.target.parentNode; // esli kliknuli na H2 ili H3, to togda perezapishi v roditeljskij element LI etot element
        }
        if (currentRow) {
            currentRow.classList.remove("item-active");
        }
        showContact(li.dataset.index); // kak risuem kontakt sprava
        currentRow = li;
        currentRow.classList.add("item-active");
    }
}

function showContact(index) {
    const contact = contacts[parseInt(index)]; // kakkoj imenno kontakt visvechivaetsja sprava
    const contactView = root.querySelector(".contact-view");
    contactView.innerHTML = `
<h2>${contact.name}</h2>
<div class="contact-view-row">
<img src="./img/technology.png" alt="phone" />
<h3>${contact.phone}</h3>
</div>
<div class="contact-view-row">
<img src="./img/multimedia.png" alt="email" />
<h3>${contact.email}</h3>
</div>
<div class="contact-view-row">
<img src="./img/buildings.png" alt="address" />
<h3>${contact.address}</h3>
</div>
<p id="viewDesc">${contact.desc}</p>
`;
}

function mapToContactRow(contact, index) {
    return `
        <li class = 'list-item' data-index = ${index}>
            <h2 class = 'title'>${contact.name}</h2>
            <h3 class = 'sub-title'>${contact.phone}</h3>
            <div class = 'delete'></div>
        </li>
       `;
}

function renderAddContact() {
    root.className = "add-contact";
    root.innerHTML = `
<form name= "addContactForm" action="#">
                <input id="inputName" class="form-control" type="text" name="name" placeholder="Type name" />
                <input id="inputPhone" class="form-control" type="text" name="phone" placeholder="Type phone" />
                <input id="inputEmail" class="form-control" type="text" name="email" placeholder="Type email" />
                <input id="inputAddress" class="form-control" type="text" name="address" placeholder="Type address" />
                <textarea id="inputDesc" class="form-control" type="text" name="description" placeholder="Type description"></textarea>
                <div class="buttons"><button class="add-btn">Add</button></div>
            </form>
`;

    const form = document.forms.addContactForm; // obrashaemsja k imeni formi NAME
    form.onsubmit = formSubmitHandler;
    console.log(form.elements); // vse imputi formi sobirajutsja v odin psevdomassiv. Iskljucheniem javljaetsja KNOPKA, esli ona estj v forme. Mi vivodim dannij psevdomassiv v console.log
}

function formSubmitHandler(event) {
    event.preventDefault(); // preventDefault(), sto estj u .onsubmit()

    const form = event.target; // moja forma ta, na kotoroj proizoshlo sobitie, to estj bili zapolnenni kontaktnie dannie i nazhata knopka ADD
    contacts.push({
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        address: form.address.value,
        desc: form.description.value,
    });
    clearForm(form);
}

function clearForm(form) {
    for (let i = 0; i < form.length; i++) {
        if (form.elements[i].localName !== "button") {
            //tozhe samoe sto tagName, no toljko pisetsja s malenjkimi bukvami
            form.elements[i].value = "";
        }
    }
}