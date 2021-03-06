"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
// function analyzeColor(color) {
//     if (color === "blue") {
//         console.log("blue is the color of the sky")
//     }else if (color === "red"){
//         console.log("Strawberries are red")
//     }else {
//         console.log("I don't know anything about " + color)
//     }
// }
// analyzeColor("blue");
// analyzeColor("red");
// analyzeColor(randomColor)
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)


/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
// switch (randomColor) {
//     case "blue":
//         console.log("blue is the color of the sky")
//         break;
//     case "red":
//         console.log("Strawberries are red")
//         break;
//     default:
//         console.log("I don't know anything about " + randomColor)
// }


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// let userColorPrompt = prompt("What is your favorite color?")
// switch (userColorPrompt) {
//     case "blue":
//         alert("blue is the color of the sky")
//         break;
//     case "red":
//         alert("Strawberries are red")
//         break;
//     case "orange":
//         alert("That is my favorite color!")
//         break;
//     default:
//         console.log("I don't know anything about " + userColorPrompt)
// }


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// let getRndInteger = Math.floor(Math.random() * (6));
//
// function calcTotal(getRndInteger, totalPrice) {
//
//     if (getRndInteger === 1) {
//         return "$ " + (totalPrice - (totalPrice * .1)) + "  is you new total";
//     } else if (getRndInteger === 2) {
//         return "$ " + (totalPrice - (totalPrice * .25)) + "  is you new total";
//     } else if (getRndInteger === 3) {
//         return "$ " + (totalPrice - (totalPrice * .35)) + "  is you new total";
//     } else if (getRndInteger === 4) {
//         // console.log(typeof (totalPrice - (totalPrice * .35)))
//         return "$ " + (totalPrice - (totalPrice * .5)) + "  is you new total";
//     } else if (getRndInteger === 5) {
//         return " It's your lucky day, its free!!";
//     } else {
//         return "Sorry no luck for you :( "
//     }
// }
//
// console.log(calcTotal(getRndInteger, 100));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 **/


let numPicker = () => {
    let result = confirm('Do you want to pick a number?');
    if (result) {
        let luckyNum = prompt("Pick a number")//Math.floor(Math.random() * (6));
        // console.log( parseInt(luckyNum), (luckyNum))
        if(parseInt(luckyNum)) {   // parseInt(luckyNum) returns NaN if luckyNum is a string, NaN is a falsely

            if (luckyNum % 2 === 0) {
                luckyNum >= 0 ? alert("Your number is positive") : alert("Your number is negative");
                alert("your number is even");
                luckyNum = luckyNum + 100;
                alert(luckyNum + "  is your number summed by 100");
            } else {
                console.log("should be odd: ", luckyNum);
                luckyNum >= 0 ? alert("Your number is positive") : alert("Your number is neg");
                alert("your number is odd");
                luckyNum = luckyNum + 100;
                alert(luckyNum + "  is your number summed by 100");
            }

        }else {
            // console.log("typeof: ", luckyNum)
            alert(" that's not a number");
        }
    }
    else {
            alert("Well never mind then :(")
        }
    }
    numPicker()


