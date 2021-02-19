const list = document.querySelector("#contact-list"),
    form = document.querySelector("#add-contact-form"),
    listLoader = document.querySelector("#list-loader");

let currentContacts = [];

list.onclick = onRemoveContactHandler;
form.onsubmit = onAddContactHandler;
showListLoader(false); // pri zagruzke loader ne budet na stranice

loadList();

//renderList();

function loadList() {
    //zhdu poka zagruzitsja list
    list.style.display = "none";
    showListLoader(true);
    Store.getAll().then((result) => {
        // result kotorij pridjot
        showListLoader(false);
        currentContacts = result;
        list.style.display = "block";
        renderList();
    });
}

function renderList() {
    list.innerHTML = currentContacts.map(mapToRow).join("");
}

function onRemoveContactHandler(e) {
    if (e.target.tagName === "BUTTON") {
        const index = parseInt(e.target.dataset.index);
        Store.remove(index);
        renderList();
    }
}

function onAddContactHandler(e) {
    e.preventDefault();
    const form = e.target;
    const contact = new Contact(
        form.name.value,
        form.lastname.value,
        form.phone.value,
        form.email.value
    );
    Store.save(contact);
    renderList();
    form.reset();
}

function mapToRow(contact, index) {
    return `
    <li class="list-group-item d-flex w-100">
        <div class="flex-grow-1">
            <h2 class="m-0">${contact.name} ${contact.lastName}</h2>
            <h4 class="m-0">${contact.phone}</h4>
            <p class="m-0">${contact.email}</p>
        </div>
        <button class="btn btn-danger align-self-center" data-index="${index}">
            remove
        </button>
    </li>   
    `;
}

function showListLoader(isShow) {
    // if true, pokazivaem loader
    listLoader.style.display = isShow ? "block" : "none";
}

//arr = [1,2,3,4,5];
//arrNew = arr.map((item,index) => {
//  if(index %2 !==0)  item +2}));
//arrNew -> [3,2,5,4,7]