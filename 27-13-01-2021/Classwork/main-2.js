//let arr = new Array();
//           [0]     [1] [2] [3]   [4]            [5]
let arr = ['plum.png',1, {}, [], 'orange.png', 'apple.bmp'];

console.log(arr[1]);
console.log(arr.length);

/* arr[99] = 0;
console.log(arr.length);
console.log(arr); */

arr[arr.length] = 'banan.jpg';
console.log(arr, arr.length);

arr.length = arr.length-1;
console.log(arr);

//
// [2] [3] [4] []
//
for(let i = arr.length; i>0; i--){
    arr[i] = arr[i-1];
}
arr[0] = 'banan.jpg';
console.log(arr);

for(let i = 0; i<arr.length; i++){
    arr[i] = arr[i+1];
}

//arr.length = arr.length-1;
//console.log(arr);

arr.push('banan.jpg');
let ban = arr.pop();

console.log(ban);

arr.unshift('banan.jpg', 'melone');
console.log(arr);
let melone = arr.shift();
console.log(melone);

let numbers = [1,2,3,4,5];

for (let i = 0; i<numbers.length; i++){
    console.log(numbers[i] *2 );
}

for(let number of numbers){
    console.log(number + 5);
}




