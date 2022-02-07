const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//1.
// users.filter(function(x) {
// let three = [];
//     if(x.languages.length >= 3){
//         three.push(x)
//         console.log(three);
//     }
// });
//2.
// let three = users.filter(function(n) {
//     return n.languages.length >= 3
// });
// console.log(three);

//3.
// let emails = users.map(function (n) {
//     return n.email;
// });
// console.log(emails);


//4.
// const aveYears = users.reduce((total, user) => {
//     console.log(total, user.yearsOfExperience);
//     return total + user.yearsOfExperience / users.length;
// }, 0);
// console.log(aveYears);

// 5.
// let emails = users.map(function (x) {
//     return x.email
// });
//
// let longestEmail = emails.reduce(function (longest, current) {
//     if (current.length > longest.length) {
//         return current;
//     } else return longest;
// }, "");
// console.log(longestEmail);

//6.
// let nameString = users.reduce((prev, current) => {
//     return prev + current.name + ", "
// }, "Your instructors are: ")
// console.log(nameString);

const names = users.reduce((names, {name}) =>
    `${names}, ${name}`, "Your instructors are:")
console.log(names);



