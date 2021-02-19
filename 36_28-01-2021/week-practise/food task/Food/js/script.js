const tabTitles = document.querySelectorAll(".tabheader__item"),
    tabTitlesParent = document.querySelector(".tabheader__items"),
    tabsContent = document.querySelectorAll(".tabcontent");

function hideElements() {
    tabsContent.forEach((item) => {
        item.classList.remove("show");
        item.style.display = "none";
    });
    tabTitles.forEach((item) => {
        item.classList.remove("tabheader__item_active");
    });
}

function showElements(index = 0) {
    tabsContent[index].classList.remove("show");
    tabsContent[index].style.display = "block";
    tabTitles[index].classList.add("tabheader__item_active");
}

tabTitlesParent.addEventListener("click", function(event) {
    const target = event.target;
    if (target && target.classList.contains("tabheader__item")) {
        tabTitles.forEach((item, index) => {
            if (target === item) {
                hideElements();
                showElements(index);
            }
        });
    }
});