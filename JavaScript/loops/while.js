"use strict";



function double () {
    let i = 1
    do {
        console.log(i);
        i = i * 2;
    }while (i <= 65536);
}
double();