var elem = document.getElementsByTagName("a");
for (var n = 0, l = elem.length; n < l; n++) {
    elem[n].onclick = function() {
        console.log(n);
        return false;
    };
}
//Все время будет выдавать порядковый номер последнего эллемента в alert

// Можно замкнуть функцию:
var elem = document.getElementsByTagName("a");
for (var n = 0, l = elem.length; n < l; n++) {
    elem[n].onclick = (function(x) {
        return function() {
            alert(x);
            return false;
        };
    })(n); //Создаем функцию, сразу же её вызываем она возвращает нам порядковый номер элемента в alert при событии click на элементе.
}

const video = {
    title: "a",
    play() {
        console.log(this);
    },
};

//console.log(video.play());
video.play();

video.stop = function() {
    console.log(this);
};

console.log(video);