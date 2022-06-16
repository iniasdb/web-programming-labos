const express = require("express")
const movie = require("../Movie")
const moviesModule = require("./movies.js")
const movies = moviesModule.list


let watched = [];
const router = express.Router();

router.route("/:id").put((req, res)=> {
    for (let i=0; i < movies.length; i++) {
        if (movies[i].id == req.params.id) {
            watched.push({
                "id": movies[i].id,
                "movie": movies[i].movie,
            })
            movies.splice(i, 1)
        }
    }
    res.sendStatus(200).end()
}).get((req, res)=> {
    movieText = ""
    for (let movie of watched) {
        movieText += movie.movie.getName() + '\n'
    }
    res.send(movieText)
})

module.exports = {
    router: router,
    list: watched
}
