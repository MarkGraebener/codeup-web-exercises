(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {
        firstName: "Rick",
        lastName: "Sanchez",
        sayHello: function () {
            return "Hello form " + this.firstName + " " + this.lastName;
        }
    };
    console.log(person.sayHello());
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
let registerOutPut = (name, amount) => {
    if(amount >= 200){
        let amount2 = (amount * 0.12);
        console.log(name + " Has spent $" + amount + " and received a discount of 12% for a new total of: $" + amount2);

    }else {
        console.log(name + " Has a total of: $" + amount);
    }
}
    for (let i = 0; i < shoppers.length; i++) {
        registerOutPut(shoppers[i].name, shoppers[i].amount)

    }
// registerOutPut(shoppers[1].name, shoppers[1].amount)
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: Man and His Symbols
     *      Author: Carl Jung
     *      ---
     *      Book # 2
     *      Title: Meditations
     *      Author: Marcus Aurelius
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      Book # 4
     *      Title: The Idiot
     *      Author: Fyodor Dostoevsky
     *
     *      Book # 5
     *      Title: Cosmos
     *      Author: Carl Sagan
     */
    let books = [
        {
        title: "Man and His Symbols",
        author: {
            firstName: "Carl",
            lastName: "Jung",
        }
        },
        {
            title: "Meditations",
            author: {
                firstName: "Marcus",
                lastName: "Aurelius",
            }
        },
        {
            title: "A Brief History of Time",
            author: {
                firstName: "Stephen",
                lastName: "Hawking",
            }
        },
        {
            title: "The Idiot",
            author: {
                firstName: "Fyodor",
                lastName: "Dostoevsky",
            }
        },
        {
            title: "Gravitation",
            author: [
                {firstName: "Charles W.", lastName: "Misner",},
                {firstName: "Kip S.", lastName: "Thorne",},
                {firstName: "John Archibald", lastName: "Wheeler",}
            ]
        }];
    console.log(books)
//     let makeBooks = (title, firstName, lastName) => {
// books.unshift(
//         books.title = (title),
//         books.author.firstName = (firstName),
//         books.author.lastName = (lastName)
//     )
//         console.log(books);
//
//     }
//     makeBooks("Man and His Symbols", "Carl", "Jung")
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();