const numberOfFilms;
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {}, // {film title: "titanic", rate: 8.8}
    genres: [],
    private: false,
}

// REALIZACIJA VSEH METODOV

rememberMyFilms(2);
detectedPersonLevel(personalMovieDB.count);
writeYourGenre(3);
showMyDB(personalMovieDB.private);

// START VSEH METODOV

function start() {
    do {
        numberOfFilms = +prompt('How many movies have you watched?');
    } while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms));
}

function rememberMyFilms(filmsNumber) {
    for (let i = 0; i < filmsNumber; i++) {
        const title = prompt('Enter the name of the movie you have watched?'),
            const rate = prompt('Please rate this movie!');

        if (title != null && rate != null && title != '' && rate != '') {
            personalMovieDB.movies[title] = rate;
        } else {
            i--;
        }
    }
}

function detectedPersonLevel(moviesCount) {
    if (moviesCount < 10) {
        console.log('You don\'t like movies');
    } else if (moviesCount >= 10 && moviesCount <= 30) {
        console.log('You are a normal movies-viewer\u{1F60D}'); // eto smajlik postavili // stavim figurnie skobki, potomu sto postavili slesh i skazali sisteme, sto sejchas sdesj budet simvol
    } else if (moviesCount > 30) {
        console.log('You\'re a movie buff! ');
    } else {
        console.log('error');
    }
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.private); // proverjaem private li informacija ili net. Raz u nas false, to mi ejo perevarachivaem v metode v true, stobi vipolnilosj dejstvie v console.log

function writeYourGenre(genresNumber) {
    for (let i = 1; i <= genresNumber; i++) {
        personalMovieDB.genres[i - 1] = prompt(`What is your favorite top ${i} genre?`);
    }
}






/* for (let i = 0; i < 2; i++) {
    const title = prompt('The name of the movie you have watched?'),
        const rate = prompt('Please rate this movie!');

    if (title != null && rate != null && title != '' && rate != '') {
        personalMovieDB.movies[title] = rate;
    } else {
        i--;
    }
}
*/

// eshe napisali kakoe znachenie sohranilosj pod count. Esli menjshe count < 10, to soobshenie "malo smotrite", i > 10, no menjshe 20 alert ("vi ljubite kino"), boljshe 20 ("vi nastojashij kinoman", boljshe 30 ("takogo ne mozhet bitj!"))

// 1. Realizovatj nashu logiku s pomoshju funkcij
// 2. Napisatj funkciju showMyDB, kotoraja budet proverjatj pole private i esli ono FALSE, to vivodit na console nashu bazu dannih
// 3. Napisatj funkciju dlja GENRES (writeYourGenre). Poljzovatelj 3 raza otvechaet na vopros