const productsDiv = document.querySelector(".products"),
    cartDiv = document.querySelector(".cart"),
    homeBtn = document.querySelector("#homeBtn"),
    cartBtn = document.querySelector("#cartBtn");

cartDiv.style.display = "none";

homeBtn.onclick = function(event) {
    event.preventDefault();
    homeBtn.className = "active";
    productsDiv.style.display = "flex";
    cartDiv.style.display = "none";
};

cartBtn.onclick = function(event) {
    event.preventDefault();
    cartDiv.className = "active";
    productsDiv.style.display = "none";
    cartDiv.style.display = "grid";
    let tdValue = cartDiv.getAttribute("td"); // get an attribute  of the table row, to manipulate with it
    tdValue.style.cssText =
        "margin-left: 20px; box-sizing: border-box; border: 1px solid black";
    tdValue.style.display = ""; // in the beginning display as empty boxes, without any items
};