const cart = [], //{title: Nokia, price: 100, count: 1} dannie kuda naklikal klient
    productsDiv = document.querySelector(".products"),
    cartDiv = document.querySelector(".cart"),
    homeBtn = document.querySelector("#homeBtn"),
    cartBtn = document.querySelector("#cartBtn"),
    buttons = document.querySelectorAll(".card button");

cartDiv.style.display = "none";

homeBtn.onclick = function(event) {
    event.preventDefault();
    cartDiv.style.display = "none";
    productsDiv.style.display = "flex";
    homeBtn.className = "active";
    cartBtn.className = ""; // clear the class for cartBtn
};

cartBtn.onclick = function(event) {
    event.preventDefault();
    cartBtn.className = "active";
    homeBtn.className = "";
    productsDiv.style.display = "none";
    cartDiv.style.display = "block";
    renderCart(); // metod otrisovivajushij tovar spervoj stranoci v tablicu
};

// privjazivaem kartochki, kotoruju vibral klient sobitie
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function(event) {
        addToCart(event.target.dataset.title, event.target.dataset.price);
    };
}

function addToCart(title, price) {
    // probegaemsja po vsem lezhashim v karzine tovaram i smotrim estj li uzhe takoj tam ili net
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].title === title) {
            cart[i].count++;
            return;
        }
    }
    cart.push({
        title: title, // sohranjaem tot title kotorij nam prishel
        price: parseFloat(price),
        count: 1,
    });
}

function renderCart() {
    const tbody = document.querySelector(".cart tbody");
    tbody.innerHTML = ""; // stiraem vsjo sto bilo do etogo
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        totalPrice += cart[i].price * cart[i].count; // eta obshaja cena vseh pokupok
        tbody.innerHTML += `<tr>
<td>${cart[i].title}</td>
<td>${cart[i].price} $</td>
<td>${cart[i].count}</td>
<td>${cart[i].price * cart[i].count} $</td>
</tr>`;
    }
    document.querySelector(".totalPrice").innerHTML = "Total: $" + totalPrice;
}