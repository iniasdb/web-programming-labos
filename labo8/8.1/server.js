const express = require("express")
const http = require("http")
const bp = require("body-parser")
const {log} = require("./middle")

const app = express()

app.use(bp.json())
app.use(bp.urlencoded({extended:true}))
app.use(log)

console.log(http.STATUS_CODES)

app.get("/", (req, res)=> {
    console.log(req.url)
    //res.status(404).end()
    res.send("<h1>Hallo</h1>")
})

app.post("/", (req, res)=>{
    console.log(req.body)
    res.send(req.body)
})

app.get("/test", (req, res)=> {
    res.send("<h1>test</h1>")
})

app.get("/old", (req, res) => {
    res.redirect(301, "/new")
})

app.get("/new", (req, res)=> {
    res.send("<h1>new</h1>")
})

app.get("/users/:userid", (req, res)=> {
    console.log(req.params)
    res.send("ok")
})

app.listen(3000, err=>{
    if (err) {
        console.log(err);
    }
    console.log("listening on port 3000")
})