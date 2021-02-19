const form = document.querySelector("#my_form"),
    getAllBtn = document.querySelector("#getAllBtn"),
    addForm = document.forms.addContact,
    inputAddress = addForm.address,
    inputDescription = addForm.description,
    inputEmail = addForm.email,
    inputId = addForm.id,
    inputLastName = addForm.lastName,
    inputName = addForm.name,
    inputPhone = addForm.phone,
    addBtn = document.querySelector("#addBtn");

form.onsubmit = (e) => {
    e.preventDefault();
    //registration(e.target.email.value, e.target.password.value); // vernjot promise
    registration(e.target.email.value, e.target.password.value)
        .then((body) => {
            localStorage.setItem("token", body.token); // mozhem vmesto body pisatj takzhe RESPONSE
        })
        .catch((error) => {
            switch (error.message) {
                case "409":
                    alert("User already exists");
                    break;
                case "400":
                    alert("Wrong email or password format");
                    break;
            }
        });
};

getAllBtn.onclick = () => {
    const token = localStorage.getItem("token");
    getAllContacts(token)
        .then((body) => console.log(body))
        .catch((error) => {
            console.log(error);
        });
};

addForm.onsubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const token = localStorage.getItem("token");
    console.log(data);
    const value = Object.fromEntries(data.entries());
    console.log(value);
    //addFormData = addForm.elements.value;
};