MOVIES;

("use strict");

const movies = [
    { title: "On the Rocks", favorite: false }, //<li> On the Rocks </li>
    { title: "The Trip to Greece", favorite: false },
    { title: "Bad Education", favorite: false },
    { title: "The Nest", favorite: false },
    { title: "Nomadland", favorite: false },
];

const adv = document.querySelectorAll(".promo__adv img"),
    genre = document.querySelector(".promo__genre"),
    poster = document.querySelector(".promo__bg"),
    movieList = document.querySelector(".promo__interactive-list"),
    addForm = document.forms.movie, // document.forms returns an array of all form elements
    addInput = addForm.title, // // movie input
    checkbox = addForm.favorite; // checkbox, if is a favorite or not
addInput.focus();

addForm.addEventListener("submit", function(event) {
    event.preventDefault(); // stobi avtomaticheski ne otpravljala informaciju o user. Dannie budut peredani v nashem sluchae v neizvestnostj, a ne na server
    const newFilm = addInput.value,
        favorite = checkbox.checked;

    if (newFilm) {
        movies.push({ title: newFilm, favorite }); // favorite:favorite
        movies.sort((a, b) =>
            a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
        );
        renderMovieList(movieList, movies.map(mapMovieToListElement));
        // prorisovivaet vse novie INPUT elementi na HTML razmetku nashego dokument
        addInput.focus();
        event.target.reset();
    }
});

function mapMovieToListElement(movie, index) {
    const li = document.createElement("li"),
        removeBtn = document.createElement("div"), // sozdajom korzinku DELETE
        star = document.createElement("img");

    li.classList.add("promo__interactive-item");
    li.innerText = `${index + 1} ${movie.title}`;
    removeBtn.classList.add("delete");
    star.src = "./icons/Star.svg";
    star.alt = "star";
    star.style.cssText = "width: 20px; heigth: 20px; margin-left: 5px";

    removeBtn.onclick = function() {
        movies.splice(index, 1);
        renderMovieList(movieList, movies.map(mapMovieToListElement)); // v <ul> ...</ul> dobavljaem massiv, kotorij prorisovivaet elementi na HTML razmetke po shablonu
    };
    if (movie.favorite) li.append(star);
    li.append(removeBtn);

    return li;
}

function renderMovieList(parentElement, movies) {
    parentElement.innerHTML = ""; // kazhdij raz otrisovivaju v <ul></ul> novij element. Pervonachaljno risuju pustuju novuju stroku, v kotoruju potom budu stavitj nazvanie novogo filjma

    movies.forEach(function(movie) {
        parentElement.append(movie);
    });
}

adv.forEach((item) => item.remove()); // [promo__adv]
genre.textContent = "drama";
poster.style.backgroundImage = "url(img/bg.jpg)";

// stobi v samom nachale pri zagruzki stranici otobrazhalisj uzhe sushhestvujushhie filjmi
movies.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1));
renderMovieList(movieList, movies.map(mapMovieToListElement));