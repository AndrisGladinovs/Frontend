const cart = [], // {title: Nokia 5510, price: 100, count: 2}
    productsDiv = document.querySelector(".products"),
    cartDiv = document.querySelector(".cart"),
    homeBtn = document.querySelector("#homeBtn"),
    cartBtn = document.querySelector("#cartBtn"),
    buttons = document.querySelectorAll(".card button"); // vse nashi knopki

cartDiv.style.display = "none";

homeBtn.onclick = function(event) {
    event.preventDefault();
    cartBtn.className = ""; // not active
    homeBtn.className = "active";
    cartDiv.style.display = "none";
    productsDiv.style.display = "flex";
};

cartBtn.onclick = function(event) {
    event.preventDefault();
    cartBtn.className = "active";
    homeBtn.className = "";
    productsDiv.style.display = "none";
    cartDiv.style.display = "block";

    renderCart(); // otrisovivaem karzinku s pokupkami
};

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function(event) {
        addToCart(event.target.dataset.title, event.target.dataset.price); // infa, kotoraja nam nuzhna pri nazhatii knopki
    };
}

function addToCart(title, price) {
    // prihodim po vsem tovararm i smotrim estj li uzhe takoj v karzine
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].title === title) {
            cart[i].count++;
            return;
        }
    }
    cart.push({
        // dobavljaet novij tovar v massiv
        title: title,
        price: parseFloat(price),
        count: 1,
    });
}

function renderCart() {
    const tbody = document.querySelector(".cart tbody");
    tbody.innerHTML = "";
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        totalPrice += cart[i].price * cart[i].count; // obshaja cena zakaza
        tbody.innerHTML += `<tr>
<td>${cart[i].title}</td>
<td>${cart[i].price} $</td>
<td>${cart[i].count}</td>
<td>${cart[i].price * cart[i].count} $</td>  
</tr>`;
    }
    document.querySelector(".totalPrice").innerHTML = "Total: $" + totalPrice;
}