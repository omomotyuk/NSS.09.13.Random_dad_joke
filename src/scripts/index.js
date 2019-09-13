/*
//
*/

import createDOM from "./createDOM.js"

createDOM()

const newJoke = document.querySelector( "#article__button" )

newJoke.addEventListener( "click", (event) => {
    createDOM()
})
