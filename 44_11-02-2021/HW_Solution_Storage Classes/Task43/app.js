// Razbiraemsja s elementami HTML razmetki

const list = document.querySelector("#contact-list"),
    form = document.querySelector("#add-contact-form");

list.onclick = onRemoveContactHandler;
form.onsubmit = onAddContactHandler;

renderList();

function renderList() {
    list.innerHTML = Store.getAll().map(mapToRow).join("");
}

function onRemoveContactHandler(event) {
    if (event.target.tagName === "BUTTON") {
        const index = parseInt(event.target.dataset.index); // data-index
        Store.remove(index);
        renderList();
    }
}

function onAddContactHandler(event) {
    event.preventDefault();
    const form = event.target;
    const contact = new Contact(
        form.name.value,
        form.lastname.value,
        form.phone.value,
        form.email.value
    );
    Store.save(contact);
    renderList();
    form.reset(); // sdelaet snova vse strochki vvoda pustimi
}

function mapToRow(contact, index) {
    // funkcija priobrazovivaet novij kontakt v HTML razmetku
    //contact, eto kontakt kotorij k nam prishel

    return `
<li class="list-group-item d-flex w-100">
<div class="flex-grow-1">
<h2 class="m-0">${contact.name} ${contact.lastName}</h2>
<h4 class="m-0">${contact.phone}</h4>
<p class="m-0">${contact.email}</p>
</div>
<button class="btn btn-danger align-self-center" data-index="${index}">
remove</button>
</li>
`;
}