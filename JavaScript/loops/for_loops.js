"use strict";

//Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

// let showMultiplicationTable = (num) => {
//     for(let i = 0; i <= 10; i++) {
//         let product = num * i;
//         console.log(num + " * " + i + " = " + product)
//     }
// }
// showMultiplicationTable(8);

// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.

// Math.random() * (200 - 20) + 20;

// let randomNumIsEvenOrOdd = () => {
//     for(let i = 0; i <=10; i++) {
//         let randInt = Math.floor(Math.random() * (200 - 20) + 20);
//         if(randInt % 2 === 0) {
//             console.log(randInt + "  hey that's even")
//         }
//         console.log(randInt + "  that's an odd number")
//     }
// }
// randomNumIsEvenOrOdd()

// Create a for loop that uses console.log to create the output shown below.
// 1
// 22
//333
//4444
//55555
//.....
let logPyramid1 = () => {
    for(let i = 1; i < 10; i++) {
        let numerator = ((Math.pow(10, i) - 1) / 9)
        //console.log(numerator)
        console.log(i * numerator);
    }
}

let logPyramid = () => {
    for( let i = 1; i <= 9; i++){
        console.log( i.toString().repeat(i))
    }
}
logPyramid1()
logPyramid()
// let math = (num1, num2) => {
//     return Math.pow(num1,num2)
// }
// console.log(math(333, .4));
// 1 * 9 = 09
//
//     .        22 * 9 = 198
//     .       333 * 9 = 2997
//     .      4444 * 9 = 39996
//     .     55555 * 9 = 499995
//     .    666666 * 9 = 5999994
//     .   7777777 * 9 = 69999993
//     .  88888888 * 9 = 799999992
//     . 999999999 * 9 = 8999999991
// let math = () => {
//     return 198 *
// }
//
// console.log(math())
//Create a for loop that uses console.log to create the output shown below.
let decByFive = () => {
    for(let i = 100; i >=5; i -= 5){
        console.log(i);
    }
}
decByFive();

//