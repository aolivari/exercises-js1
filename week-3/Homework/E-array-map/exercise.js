// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];


function houndred(number) {
    return number * 100;
  }
var onehoundred = numbers.map(houndred);

var porcien = numbers.map(function (num){
    return num*100
    })

var otramas = numbers.map(num=>num*100)

console.log(onehoundred)
console.log(porcien)
console.log(otramas)

//completado