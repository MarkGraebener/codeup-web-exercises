"use strict";

const pickANum = () => {

    do {
        var number = prompt(" pick an odd number from 1 to 50");
       if((!(typeof parseInt(number) === "number" && number % 2 === 1))){
           alert("wrong input")
       }
    }while(!(typeof parseInt(number) === "number" && number % 2 === 1));
    if(typeof parseInt(number) === "number" && number % 2 === 1){
            for (let i = 1; i <= 50; i += 2) {
                if (i === parseInt(number)) {
                    console.log(i + "That's your number!")
                    continue;
                }
                console.log(i + "  is not your number!")
            }
        }

}
pickANum();