const express = require("express")
const cors = require("cors")

const moviesModule = require("./routes/movies.js")
const moviesRoute = moviesModule.router
const watchedModule = require("./routes/watched.js")
const watchedRoute = watchedModule.router

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin: "*"
}))

app.use("/movies", moviesRoute)
app.use("/watched", watchedRoute)

app.listen(3000, err=>{
    if (err) {
        console.log(err);
    }
    console.log("listening on port 3000")
})