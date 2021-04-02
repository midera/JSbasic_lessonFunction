/*
створити функцію яка приймає масив та виводить його
*/
/*let spook = [23,56,41,74,45,12,32];
function printArray(spook){
    console.log(spook);
}
printArray(spook);*/
/*
створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.*/
/*function createArray(length,min,max){
    let moon = [];
    for (let i = 0; i < length; i++) {
        moon.push(Math.floor(Math.random() *(max-min)+min))
    }
   return moon;
}
let moonOne = createArray(10,1,100);
printArray (moonOne);*/
/*
створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)*/
/*
function returnMin(a,b,c){
    let min;
    if(a <= b && a <= c) min =b;
    if(b <= a && b <= c) min =b;
    if(c <= b && c <= c) min =b;

     return min;
}
const min = returnMin(5,2,7);
console.log(min);
*/

/*
створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
*/
/*function returnMax(a,b,c){
    let max;
    if(a <= b && a <= c) max =c;
    if(b <= a && b <= c) max =c;
    if(c <= b && c <= c) max =c;

    return max;
}
const max = returnMax(5,2,7);
console.log(max);*/
/*
створити функцію яка повертає найбільше число з масиву*/
// let numberArray = [21,52,74,78,45,65,41,89,78,741];
// function returnMaxNumber (numberArray){
//     let max = numberArray[0];
//     for (let i = 0; i < numberArray.length; i++) {
//      if(max<numberArray[i]) max= numberArray[i];
//     }
//     return max;
// }
// const max = returnMaxNumber(numberArray);
// console.log(max);
/*створити функцію яка повертає найменьше число з масиву*/

/*
let numberArray = [21,52,74,78,45,65,41,89,78,741];
function returnMinNumber (numberArray){
    let min = numberArray[0];
    for (let i = 0; i < numberArray.length; i++) {
        if(min>numberArray[i]) min= numberArray[i];
    }
    return min;
}
const min = returnMinNumber(numberArray);
console.log(min);*/
/*
створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
*/
/*let numberArray = [21,52,74,78,45,65,41,89,78,741];
 function Sum(numberArray) {
 let result = 0;
for (let i = 0; i < numberArray.length; i++) {
     result += numberArray[i];
  }
  return result;
 }

console.log(Sum(numberArray));*/
/*створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.*/
/*let numberArray = [21,52,74,78,45,65,41,89,78,741];
function Sum(numberArray) {
    let result = 0;
    for (let i = 0; i < numberArray.length; i++) {
        result += numberArray[i];
    }
    return result/numberArray.length;
}

console.log(Sum(numberArray));*/
/*
Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
*/
/*
   let user= [{name: 'Dima', age: 13}, {model: 'Camry'}]
function showKey (arrayObject) {
    let counter= [] ;
    for (const item of arrayObject) {
          for (const key in item) {
             counter.push(item);
          }
      }
    return counter;
}
const arrOne = showKey(user);
console.log(arrOne);
*/

/*10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
EXAMPLE:
    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]*/
/*
let user= [{name: 'Dima', age: 13}, {model: 'Camry'}];
function showKey (arrayObject) {
    let keys = arrayObject;
    return user.filter(function(item) {
        return keys.every(function(i) { return item[i] === arrayObject[i]; });
    });
}
const arrOne = showKey(user);
console.log(arrOne);
*/

/*function withVals(array, object) {
    var keys = Object.keys(object);
    return array.filter(function(item) {
        return keys.every(function(k) { return item[k] === object[k]; });
    });
}*/
/*11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
    EXAMPLE:
[1,2,3,4]
    [2,3,4,5]
результат
    [3,5,7,9]*/
/*
function splitArray (arrOne,arrTwo){
    let result = [];
    for (let i = 0; i < arrOne.length; i++) {
        result.push( arrOne[i] + arrTwo[i]);

    }
    return result;
}
const splitArrayOne = splitArray([1,2,3,4],[2,3,4,5] );
console.log(splitArrayOne);*/
