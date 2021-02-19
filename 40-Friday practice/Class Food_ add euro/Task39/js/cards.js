// Task 4
// reshenie s Class metodom po izmeneniju ceni kartochkam
// nuzhni vse elementi HTML razmetki kartochki
// cenu menjaem s dollara v evro

class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector) {
        // parentSelector = place where we gonna publish our cards
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.parent = document.querySelector(parentSelector);
        this.transfer = 0.85; // kurs $ k evro
        this.changeToEuro(); // vizivaem metod, stobi this.price peresahronilsja v evro
    }
    changeToEuro() {
        this.price = this.price * this.transfer;
    }

    render() {
        const element = document.createElement("div");
        element.classList.add("menu__item"); // vse kartochki lezhat v etom klasse
        //element.classList.add upakovivaet, zavorachivaet nashu nachinku .innerHTML v obshij DIV ("menu__item")
        // imenno poetomu mi nachinaem propisivatj .innerHTML s <img>, a ne <div></div>
        element.innerHTML = `
<img src=${this.src} alt=${this.alt}>
                        <h3 class="menu__item-subtitle">${this.title}</h3>
                        <div class="menu__item-descr">${this.descr}</div>
                        <div class="menu__item-divider"></div>
                        <div class="menu__item-price">
                            <div class="menu__item-cost">Price</div>
                            <div class="menu__item-total"><span>${this.price}</span> € day</div>
                        </div>
`;
        this.parent.append(element);
    }
}

//esli zagruzitj i otrisovatj toljko 1 kartochku
// const card = new MenuCard(src, alt, title, descr, price, parentSelector);
// card.render();

const menuCard = []; // massiv kartochek
// dlja zagruzki vseh kartochek i zatem otrisovivaem ih na HTML razmetke

menuCard.push(
    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        "Fitness",
        'The "Fitness" menu is a new approach to cooking: more fresh fruits and vegetables. A product of active and healthy people. It is a brand new product with an optimal price and high quality!',
        25,
        ".menu .container"
    )
);

menuCard.push(
    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        "Premium",
        'In the menu "Premium" we use not only beautiful packaging design, but also high-quality execution of dishes. Red fish, seafood, fruit - a restaurant menu without going to the restaurant!',
        35,
        ".menu .container"
    )
);

menuCard.push(
    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        "Vegitarian",
        "The Vegetarian menu is a careful selection of ingredients: no animal products, milk from almonds, oats, coconut or buckwheat, the right amount of protein through tofu and imported vegetarian steaks.",
        30,
        ".menu .container"
    )
);

menuCard.forEach((card) => card.render());