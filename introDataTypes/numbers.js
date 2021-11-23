//
// console.log('1' + 2)
// // "12"
//
// console.log( '1' + 2)
// //string
//
// console.log(6 % 4)
// //2
//
// // '3 + 4 is ' + 3 + 4
// console.log(3 + 4)
// // how could you make this produce the correct output?
//
// console.log(0 < 0)
// // false
//
// console.log('1' == 1)
// // true wrong its false
//
// console.log( true == 'true')
// //true wrong its false
//
// console.log(5 >= -5)
// // true
//
// console.log( !false || false)
// // true
//
// console.log( true || "42" )
// //true
//
// console.log( !true && !false )
// // false
//
// console.log( 6 % 5 )
// // 1
//
// console.log( 5 < 4 && 1 === 1)
// // false
//
// console.log( typeof 'codeup' === 'string')
// // true
//
// console.log( 'codeup' === 'codeup' && 'codeup' === 'Codeup' )
// // false
//
// console.log( 4 >= 0 && 1 !== '1' )
// //true
//
// console.log( 6 % 3 === 0 )
// //true
//
// console.log( 5 % 2 !== 0 )
// //true


// Execute the following statement in the Chrome JavaScript console and then follow the directions below.
//
//
//     var sample = "Hello Codeup";
// Use .length to find the number of characters in the string.
//     Try to make the sample string all upper or all lower case.
// Update the variable sample via concatenation so that it contains "Hello Codeup Students".
//     Replace "Students" with "Class".
//     Find the index of "c" using .indexOf(). What do you observe?
//     Find the index of "C" using .indexOf().
//     Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().

// let sample = "Hello Codeup";
// console.log(sample.length)
// console.log(sample.toUpperCase())
// console.log(sample.toLowerCase())
// sample = sample + " Students";
// console.log(sample)
// sample = sample.replace("Students", "Class")
// console.log(sample)
// console.log(sample.indexOf("c"))
// console.log(sample.indexOf("C"))
// console.log(sample.substring(sample.indexOf("C"), 12))

// Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.
//
//     You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?


// function costOfRental(nameOfMovie, daysRented) {
//     let costPerDay = 3;
//     let totalCost = daysRented * costPerDay;
//     console.log(nameOfMovie + " " + "$" + totalCost + ".")
// }
//
// costOfRental("littleMermaid", 3)

//     Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

// function faceMoneyPerWeek(hoursPerWeek, moneyPerHour) {
//     let moneyEarned = hoursPerWeek * moneyPerHour;
//     return moneyEarned
// }
// function amazonMoneyPerWeek(hoursPerWeek, moneyPerHour) {
//     let moneyEarned = hoursPerWeek * moneyPerHour;
//     return moneyEarned
// }
// function googleMoneyPerWeek(hoursPerWeek, moneyPerHour) {
//     let moneyEarned = hoursPerWeek * moneyPerHour;
//     return moneyEarned
// }
//
// console.log(faceMoneyPerWeek(10, 350) + amazonMoneyPerWeek(4, 380) + googleMoneyPerWeek(6, 400))

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
// var class = true;
// var schedule = false;
// let canAttendClass = (class) => {
//     if (!class && !schedule)(
//      console.log("class scheduled");
//     )
//     else(
//         console.log("you have an class")
//     )
// }
//
//     A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

// let productSale = (itemCount, isPremium) => {
//     if (isPremium || itemCount >= 3) {
//
//         console.log("you got the sale")
//     } else {
//         console.log("no sale for you");
//     }
// }
// productSale(2, false);
// Use the following code to follow the instructions below:
//
//
//     var username = 'codeup';
// var password = 'notastrongpassword';
// Create a variable that holds a boolean value for each of the following conditions:
//
//     the password must be at least 5 characters
// the password must not include the username
// the username must be no more than 20 characters
// neither the username or password can start or end with whitespace

// let username = 'codeup';
// let password = 'notastrongcodeuppassword';
// let passCharMin = password.length >= 5;
// let passUserNameCheck = password.includes(username.substring(1, username.length));
// let userNameMaxChar = username.length < 20;
// let noWhiteSpace = (username && password === username.trim() && password.trim());
//
// console.log(passUserNameCheck)
//
// let isAtBar = false;
// let bac = .00;
// let age = 22;
// let cashOnHand = 7.99;


// let canHaveADrink = (bac < .08 && age >= 21 && cashOnHand >= 5.00) // true && false && true && true --> false
//
// if (!canHaveADrink) { // true or false
//     console.log("No brewski my dude!");
// } else if(!isAtBar){ // it was not true
//     console.log("have a brew dude togo");
// }else{
//     console.log("have a cold beer")
// }

// Its definition has two parameters: a boolean which informs if it's cloudy and a number which tells us how many planes are scheduled to fly
// If it is not cloudy AND there are less than 10 planes scheduled to fly, then today is a good day to fly!

// let canIFly = (isCloudy, numOfPlanes) => {
//     if(!isCloudy && numOfPlanes < 10) {
//         console.log("go fly!")
//     }else{
//         console.log("not taday!")
//     }
// }
// canIFly(false, 9);


//Return the sum of two numbers
// Return the difference of two numbers
// Return the product of two numbers
// Return the dividend of two numbers

let sum = (x, y) => x + y;
console.log( sum(2, 4));

let difference = (x, y) => x - y;
console.log(difference(4, 7));

let product = (x, y) => x * y;
console.log(product(4,23));

let pi = (x, y) => x / y;
console.log(pi(22, 7))

let remainder = (x, y) => x % y;
console.log(remainder(20, 13));
