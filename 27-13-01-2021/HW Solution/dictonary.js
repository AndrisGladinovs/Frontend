
// Переписать метод checkUserTranslation, он должен показывать слова не по порядку 
// и если пользователь ввел правильный перевод - удалять слово из массива
// Когда слов в массиве не останется, если пользователь не сделал ни одной ошибки показывать сообщение - "Great job!"
// Если ошибки были - показывать число сделанных ошибок
// Спросить пользователя, хочет ли он перейти на следующий уровень? (сохранить ответ в переменной)

const easyWords = [
    ['food', 'еда'],
    ['bike', 'велосипед'],
    ['apple', 'яблоко'],
    ['do', 'делать'],
    ['mean', 'иметь в виду']
],
complexWords = [
    ['function', 'функция'],
    ['stream', 'поток'],
    ['calculate', 'посчитать'],
    ['array', 'массив'],
    ['resolve', 'решать']
],

levels = [easyWords, complexWords],

    ru = 1,
    eng = 0;

startGame(levels);    

function startGame(gameLevels){
    for(let i = 0; i< gameLevels.length; i++){
        const errors = checkUserTranslation(gameLevels[i]);
        const nextLevel = finaleMessage(errors);
        if(!nextLevel) break;
    }
}

function checkUserTranslation(words){
    let errorCount = 0;
    while(words.length != 0){
        const index = getRandomArrayIndex(words.length);
        const userTransaltion = getUserTranslation(index, words);
        if(userTransaltion === words[index][ru]){
             alert('correct!');
             words.splice(index,1);
        }else{ 
            alert(`wrong, correct answear is ${words[index][ru]}`);
            errorCount ++;
        }
    }
    return errorCount;
}

function getUserTranslation(index, words){
    return prompt(`how is the word ${words[index][eng]} translated?`)
}

function getRandomArrayIndex(range){
    return Math.floor(Math.random() * range);
}

function finaleMessage(errorCount){
    if(errorCount == 0) alert('Great job!');
    else alert(`you were wrong ${errorCount} times.`);
    return confirm('One more time?');
}

//Task01
// 'background-color' -> backgroundColor;
// 'list-style-image' -> listStyleImage;   [list][S + tyle][I + mage]

/* function changeString(str){
    const words = str.split('-');
    for(let i = 1; i<words.length; i++){
        words[i] = words[i].slice(0,1).toUpperCase() + words[i].slice(1);  //  style.slice(0,1).toUpperCase
    }
    return words.join('');      // list + Style + Image 
} */

function changeString(str){
    return str.split('-').map((word,index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');     
}
console.log(changeString('list-style-image-something'));


//Task 02
const users = [
    {name: 'Vasya', age: 25},
    {name: 'Anna', age: 24},
    {name: 'Masha', age: 18}   // firstName
];
 console.log(users)

function getNames(arrayUsers, propertiesName){     // 
    return arrayUsers.map(item => item[propertiesName]);  
} 

console.log(getNames(users, 'status'));

const auto = {
    model: 'BMW',
    year: 2015,
    color: {
        out: 'black',
        inner: 'red'
    }
}

console.log(auto['color']['out']);

