const products = [{
            id: 1,
            title: "Ericsson T20",
            price: 70,
            url: "../img/ericsson-t20s-1000x1000.jpg",
        },
        {
            id: 2,
            title: "Ericsson T65",
            price: 300,
            url: "../img/ericsson-t65-1000x1000.jpg",
        },
        {
            id: 3,
            title: "Nokia 5210",
            price: 100,
            url: "../img/nokia-5210-1000x1000.jpg",
        },
        {
            id: 4,
            title: "Nokia 6300",
            price: 110,
            url: "../img/nokia-6300-1000x1000.jpg",
        },
        {
            id: 5,
            title: "Nokia 6310i",
            price: 110,
            url: "../img/nokia-6310i-1000x1000.jpg",
        },
        {
            id: 6,
            title: "Nokia E5",
            price: 100,
            url: "../img/nokia-e5-1000x1000.jpg",
        },
        {
            id: 7,
            title: "Nokia E63",
            price: 300,
            url: "../img/nokia-e63-1000x1000.jpg",
        },
        {
            id: 8,
            title: "Siemens A50",
            price: 80,
            url: "../img/siemens-a50-1000x1000.jpg",
        },
    ],
    cart = [], // gde hranjatsja vse pokupki KARZINA
    nav = document.querySelector(".nav"),
    root = document.querySelector("#root");

let currentPageLink = nav.querySelector('a[href = "home"]'); // eta ssilka menjaetsja, a nash massiv s silkoj tovarov net. Poetomu massiv s tovarami CONST

function renderCart() {
    root.className = "cart";
    root.innerHTML = `
<table>
    <thead>
    <th class="title">title</th>
    <th class="price">price</th>
    <th class="count">count</th>
    <th class="total">total</th>
    </thead>
    <tbody>
${cart.map(cartRow).join("")};
    </tbody>
</table>
    <div class="totalPrice">Total: cart.reduce(function (acc, p){return acc + p.price * p.count}, 0)</div>
`;
}

function addtoCartClickHandler(event) {
    if (event.target.tagName === "BUTTON") {
        // tag event.target vsegda UPPERCASE
        let item = cart.find(function(product) {
            return product.id === parseInt(event.target.dataset.id);
        });
    }
    if (item) {
        item.count++;
    } else {
        let product = products.find(function(item) {
            return (item.id = parseInt(event.target.dataset.id));
        });
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            count: 1,
        });
    }
}

function cartRow(productCart) {
    // prihodit objekt i delaem strochku
    return `
<tr>
<td>${productCart.title}</td>
<td>${productCart.price} $</td>
<td>${productCart.count}</td>
<td>${productCart.price * productCart.count} $</td>
</tr>
`;
}

function card(product) {
    // risuem kartochku v vide HTML razmetki
    return `
<div class="card">
    <h2>${product.title}</h2>
    <img src="${product.url}" alt="">
    <h3>${product.price}</h3>
    <button data-id = "${product.id}">Add to cart</button>
</div>
`;
}