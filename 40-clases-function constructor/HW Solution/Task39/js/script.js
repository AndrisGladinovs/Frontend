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

// modal

const modalTriggers = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal"),
    modalCloseBtn = document.querySelector("[data-close]");

modalTriggers.forEach((item) => {
    console.log(item);
    if (item.dataset.modal == "bottom") {
        item.style.marginLeft = "35px";
    }
});

modalTriggers.forEach((btn) => {
    btn.addEventListener("click", function() {
        /* modal.classList.add('show');
                                                                                        modal.classList.remove('hide'); */
        // Либо вариант с toggle - но тогда назначить класс в верстке
        modal.classList.toggle("show");
        document.body.style.overflow = "hidden";
    });
});

function closeModal() {
    /*  modal.classList.add('hide');
                                            modal.classList.remove('show'); */
    modal.classList.toggle("show");
    // Либо вариант с toggle - но тогда назначить класс в верстке
    document.body.style.overflow = "";
}

modalCloseBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) {
        closeModal();
    }
});

// TIMER task

const deadline = "2021-05-20";

function getTimeRemaining(endtime) {
    const total = new Date(endtime) - new Date(), // Data.parse(endtime) - Data.parse(); // datu predstavj v vide stroki
        days = Math.floor(total / (1000 * 60 * 60 * 24)),
        hours = Math.floor((total / (1000 * 60 * 60)) % 24),
        minutes = Math.floor(((total / 1000) * 60) % 60),
        seconds = Math.floor((total / 1000) % 60);

    return {
        total, // ili total: total
        days, // ili total: days
        hours,
        minutes,
        seconds,
    };
}

function getZero(num) {
    if (num >= 0 && num < 10) {
        num = "0" + num;
        return num;
    } else {
        return num;
    }
}

function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
        days = timer.querySelector("#days"),
        hours = timer.querySelector("#hours"),
        minutes = document.querySelector("#minutes"),
        seconds = document.querySelector("#seconds"),
        timeInterval = setInterval(updateClock, 1000);
    updateClock(); // stobi pri zapuske srazu zapustilisj chasi. updateClock() VIDNA TOLJKO vnutri wtoj funkcii

    function updateClock() {
        const time = getTimeRemaining(endtime); // sozdaju objekt
        days.innerHTML = getZero(time.days);
        hours.innerHTML = getZero(time.hours);
        minutes.innerHTML = getZero(time.minutes);
        seconds.innerHTML = getZero(time.seconds);

        if (time.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}

setClock(".timer", deadline);