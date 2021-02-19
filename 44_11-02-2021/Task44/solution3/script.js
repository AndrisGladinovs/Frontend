// const root = document.querySelector("#root"),
//     nav = document.querySelector(".nav"),
//     searchInput = nav.querySelector(".search input"),
//     searchBtn = nav.querySelector("#search-btn");

// let currentPage = document.querySelector('a[href = "login"]');

// renderContactsList();
//renderLogin();

const state = {
    // kogda toljko zagruzili tranicu
    email: null,
    location: null, // gde nahodimsja na stranice
    contacts: [],
};

setUp();

function setUp() {
    const currentUser = Store.getCurrentUser();
    if (!currentUser) {
        navigation("login");
        return;
    }
    state.email = currentUser; // save in email the current user
    state.contacts = Store.getAllContacts(state.email);
    navigation("contacts");
}

function navBarView(isAuthorized, active, navBarClickHandler) {
    // tut dlja HTML risuem Navigation Bar
    const div = document.createElement("div");
    div.className = "nav";
    div.innerHTML = `
<ul>
${
  isAuthorized
    ? `
<li><a href="contacts" ${
        active === "contacts" ? 'class = "active"' : ""
      }>Contacts</a></li>
                <li><a href="add ${
                  active === "add" ? 'class = "active"' : ""
                }">Add new contact</a></li>
                <li><a href="logout" ${
                  active === "logout" ? 'class = "active"' : ""
                }>Logout</a></li>
`
    : `<li><a href="login">Login</a></li>`
}
</ul>
`;

  div.onclick = (e) => {
    e.preventDefault();
    if (e.target.tagName === "A") {
      navBarClickHandler(e.target.getAttribute("href"));
    }
  };
}

function navigation(path) {
  if (path !== state.location) {
    if (path === "logout") {
      Store.logout();
      state.email = null;
      state.contacts = [];
      state.location = "login";
    } else {
      state.location = path;
    }
  }
  app(); // funkcija, stobudet otobrazhatj v zavisiomosti ot PATH
}

function app() {
  const root = document.querySelector("#root");
  root.innerHTML = "";
  root.append(navBarView(state.email !== null, state.location, navigation));
}
root.append(document.createElement("hr"));
const div = document.createElement("div"); // sozdaju div ROOT
root.append(div);
if (state.location === "login") {
  div.className = "add-contact";
  div.innerHTML = renderLogin();
  document.forms.loginForm.onsubmit = loginSubmitHandler;
} else if (state.location === "contacts") {
  div.className = "contacts";
  div.innerHTML = renderList(state.contacts);
  div.querySelector(".list").onclick = contactClickHandler;
} else if (state.location === "add") {
  div.className = "add-contact";
  div.innerHTML = renderAddContact();
  document.forms.addContactForm.onsubmit = formSubmitHandler;
} else if (state.location === "logout") {
  div.className = "add-contact";
  div.innerHTML = renderLogin();
  document.forms.loginForm.onsubmit = loginSubmitHandler;
}

// searchInput.oninput = function() {
//     const filterContacts = Store.getAll().filter((item) =>
//         item.name.toLowerCase().startsWith(searchInput.value.toLowerCase())
//     );
//     renderList(filterContacts);
//     root.querySelector(".list").onclick = function(e) {
//         let li = e.target;
//         if (li.classList.contains("delete")) {
//             li.classList.remove("item-active");
//             filterContacts.splice(li.dataset.index, 1);
//             renderList(filterContacts);
//         } else {
//             if (li.tagName !== "LI") {
//                 li = e.target.parentNode;
//             }
//             root
//                 .querySelectorAll("li")
//                 .forEach((item) => item.classList.remove("item-active"));
//             const contact = filterContacts[li.dataset.index];
//             document.querySelector(
//                 ".contact-view"
//             ).innerHTML = contact.renderContactView();
//             li.classList.add("item-active");
//         }
//     };
// };

function renderContactsList() {
  const contacts = Store.getAll();
  renderList(contacts);
  root.querySelector(".list").onclick = contactClickHandler;
}

function renderList(list) {
  return `
     <ul class="list">
         ${list.map().join("")}  
     </ul>
     <div class="contact-view">No selected contact</div>
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

function contactClickHandler(e) {
  let li = e.target;
  if (li.classList.contains("delete")) {
    li.classList.remove("item-active");
    Store.deleteContact(state.email, li.dataset.index);
    state.contacts = Store.getAllContacts(state.email);
    if (state.contacts.length === 0) {
      localStorage.removeItem(state.email);
    }
    app();
  } else {
    if (li.tagName !== "LI") {
      li = e.target.parentNode;
    }
    root
      .querySelectorAll("li")
      .forEach((item) => item.classList.remove("item-active"));
    const contact = state.contacts(li.dataset.index);
    document.querySelector(".contact-view").innerHTML = `
        <h2>${contact.name}</h2>
           <div class="contact-view-row">
             <img src="../img/technology.png" alt="" />
             <h3>${contact.phone}</h3>
           </div>
           <div class="contact-view-row">
             <img src="../img/multimedia.png" alt="" />
             <h3>${contact.email}</h3>
           </div>
           <div class="contact-view-row">
             <img src="../img/buildings.png" alt="" />
             <h3 ">${contact.address}</h3>
           </div>
           <p>${contact.description}</p>`;
    li.classList.add("item-active");
  }
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
  return `
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
}

function formSubmitHandler(e) {
  e.preventDefault();
  const form = e.target;
  if (!formValidation(form)) {
    const result = Store.addContact(
      email,
      new Contact(
        form.name.value,
        form.phone.value,
        form.email.value,
        form.address.value,
        form.description.value
      )
    );
    if (result) {
      showSuccess(form.name.value);
      state.contacts = Store.getAllContacts(state.email);
    } else {
      showError(`Contact ${form.name.value} already exists`);
    }
    form.reset();
  }
}

function renderLogin() {
  return `
    <form name = "loginForm" action="#">
       <input
         id="login"
         class="form-control"
         type="text"
         name="login"
         placeholder="Type login"
       />
       <input
         id="password"
         class="form-control"
         type="password" 
         name="password"
         placeholder="Type password"
       />
       
       <div class="buttons"><button class="add-btn">Login</button></div>
     </form>
    `;
}

function loginSubmitHandler(event) {
  event.preventDefault();
  const form = event.target;
  const user = {};
  user.email = form.login.value;
  user.password = form.password.value;
  let registrationSuccess = true;
  try {
    Store.login(user);
  } catch (error) {
    console.log(error.message);
    try {
      Store.regstration(user);
    } catch {
      alert(error.message);
      registrationSuccess = false;
    }
  } finally {
    form.reset();
  }
  if (registrationSuccess) {
    (state.email = user.email),
      (state.location = "contacts"),
      (state.contacts = Store.getAllContacts(email));
    setUp();
  }
}

// Validation
function formValidation(form) {
  let hasErrors = false;
  for (let i = 0; i < form.elements.length; i++) {
    if (form.elements[i].localName !== "button") {
      form.elements[i].classList.remove("is-invalid");
      if (form.elements[i].value.trim() === "") {
        form.elements[i].classList.add("is-invalid");
        hasErrors = true;
      }
    }
  }
  if (hasErrors) {
    showError("All fields should be fill!");
  }
  return hasErrors;
}

function showSuccess(name) {
  let div = root.querySelector(".alert");
  if (!div) {
    div = document.createElement("div");
    root.prepend(div);
  }
  div.className = "alert alert-success";
  div.innerHTML = `Contact ${name} was added`;
}

function showError(error) {
  let div = root.querySelector(".alert");
  if (!div) {
    div = document.createElement("div");
    root.prepend(div);
  }
  div.className = "alert alert-danger";
  div.innerHTML = error;
}