//header

function header(props) {
    // parametri budem peredavatj cherez Object: avtorizovalsja li ili net i t.d
    const div = document.createElement("div"); // div navigacii
    div.classList.add("nav");
    div.innerHTML = `
    <h2>Phone Book</h2>
    <ul>
    ${
      props.auth
        ? ` <li><a href="add" class = ${
            props.isAdd ? "active" : ""
          }>Add new contact</a></li>
             <li><a href="logout">logout</a></li>`
        : `<li><a href="login">Login</a></li>`
    }
    </ul>`;

  div.onclick = (e) => {
    e.preventDefault();
    if (e.target.tagName === "A") {
      switch (e.target.attributes["href"].value) {
        case "add":
          props.onAddClickHandler();
          break;
        case "login":
          props.onLoginClickHandler();
          break;
        case "logout":
          props.onLogoutClickHandler();
          break;
      }
    }
  };
  return div; // verni kakaja funkcionaljnostj budet u <div></div>
}

function login(
  authSuccess,
  authError,
  email,
  password,
  onLoginClickHandler,
  onRegClickHandler
) {
  const div = document.createElement("div");
  div.classList.add("auth");
  div.innerHTML = `
${
  authSuccess
    ? `<div class	='alert alert-success'>Login or registration success </div>`
    : ""
}
${authError ? `<div class	='alert alert-danger'>${authError}</div>` : ""}
    <form name = "authForm" action="#">
       <input
         class="form-control"
         type="email"
         name="email"
value = ${email}
         placeholder="Type email"
       />
       <input
         class="form-control"
         type="password" 
         name="password"
value = ${password}
         placeholder="Type password"
       />
       <div class="auth-controls">
       <button id ="loginBtn" class="btn btn-success">login</button>
       <button id = "regBtn" class="btn btn-success">registration</button>
       </div>
     </form>
    `;

  div.onclick = (e) => {
    e.preventDefault();
    if (e.target.tagName === "BUTTON") {
      const emailInput = document.forms.authForm.email.value;
      const passwordInput = document.forms.authForm.password.value;

      switch (e.target.id) {
        case "loginBtn":
          onLoginClickHandler(emailInput, passwordInput);
          break;
        case "regBtn":
          onRegClickHandler(emailInput, passwordInput);
          break;
      }
    }
  };
  return div;
}

function content(
  contacts,
  selectedIndex,
  mode,
  onContactClickHandler,
  onAddContactClickHandler,
  onDeleteContactClickHandler
) {
  const div = document.createElement("div");
  div.classList.add("contacts");
  div.append(contactList(contacts, selectedIndex, onContactClickHandler));
  if (selectedIndex >= 0 && mode === "view") {
    div.append(
      contactView(contacts[selectedIndex], onDeleteContactClickHandler)
    );
  }
}

function contactList(contacts, selectIndex, onContactClickHandler) {
  const ul = document.createElement("ul");
  ul.classList.add("list");
  ul.innerHTML = contacts
    .map((contact, index) => {
      `<li class = 'list-item' ${
        index === selectedIndex ? "item-active" : ""
      } data-index = ${index}>
            <h2 class = 'title'>${contact.name} ${contact.lastName}</h2>
            <h3 class = 'sub-title'>${contact.phone}</h3>
        </li>`;
    })
    .join("");
  ul.onclick = (e) => {
    e.preventDefault();
    const li = e.target.tagName === "LI" ? e.target : e.target.parentElement;
    onContactClickHandler(parseInt(li.dataset.index));
  };
  return ul;
}

function contactView(contact, onDeleteContactClickHandler){
const div = document.createElement('div');
div.classList.add('contact-view');
div.innerHTML = `
<div class='header'>
<h2>${contact.name} ${contact.lastName}</h2>
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
        <p>${contact.description}</p>;
`
}

function home() {
  const div = document.createElement("div");
  div.classList.add("container");
  div.innerHTML = `
<img class="home-view" src="./img/contact_us.jpg" alt="homeview">
`;
  return div;
}

function loader() {
  //asinhronnij metod. Krutjashijsja loader. Tipa zagruzhaem dannie
  const div = document.createElement("div");
  div.classList.add("progress");
  div.innerHTML = `<div class = 'loader'></div>`;
  return div;
}