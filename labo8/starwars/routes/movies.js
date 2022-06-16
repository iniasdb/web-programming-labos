const express = require("express")
const movie = require("../Movie")

const router = express.Router();

let movies = []

router
  .route("/")
  .post((req, res)=>{
    newMovie = new movie.Movie(req.body.name, req.body.duration, req.body.review)

    movies.push({
        "id": req.body.id,
        "movie": newMovie,
    }
    )

    res.sendStatus(200).end()
  })
  .get((req, res)=>{
    res.json(movies)
});

module.exports = {
    router: router,
    list: movies
}