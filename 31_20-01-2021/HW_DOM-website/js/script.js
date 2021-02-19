//******************** Task 1 *****************/
// remove all promo from right side

const movieDB = {
    movies: [
        "On the Rocks",
        "The Trip to Greece",
        "Bad Education",
        "The Nest",
        "Nomadland",
    ],
};

const adv = document.querySelectorAll(".promo__adv img"),
    genre = document.querySelector(".promo__genre"),
    poster = document.querySelector(".promo__bg"),
    movieList = document.querySelector(".promo__interactive-list");

adv.forEach((item) => item.remove());

//const allAdv = document.querySelector(".promo__adv");
//allAdv.remove();

//******************** Task 2 *****************/
// Изменить жанр фильма, поменять "комедия" на "драма"

genre.textContent = "DRAMA";

//******************** Task 3 *****************/
/*Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS */

poster.style.backgroundImage = "url(img/bg.jpg)";

//******************** Task 4-5 *****************/
//Список фильмов на странице сформировать на основании данных из этого JS файла.
//Отсортировать их по алфавиту

movieList.innerHTML = "";
movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `<li class="promo__interactive-item">${i + 1} ${film}
                        </li>`;
});