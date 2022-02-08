// ========== Conditional Logic and Functions

// Write a function that takes in a number and returns triple the value of the passed number. Assume only number inputs.

// Modify the above function to work with numeric strings as well.

// Modify the above function to return a string output of 'not a number' if the input is not a number or numeric string.

// Write a function that takes in a number and string and returns the string 'matches length' if the passed number is the length of the passed string and returns 'no length match' otherwise.

// (CHALLENGE) Write a function that takes in a day of the week as a string and returns the number that matches the day of the week. 'Sunday' should return 1 and 'Saturday' should return 7.


// ========== + Loops

// Write a function that takes in a string input and logs each character of the string separately

// Write a function that takes in a string and logs it 133 times

// Write a function that takes in a string input and logs the first character, then the first two characts, etc., until the full string is logged.

// Example Input: 'Codeup'
//
// Example Output:
//
//     "C"
// "Co"
// "Cod"
// "Code"
// "Codeu"
// "Codeup"

// (CHALLENGE) Write a function that takes in two string inputs and for each letter in the first string, logs how many times that given letter appears in the second string. It should be case insensitive. If a letter appears more than once in the first string, the output should simply log the same message as many times as it appears in the first string.

// Example Inputs: "Codeup", "Coding Challenges"
//
// Example Output:
//
//     'C' appears in 'Coding Challenges' 2 time(s)
// 'o' appears in 'Coding Challenges' 1 time(s)
// 'd' appears in 'Coding Challenges' 1 time(s)
// 'e' appears in 'Coding Challenges' 2 time(s)
// 'u' appears in 'Coding Challenges' 0 time(s)
// 'p' appears in 'Coding Challenges' 0 time(s)
//

// ========== + Arrays

// Write a function that takes in two inputs and returns an array with those two inputs

// Write a function that takes in and array and another input and returns true if the value of the second input is an element in the first input array

// Write a function that takes in an array of numbers and returns the lowest number. Assume only number element values and an array of at least two numbers.

// Write a function that takes in an array of numbers and returns the product of the lowest and highest number. Assume only number element values and an array of at least two numbers.

// Write a function that takes in an array of numbers and returns the sum of the lowest two numbers. Assume only number element values and an array of at least two numbers.

// Write a function that takes in an array of strings and returns the first two words as a string concatenated together with a dash. Assume at least three string elements in the passed array.

// Example Input: ['cat', 'dog', 'fish']
// Example Output: 'cat-dog'

// (CHALLENGE) Write a function that takes in an array of strings and returns the array of strings sorted from shortest to longest string


// ========== + Objects

// Write a function that takes in an object and returns the object with an added property called 'extra' and a value of 'extra value'

// Assume for the next questions, this can be used as the array of user objects:

/*
  var users [
    {
      name: 'Justin',
      occupation: 'Web Developer',
      averageAnnualPizzasOrdered: 22
    },
    {
      name: 'Cathy',
      occupation: 'Web Developer',
      averageAnnualPizzasOrdered: 15
    },
    {
      name: 'Fred',
      occupation: 'Data Engineer',
      averageAnnualPizzasOrdered: 35
    },
    {
      name: 'Mary',
      occupation: 'DBA',
      averageAnnualPizzasOrdered: 10
    }
  ]
*/

// Write a function that takes in an array of user objects and returns the user object of the user with the longest name

// Write a function that takes in an array of user objects and returns the 'Web Developer' with highest averageAnnualPizzasOrdered value

// Write a function that takes in an array of user objects and returns the same array of user objects without the 'averageAnnualPizzasOrdered' properties

// (CHALLENGE) Write a function that takes in an array of user objects, increases the value of averageAnnualPizzasOrdered by 5 for each user and returns the average annual pizzas ordered across all users, after this adjustment.




// write a function that accepts a string and checks whether each string is upperCase or lowerCase and returns "letter  [insert letter] is uppercase/lowercase", accordingly.  Bonus: return "is not a character" if it's not a letter
//
// input example: "bJIENsdfRAIRVIrsRFAijgRar"



// let string =  "bJIENsdfRAIRVIrsRF-+A55ijgRar"
// let i = 0;
// let char='';
// while (i <= string.length -1){
//     char = string.charAt(i);
//     if (char.toLowerCase() != char.toUpperCase()){
//         if (char === char.toUpperCase()) {
//             console.log(`${char} is uppercase`);
//         }
//         if (char === char.toLowerCase()){
//             console.log(`${char} is lowercase`);
//         }
//     }else{
//         console.log(`${char} is not a letter`);
//
//     }
//     i++;
// }

// function isLetter(c) {
//     return c.toLowerCase() != c.toUpperCase();
// }
//
// console.log(isLetter("="));


// Write a function that finds duplicates, or repeating numbers in a string of numbers, and returns an object that shows how many times any repeating number is shown
// INPUT: “42992338111134”
// EXPECTED OUTPUT: {9: 2, 3: 2, 1: 4} (edited)

// let stringNum = "42992338111134";
// let stToArr = stringNum.split("");
// console.log(stToArr);
//
//
// let stringSorted = stToArr.sort();
// console.log(stringSorted);
//
// let howManys = (arr) => {
//     // create an object with diff values into new property's
//     let var1 = {
//         arr1: arr[0],// set first value into array
//         newArr: function (){
//         //    function to create a new property with the array of next values
//         },
//     };
//     // loop through sorted array , push into property untill diff value then push new property
//     for(let i = 1; i < arr.length; i++) {
//         if(i === var1){
//             arr.push();
//         }
//     }
// }

//Write a function that removes any duplicates from an array.
let Input = [2,3,5,8,3,1,2,6,3,2,7,8,2,4,7]
// expected output: [2,3,5,8,1,6,7,4]

// let  uniq = (x) => {
//     return x.sort().filter(function(item, pos, ary) {
//         return !pos || item !== ary[pos - 1];
//     });
// }
// console.log(uniq(Input));

function uniq(a) {
    return Array.from(new Set(a));
}
console.log(uniq(Input));