const tabTitles = document.querySelectorAll(".tabheader__item"), // nazvanie vegeterian, premium....
    tabsContent = document.querySelectorAll(".tabcontent"), // kartinka i tekst
    tabTitlesParent = document.querySelector(".tabheader__items");

function hideTabContent() {
    tabsContent.forEach((item) => {
        item.classList.add("hide"); // dobavljaem class iz CSS
        item.classList.remove("show"); // na vsjakij sluchaj esli u nih estj klass show
    });
    tabTitles.forEach((item) => {
        item.classList.remove("tabheader__item_active");
    });
}

function showTabContent(index = 0) {
    // hotim, stobi pervij element otobrazhalsja pri zagruzke kak default
    tabsContent[index].classList.add("show");
    tabsContent[index].classList.remove("hide");
    tabTitles[index].classList.add("tabheader__item_active");
}

tabTitlesParent.addEventListener("click", function(event) {
    const target = event.target; // tam gde kliknuli tuda sohranitsja objekt
    if (target && target.classList.contains("tabheader__item")) {
        // esli kliknuli na element s takim klassom
        tabTitles.forEach((item, index) => {
            if (target === item) {
                hideTabContent(); // sdelaj vse elementi ne vidimimi snachala
                showTabContent(index); // verni po index i pokazhi znachenija toljko nashego elementa
            }
        });
    }
});

hideTabContent();
showTabContent();