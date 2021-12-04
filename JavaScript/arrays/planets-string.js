(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
let planetsArray = planetsString.split("|")
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    let planetStringBr = "<br>" + planetsArray.join("</br><br>") + "</br>";
    console.log(planetStringBr);
    let planetStringsUl = "<ul>" + "<li>" + planetsArray.join("</li><li>") + "</li>" + "</ul>";
    console.log(planetStringsUl)
    // let planetString2 = "";
// let makePlanetString = (arr) => {
    // for(let i = 0; i < arr.length; i++) {
    //     planetString2 = "<br> " + arr.push(arr[i]) + " </br>";
    //     console.log("<br> " + arr.push(arr[i]) + " </br>")
    // }
    // planetString2 = planetsArray.join("</br> , <br>")
    // console.log(planetString2)

    // }
    // makePlanetString(planet)

})();