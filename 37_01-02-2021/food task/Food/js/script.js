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

hideElements();
showElements();

// modal
const modalTriggers = document.querySelectorAll("[data-modal]"), // sobiraem vse data modal
    modal = document.querySelector(".modal"),
    modalCloseBtn = document.querySelector("[data-close]");

// viravniem knopku Contact us vnizu
modalTriggers.forEach((btn) => {
    if (btn.dataset.modal == "bottom") {
        btn.style.marginLeft = "35px";
    }
});

// esli click na CONTACT US to pokazivaetsja informacija
modalTriggers.forEach((btn) => {
    btn.addEventListener("click", function() {
        //modal.classList.add("show");
        //modal.classList.remove("hide");
        modal.classList.toggle("show");
        document.body.style.overflow = "hidden";
        //delaet stop kadr, stobi esli Contact information visvechivaetsja, to na background klient ne mog listatj stranicu vverh i vniz
    });
});

function closeModal() {
    //modal.classList.add("hide");
    //modal.classList.remove("show");
    modal.classList.toggle("show");
    document.body.style.overflow = "";
}

// esli nazhimaem na krestik, to zakrivaetsja okno
//modalCloseBtn.addEventListener("click", closeModal);

modal.addEventListener("click", function(e) {
    if (e.target === modal || e.target === modalCloseBtn) {
        closeModal();
    }
});

// zakritj pri nazhatii na knopku ESC

document.addEventListener("keydown", (e) => {
    // prosto strelochnaja funkcija
    if (e.key === "Escape" && modal.classList.contains("show"));
    closeModal();
});