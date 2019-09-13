/*
//
*/

import API from "./getJokeAPI.js"

const createDOM = () => {
    API.getJokeAPI().then( jokeText => {
        const jokeElement = document.querySelector(".article__div__p-joke")
        jokeElement.innerHTML = ""
        jokeElement.innerHTML = jokeText.joke
    })
}

export default createDOM
