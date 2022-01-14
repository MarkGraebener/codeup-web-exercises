

//1 crypt function//
// take in phrase in array//
// create random num to shift the alphabet from 1 to 26, 0 is not an option
// create array of each char in string
// loop through array of chars
// @ each char use random number to shift current array index to alphabet
//at each char in string i need to find the index associated with the corresponding alphabet c=2,b=1,f=5 ect....
// take that index
// output: a number associated with the shift and letter of shifted value
// const englishAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
// let makeCyfer = (arr) => {
//
// }
//decrypt function//
//takes in array of shift value  and letters of shifted value//
// output: an array of a string that is each un shifted number to the original char//

// Make a program that filters through this array: ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"] and returns a new array that contains only those whose name have only 4 letters in them.

let arr = ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"];
let fourLetters = (arr) => {
    let arr2 = [];
    for(let i = 0; i < arr.length; i++){
        if(i.value.length === 4){
           arr2 = arr2.push[i];
           i++;
        }i++;
    }
    return arr2;
}
console.log(fourLetters(arr));