// // reverse a string

//easy
// function reverseString1(str) {
//     return str.split('').reverse().join('');
// }
//
// console.log(reverseString1("mark"))
//
// //for loop
// function reverseString(string) {
//     let result = '';
//     for (let i = string.length - 1; i >= 0; i--) {
//         result += string[i];
//     }
//     return result;
// }
//
// console.log(reverseString("my name is mark"))
//
// // recursion
// function reverseStringRecurtion(str = '') {
//     const [head = '', ...tail] = str;
//     if (tail.length) {
//         return reverseStringRecurtion(tail) + head;
//     }
//
//     return head;
// }
//
// console.log(reverseStringRecurtion("mark is great"))


// Scoring: A: 90 + , B: 80 - 89, C: 70-79, D: 60 - 69, F: 60 -

// let letterGrade = (name, numGrade) => {
//     if (numGrade >= 90) {
//         return name + "  has a grade of A";
//     }else if ( numGrade >= 80 && numGrade <= 89) {
//         return name + "  has a grade of B";
//     }else if (numGrade >= 70 && numGrade <= 79) {
//         return name + "  has a grade of  C";
//     }else if (numGrade >= 60 && numGrade <= 69) {
//         return  name + "  has a grade of D";
//     }else {
//         return name + "  has a grade of F";
//     }
// }
// console.log(letterGrade("Mark", 100))
// console.log(letterGrade("john", 87))
// console.log(letterGrade("Thomas", 77))
// console.log(letterGrade("Josh", 67))
// console.log(letterGrade("Frank", 57))

// if (true === !!"fdnjff") {
//     console.log("it works")
// }else  {
//     console.log("it didnt work")
// }

//  turnary
//function example(…) {
//     return condition1 ? value1
//          : condition2 ? value2
//          : condition3 ? value3
//          : value4;
// }
// var name = "Marky";
// var numGrade = 100;


// function getGrade(name, numGrade) {
//     function letterGrade2(name, numGrade) {
//         return numGrade >= 90 ? "A"
//             : numGrade >= 80 && numGrade <= 89 ? "B"
//                 : numGrade >= 70 && numGrade <= 79 ? "C"
//                     : "F"
//     }
//
//     switch (letterGrade2(name, numGrade)) {
//         case "A":
//             return name + " has a grade of  " + letterGrade2(name, numGrade);
//         case "B":
//             return name + " has a grade of  " + letterGrade2(name, numGrade);
//         case "C":
//             return name + " has a grade of  " + letterGrade2(name, numGrade);
//         case "F":
//             return name + " has a grade of  " + letterGrade2(name, numGrade);
//         default:
//             return name + "  not a grade";
//     }
// }
//
// console.log(getGrade("Mark", 100))

// Write a function that accepts the top three bowling scores and returns the average.
//     Write a function that accepts the best score and returns true if its divisible by 3 or 5 and false if it’s not
let execute = () => {
    let score1 = 234;
    let score2 = 221;
    let score3 = 300;
    let scores = []
    let topBowlingScores = (score1, score2, score3) => {
        let scoreAve = (score1 + score2 + score3) / arguments.length;
        return Math.floor(scoreAve) + "  Is the average score";
    }
    console.log(topBowlingScores(score1, score2, score3))

    let highScoreDivis5n3 = (score1, score2, score3) => {
        let highScore = Math.max(score1, score2, score3);
        console.log(Math.max(score1, score2, score3))
        return highScore % 5 === 0 || highScore % 3 === 0;
        // if (highScore % 5 === 0 && highScore % 3 === 0) {
        //     return "The high score is " + highScore + "  and is divisible by Fizz Buzz"
        // } else if (highScore % 5 === 0) {
        //     return "The high score is " + highScore + "  and is divisible by 5"
        // } else if (highScore % 3 === 0) {
        //     return "The high score is " + highScore + "  and is divisible by 3"
        // } else {
        //     return highScore + " Is not divisible by 3 or 5"
        // }
    }
    console.log(highScoreDivis5n3(score1, score2, score3))

//Write a function that accepts the name of the bowling place (“ThEbEsTbOwLiNgPlAcEever”) and returns it in all lower case BONUS: return it with a space between each word
    let bowlingPlace = "ThEbEsTbOwLiNgPlAcEever";
    let lower = (bowlingPlace) => {
        let bowlingPlaceLower = bowlingPlace.toLowerCase()
        let bowlingPlaceString = bowlingPlaceLower.substring(0, 3) +
            " " + bowlingPlaceLower.substring(3, 7) +
            " " + bowlingPlaceLower.substring(7, 14) +
            " " + bowlingPlaceLower.substring(14, 19) +
            " " + bowlingPlaceLower.substring(19, bowlingPlaceLower.length + 1)
        return bowlingPlaceString;
    }
    console.log(lower(bowlingPlace));
// Given these variables: let score = 109; let name = “bowling Is Fun”; let isBowlingFun = true; let players = [“tom”, “jerry”, “Garfield”]; Write a function that returns the type of each of the variables (call the function once per variable);
    let score = 109;
    let name = "bowling Is Fun";
    let isBowlingFun = true;
    let players = ["tom”, “jerry", "Garfield"]

    let whatType = (data) => {
        return typeof data;
    }
    console.log(whatType(score));
    console.log(whatType(name));
    console.log(whatType(isBowlingFun));
    console.log(whatType(players));
// Write a function that executes all of the above functions
// Copy and execute the following functions, and find the Error: (Hint: try console logging the result)
//let myFunction (firstName, lastName) return firstName + lastName; };
//
    function thatsNotMyName(name) {
        if (name === "Laura") {
            return "that's me!, I'm " + "name"
        } else {
            return "that's not my name"
        }
    }

    console.log(thatsNotMyName("Mark"));
}
let myFunction = (firstName, lastName) => {
    return firstName + " " + lastName;
};
console.log(myFunction("Mark", "Graebener"))
execute();