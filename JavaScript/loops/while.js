"use strict";


function double() {
    let i = 1
    do {
        console.log(i);
        i *= 2;
    } while (i <= 65536);
}

double();


// const sellAllTheCones = () => {
//     let allCones = Math.floor(Math.random() * 50) + 50;//sets the amount of cones needed to sell
//     let i = 0;// iterator start
//     console.log("You have " + allCones + " cones to sell")
//     let totalCones = allCones - i;//sets the amount of cones left to buy
//
//     if (allCones > totalCones) {//why is this always false?
//         do {
//             var numCones = Math.floor(Math.random() * 5) + 1 //sets amount each customer buys
//             console.log(numCones + " cones sold")
//             i += numCones;// iterates by the amount of cones each customer buys
//             console.log(totalCones + " cones left to sell")
//
//         } while (allCones > 0)
//     }console.log("You dont have enough cones to sell")
// }
// sellAllTheCones();//scoping is the key to this


const sellAllTheCones = () => {
     let allCones = Math.floor(Math.random() * 50) + 50;//sets the amount of cones needed to sell
do{
    var numCones = Math.floor(Math.random() * 5) + 1 //sets amount each customer buys
if(numCones <= allCones){
    console.log(numCones + " cones sold...")
    allCones -= numCones;
}else {
    console.log("cannot sell you  " + numCones + " i only have " + allCones + " to sell")
}
    console.log(allCones)

}while (allCones > 0)
}
sellAllTheCones()
