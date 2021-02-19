// Algorithms - posledovateljnostj dejstvij dlja reshenie zadachi
// Big O - kakoe kolichestvo informacii pri reshenii dolzhno bitj obrabotano

// maksimaljnoe chislo stavim v konec

function bubbleSort(array) {
    for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
        console.log(array);
    }
}

const arr = [4, 8, 1, 5, 9, 10, 2];
bubbleSort(arr);
console.log(arr);

// ubiraem pustoj pragon

const arr = [4, 8, 1, 5, 9, 10, 2];

function bubbleSort2(array) {
    let swapped;
    do {
        swapped = false;
        console.log(array);
        array.forEach((item, index) => {
            if (item > array[index + 1]) {
                let temp = item;
                array[index] = array[index + 1];
                array[index + 1] = temp;
                swapped = true;
            }
        });
    } while (swapped);
}

bubbleSort2(arr);

//*********************** BINAR SEARCH *************/
// sortiruem massiv, vistraivaem po vozrastaniju. Uzhe v sort. massive delim ego napopolam, proverjaem element po seredine i posmotretj boljshe li on nashego znachenija ili menjshe

const arr = [1, 2, 3, 4, 5, 6, 7]; // nuzhen otsartirovannij massiv ili vizvatj snachala metod Bubble Sort, kotorij otsortiruet massiv
let iteration = 0;

function binarySearch(array, number) {
    let low = 0,
        height = array.length - 1;

    while (low <= height) {
        let mid = Math.floor((low + height) / 2);
        if (array[mid] === number) {
            iteration++;
            return mid;
        } else if (array[mid] > number) {
            iteration++;
            height = mid - 1;
        } else {
            iteration++;
            low = mid + 1;
        }
    }
    return -1;
}

console.log(binarySearch(arr, 6));
console.log(iteration);