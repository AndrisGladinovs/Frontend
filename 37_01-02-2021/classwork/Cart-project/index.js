const productsDiv = document.querySelector(".products"),
    cartDiv = document.querySelector(".cart"),
    homeBtn = document.querySelector("#homeBtn"),
    cartBtn = document.querySelector("#cartBtn");

cartDiv.style.display = "none";

homeBtn.onclick = function(event) {
    event.preventDefault();
    cartBtn.className = "";
    homeBtn.className = "active"; // stroka classov a ne massiv ... classList eto massiv
    cartDiv.style.display = "none";
    productsDiv.style.display = "flex";
};

cartBtn.onclick = function(event) {
    event.preventDefault();
    homeBtn.className = "";
    cartBtn.className = "active"; // stroka classov a ne massiv ... classList eto massiv
    productsDiv.style.display = "none";
    cartDiv.style.display = "block";
};