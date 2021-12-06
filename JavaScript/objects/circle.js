(function () {
    "use strict";

    // create a circle object
    let circle = {
        radius: 3,

        getArea: function () {
            return Math.PI * Math.pow(this.radius, 2);
        },

        logInfo: function (doRounding) {
            if (doRounding) {
                console.log("Circle information rounded to the nearest whole number");
                console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(this.getArea()));

            } else {
                console.log("Raw circle information");
                console.log("Area of a circle with radius: " + this.getArea() + ", is: " + this.getArea);

            }
            console.log("Area of a circle with radius: " + this.radius + ", is: ");
        }
    };

    // log info about the circle
    // console.log("Raw circle information");
    circle.logInfo(false);
    // console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();