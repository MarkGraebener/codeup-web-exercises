"use strict";
// import * from "keys.js"

// import {githubKey} from "./keys";

// import {githubKey} from "./keys";

function getGithubUsernames(username) {
    fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': githubKey}})
        .then(response => response.json())
        .then(responseObj => console.log(responseObj[0].created_at))
}

getGithubUsernames("markGraebener")


const wait = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

wait(1000).then(() => console.log('runs after 1 seconds'))
wait(2000).then(() => console.log('runs after 2 seconds'))






//
// await octocat.request('GET /repos/{owner}/{repo}/commits', {
//     owner: 'octocat',
//     repo: 'hello-world'
// })