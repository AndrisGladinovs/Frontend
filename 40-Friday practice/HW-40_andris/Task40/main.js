// 1. We take all variables from HTML to JS to complete this task

const divContacts = document.querySelector(".contacts"),
    divAddContact = document.querySelector(".add-contact"),
    contactsBtn = document.querySelector("#contactsBtn"),
    addContactBtn = document.querySelector("#addContactBtn"),
    addForm = document.forms.userInfo, //document.forms returns a new Array with all-included form elements
    addInputName = addForm.name,
    addInputPhone = addForm.phone,
    addInputEmail = addForm.email,
    addInputAddress = addForm.address,
    addInputDescr = addForm.description,
    greenAddBtn = document.querySelector(".add-btn"),
    ulList = document.querySelector(".list"), // <ul></ul> a place where we gonna push new <li></li> elements
    ulListItem = document.querySelectorAll(".list-item"),
    extraInfo = document.querySelector(".contact-view");

const userCard = [];
//here we will save all new contacts from input form. They will be stored in the array. After that we gonna create a <li></li> element and will push it, together with the data from userCard array, to our <ul></ul> element in HTML file. As a result a new contact information will appear on our HTMl file and on our website.

divContacts.style.display = "none";

addContactBtn.onclick = function(event) {
    event.preventDefault();
    divContacts.style.display = "none";
    divAddContact.style.display = "block";
    addContactBtn.className = "active";
    contactsBtn.className = "";
};

contactsBtn.onclick = function(event) {
    event.preventDefault();
    divContacts.style.display = "block";
    divAddContact.style.display = "none";
    addContactBtn.className = "";
    contactsBtn.className = "active";
    extraInfo.style.display = "none";

    ulListItem.forEach((item) => {
        item.style.cssText = "width: 450px";
    });

    renderContactList(); // this method will draw all <li></li> elements into <ul></ul> block
};

addForm.addEventListener("submit", function(event) {
    event.preventDefault();

    greenAddBtn.onclick = function() {
        if (addInputName.value) {
            userCard.push({
                name: addInputName.value,
                phone: addInputPhone.value,
                email: addInputEmail.value,
                address: addInputAddress.value,
                description: addInputDescr.value,
            });
        }

        console.log(userCard);
        renderContactList();
    };
});

function renderContactList() {
    userCard.forEach((item) => {
        var li = document.createElement("li");
        li.classList.add("list-item");
        li.style.cssText = "width: 350px";
        var h2 = document.createElement("h2");
        h2.className = "title";
        h2.innerHTML = item.name;
        li.appendChild(h2);
        var h3 = document.createElement("h3");
        h3.className = "sub-title";
        h3.innerHTML = item.phone;
        li.appendChild(h3);

        li.onclick = function(li) {
            var h2 = document.createElement("h2");
            h2.innerHTML = ulList.name;
            extraInfo.append(h2); // put in the beginning of <div></div>
            const infoDivOne = createInfoDivOne;
            extraInfo.append(infoDivOne);
            const infoDivTwo = createInfoDivTwo;
            extraInfo.append(infoDivTwo);
            const infoDivThree = createInfoDivThree;
            extraInfo.append(infoDivThree);
            var p = document.createElement("p");
            p.innerHTML = li.description;
            extraInfo.append(p);
            extraInfo.style.display = "block";
        };

        function createInfoDivOne(li) {
            var div = document.createElement("div");
            div.classList.add("contact-view-row");
            var img = document.createElement("img");
            img.src = "./img/technology.png";
            img.alt = "";
            var h3 = document.createElement("h3");
            h3.innerHTML = li.phone;
        }

        function createInfoDivTwo(li) {
            var div = document.createElement("div");
            div.classList.add("contact-view-row");
            var img = document.createElement("img");
            img.src = "./img/multimedia.png";
            img.alt = "";
            var h3 = document.createElement("h3");
            h3.innerHTML = li.email;
        }

        function createInfoDivThree(li) {
            var div = document.createElement("div");
            div.classList.add("contact-view-row");
            var img = document.createElement("img");
            img.src = "./img/buildings.png";
            img.alt = "";
            var h3 = document.createElement("h3");
            h3.innerHTML = li.address;
        }

        ulList.appendChild(li);
    });
}