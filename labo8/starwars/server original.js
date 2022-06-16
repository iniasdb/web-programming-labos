const express = require("express")
const cors = require("cors")
const movie = require("./Movie")
const { Console } = require("console")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
/app.use(cors({
    origin: "*"
}))


let movies = []
let watched = []

app.post("/movie", (req, res)=> {
    
    newMovie = new movie.Movie(req.body.name, req.body.duration, req.body.review)

    movies.push({
        "id": req.body.id,
        "movie": newMovie,
    }
    )

    res.sendStatus(200).end()
})

app.get("/movies", (req, res)=> {
    movieText = ""
    for (let movie of movies) {
        movieText += movie.movie.getName() + '\n'
    }
    res.send(movieText)
})

app.put("/watched/:id", (req, res)=>{
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
})

app.get("/watched", (req, res)=> {
    movieText = ""
    for (let movie of watched) {
        movieText += movie.movie.getName() + '\n'
    }
    res.send(movieText)})

app.listen(3000, err=>{
    if (err) {
        console.log(err);
    }
    console.log("listening on port 3000")
})