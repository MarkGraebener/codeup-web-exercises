// "use strict";
//
// const pickANum = () => {
//
//     do {
//         var number = prompt(" pick an odd number from 1 to 50");
//        if((!(typeof parseInt(number) === "number" && number % 2 === 1))){
//            alert("wrong input")
//        }
//     }while(!(typeof parseInt(number) === "number" && number % 2 === 1));
//     if(typeof parseInt(number) === "number" && number % 2 === 1){
//             for (let i = 1; i <= 50; i += 2) {
//                 if (i === parseInt(number)) {
//                     console.log(i + "That's your number!")
//                     continue;
//                 }
//                 console.log(i + "  is not your number!")
//             }
//         }
//
// }
// pickANum();

function fizzBuzz(n) {
    // Write your code here
    for(let i = 0; i <= n; i++) {
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz")
        }else if (i % 5 === 0){
            console.log("Buzz")
        }else if(i % 3 === 0){
            console.log("Fizz")
        }else{
            console.log(i)
        }
    }
}

fizzBuzz(30);