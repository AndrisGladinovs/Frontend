const contacts = [
    {name:'John Doe',phone:'123456789',email:'john@mail.com',address:'Tel Aviv',desc:'Best friend'},
    {name:'Jack Sparrow',phone:'0987654321',email:'jack@mail.com',address:'Carribian Sea',desc:'Pirate'},
    {name:'Tony Stark',phone:'4566778',email:'tony@stark.com',address:'New York',desc:'IronMen'}
];

const contactsLink = document.querySelector('#contactsLink');
const addContactLink = document.querySelector('#addContactLink');

const contactsDiv = document.querySelector('.contacts');
const contactList = document.querySelector('.contacts .list');
const contactView = document.querySelector('.contact-view');
const viewName = document.querySelector('#viewName');
const viewPhone = document.querySelector('#viewPhone');
const viewAddress = document.querySelector('#viewAddress');
const viewDesc = document.querySelector('#viewDesc');

const addContactDiv = document.querySelector('.add-contact');
const inputName = document.querySelector('#inputName');
const inputPhone = document.querySelector('#inputPhone');
const inputEmail = document.querySelector('#inputEmail');
const inputAddress = document.querySelector('#inputAddress');
const inputDesc = document.querySelector('#inputDesc');
const addContactBtn = document.querySelector('.add-btn');

showContacts();

contactsLink.onclick = function(e){
    e.preventDefault();
    contactsLink.className = 'active';
    addContactLink.className = '';
    showContacts();
}

addContactLink.onclick = function(e){
    e.preventDefault();
    contactsLink.className = '';
    addContactLink.className = 'active';
    showAddContact();
}

addContactBtn.onclick = function(e){
    e.preventDefault();
    contacts.push({
        name:inputName.value,
        phone:inputPhone.value,
        email:inputEmail.value,
        address:inputAddress.value,
        desc:inputDesc.value
    });
    inputName.value = '';
    inputPhone.value = '';
    inputEmail.value = '';
    inputAddress.value = '';
    inputDesc.value = '';
}

function showContacts(){
    addContactDiv.style.display = 'none';
    contactsDiv.style.display = 'flex';
    contactView.style.display = 'none';
    renderContacts();
}

function showAddContact(){
    addContactDiv.style.display = 'block';
    contactsDiv.style.display = 'none';
}

function renderContacts(){
    contactList.innerHTML = '';
    for(let i = 0; i < contacts.length; i++){
        let li = document.createElement('li');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let removeBtn = document.createElement('div');
        li.className = 'list-item';
        h2.className = 'title';
        h3.className = 'sub-title';
        removeBtn.classList.add('delete');
        h2.innerHTML = contacts[i].name;
        h3.innerHTML = contacts[i].phone;
        li.append(h2);
        li.append(h3);
        li.append(removeBtn);
        contactList.append(li);
        li.onclick = function(e){
            let allLi = contactList.querySelectorAll('li');
            for(let i = 0; i < allLi.length; i++){
                allLi[i].className = 'list-item';
            }
            li.className = 'list-item item-active';
            viewName.innerHTML = contacts[i].name;
            viewPhone.innerHTML = contacts[i].phone;
            viewEmail.innerHTML = contacts[i].email;
            viewAddress.innerHTML = contacts[i].address;
            viewDesc.innerHTML = contacts[i].desc;
            contactView.style.display = 'block';
            if(e.target.classList.contains('delete')){
                li.classList.remove('item-active');
                contacts.splice(i,1);
                contactView.style.display = 'none';
                renderContacts();
            }
        }
    }
}
