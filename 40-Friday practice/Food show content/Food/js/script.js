const tabTitles = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabTitlesParent = document.querySelector(".tabheader__items");

function hideTabContent() {
    tabsContent.forEach((item) => {
        item.classList.add("hide");
        item.classList.remove("show");
    });

    tabTitles.forEach((item) => {
        item.classList.remove("tabheader__item_active");
    });
}

function showTabContent(index = 0) {
    tabsContent[index].classList.add("show");
    tabsContent[index].classList.remove("hide");
    tabTitles[index].classList.add("tabheader__item_active");
}

tabTitlesParent.addEventListener("click", function(event) {
    const target = event.target;
    console.log(target);
    if (target && target.classList.contains("tabheader__item")) {
        tabTitles.forEach((item, i) => {
            if (target === item) {
                hideTabContent();
                showTabContent(i);
            }
        });
    }
});

hideTabContent();
showTabContent();

// Modal
const modalTriggers = document.querySelectorAll("[data-modal]"), // vse knopki Contact Us
    modal = document.querySelector(".modal"), // div v kkotorom lezhit vesj modal s kontaktimi dannimi
    modalCloseBtn = document.querySelector("[data-close]"); // X na kotorij mozhno nazhatj i zakritj okno

modalTriggers.forEach((btn) => {
    if (btn.dataset.modal == "bottom") {
        // u vseh dataset obratitsja k tomu u kogo estj data-modal so znacheniem "bottom"
        btn.style.marginLeft = "35px";
    }
});

modalTriggers.forEach((btn) => {
    btn.addEventListener("click", function() {
        modal.classList.add("show");
        modal.classList.remove("hide");
        //modal.classList.toggle("show");
        document.body.style.overflow = "hidden"; // stobi ne mogli listatj ekran na backgrounde
    });
});

modalCloseBtn.addEventListener("click", closeModal());

// Modal Task 2:
// esli zakrivaem na ESC ili click na ljuboe mesto v okne, to zakrivaetsja okno s kontaktami

function closeModal() {
    //modal.classList.toggle("show");
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
}

modal.addEventListener("click", closeModal); // click na ljuboe mesto i zakrivaetsja okno. WORKS!!!!

/* ALSO WORKS!!!
modal.addEventListener("click", function(event){
if(event.target === modal || event.target ==== modalCloseBtn){
closeModal();
}
})
*/

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) {
        closeModal();
    }
});