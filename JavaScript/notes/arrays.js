"use strict";

let favFoods = ["steak", "ice-cream", "fried-chicken", "steak",[1,2,3]];
console.log(favFoods[0]);
console.log(favFoods.length);
console.log(favFoods)
favFoods[0] += " 1";
favFoods[1] += " 2";
favFoods[2] += " 3";
favFoods[3] += " 1";

console.log(favFoods);
console.log(favFoods.indexOf("steak 1"))//must be exact
// let steakIndex = favFoods.lastIndexOf("steak 1")
console.log(favFoods.lastIndexOf("steak 1"))//must be exact
console.log(favFoods[4][1])//access inner array