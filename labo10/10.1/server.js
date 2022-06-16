const express = require("express")
const bp = require("body-parser")

const app = express()
app.use(bp.json())
app.use(bp.urlencoded({extended:true}))


let trips = []

app.post("/trips", (req, res)=> {
    
    trips.push({
        "id": req.body.id,
        "naam": req.body.bestemming,
        "kosten":[]
    }
    )

    res.sendStatus(200).end()
})

app.post("/trips/:tripid", (req, res)=> {
    for (let trip of trips) {
        if (trip.id == req.params.tripid) {
            trip.kosten.push(req.body.kost)
        }
    }
    res.sendStatus(200).end()
})

app.get("/spelers", (req, res)=> {
    console.log("ja")
    res.sendStatus(200)
})

app.get("/trips/:tripid", (req, res)=> {
    total = 0
    for (let trip of trips) {
        if (trip.id == req.params.tripid) {
            for (let kost of trip.kosten) {
                total += kost
            }    
        }
    }
    res.send("total for trip " + req.params.tripid + ": €" + total)
})

app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/www/index.html")
})

app.listen(3000, err=>{
    if (err) {
        console.log(err);
    }
    console.log("listening on port 3000")
})