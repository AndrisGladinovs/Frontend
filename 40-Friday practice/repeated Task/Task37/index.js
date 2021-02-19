const cart = [],
    productsDiv = document.querySelector(".products"),
    cartDiv = document.querySelector(".cart"),
    homeBtn = document.querySelector("#homeBtn"),
    cartBtn = document.querySelector("#cartBtn"),
    buttons = document.querySelectorAll(".card button");

let count = 0;

// after load the website second page is hidden as default
cartDiv.style.display = "none";

homeBtn.onclick = function(event) {
    event.preventDefault();
    productsDiv.style.display = "flex";
    cartDiv.style.display = "none";
    homeBtn.className = "active";
    cartBtn.className = "";
};

cartBtn.onclick = function(event) {
    event.preventDefault();
    productsDiv.style.display = "none";
    cartDiv.style.display = "block";
    homeBtn.className = "";
    cartBtn.className = "active";
    renderCart(); //funkcija, kotoraja otrisuet kartochki
};

// check which button has been clicked and transfer this data to function addToCart()
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function(event) {
        addToCart(event.target.dataset.title, event.target.dataset.price);
    };
}

// check if in the cart we already have such article
function addToCart(title, price) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].title === title) {
            cart[i].count++;
            return;
        }
    }
    cart.push({
        title: title,
        price: parseFloat(price),
        count: 1,
    });
}

function renderCart() {
    // we have a full array. Now we need to draw all elements to HTML
    const tbody = document.querySelector(".cart tbody");
    tbody.innerHTML = "";
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        totalPrice += cart[i].price * cart[i].count; // total price of all purchases
        tbody.innerHTML += `<tr>
<td>${cart[i].title}</td>
<td>${cart[i].price}</td>
<td>${cart[i].count}</td>
<td>${cart[i].price * cart[i].count}</td>
</tr>
`;
    }
    document.querySelector(".totalPrice").innerHTML = "Total: $" + totalPrice;
}