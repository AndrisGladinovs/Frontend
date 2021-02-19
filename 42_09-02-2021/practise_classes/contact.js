// const contact1 = new Contact (Ivan, 123, ivan@gmail.com, Berlin, friend); We will create an array with parentSelector #root

// Nash element Contact mozhet sebja otobrazhatj ili v vide <li></li>, ili zhe v vide vsplivajushego bloka sprava pri nazhatii na <li></li> element

class Contact {
    constructor(
        name,
        phoneNumber,
        email,
        address,
        description,
        parentSelector = "#root"
    ) {
        this.name = name;
        this.phone = phoneNumber;
        this.email = email;
        this.address = address;
        this.description = description;
        this.parent = document.querySelector(parentSelector);
    }

    renderContactView() {
        // funkcija kotoraja risuet vsplivajushij blok sprava, esli kliknuli na <li></li>

        const contactView = this.parent.querySelector(".contact-view"); // where and how will be displayed
        contactView.innerHTML = `
<h2>${this.name}</h2>
          <div class="contact-view-row">
            <img src="../img/technology.png" alt="" />
            <h3>${this.phone}</h3>
          </div>
          <div class="contact-view-row">
            <img src="../img/multimedia.png" alt="" />
            <h3>${this.email}</h3>
          </div>
          <div class="contact-view-row">
            <img src="../img/buildings.png" alt="" />
            <h3>${this.address}</h3>
          </div>
          <p>${this.desc}</p>`;
    }

    renderLiView(index) {
        return `
        <li class = 'list-item' data-index = ${index}>
            <h2 class = 'title'>${this.name}</h2>
            <h3 class = 'sub-title'>${this.phone}</h3>
            <div class = 'delete'></div>
        </li>`;
    }
}

// vse moi kontakti objadinjajutsja v odin boljshoj klass ContactList. Eto massiv nashih konktaktov

class ContactList {
    constructor(parentSelector, contacts = []) {
        // v nachale budet pustoj massiv
        this.list = contacts; // spisok vseh kontaktov
        this.parent = parentSelector;
    }
    addContact(contact) {
        // peredannij kontakt
        // proverjaem estj li, pri dobavlenii novogo kontakta, takoj kontakt uzhe ili net
        const tmp = this.list.find(function(c) {
            // c === nash kontakt, kotorij mi vibrali
            return c.name === contact.name; // return true or false
        });
        if (!tmp) {
            //if false, than no contact found. Push new contact to our list
            this.list.push(contact);
            return true; // just to check if code works
        }
        return false;
    }

    renderContactsList() {
        const root = document.querySelector(this.parent);
        root.className = "contacts";
        root.innerHTML = "";
        root.innerHTML += '<div class = "contact-view">No selected contact</div>';
        const contactsListView = document.createElement("ul");
        contactsListView.className = "list";
        this.list.forEach(function(item, index) {
            contactsListView.innerHTML += item.renderLiView(index);
        });
        root.prepend(contactsListView); // dobavljaem <ul></ul> na HTML stranicu
        contactsListView.onclick = contactClickHandler;
    }
}