const express = require("express")

const tripsRoute = require("./routes/trips.js")
const kostenRoute = require("./routes/kosten.js")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/trips", tripsRoute)
app.use("/kosten", kostenRoute)

app.listen(3000, err=>{
    if (err) {
        console.log(err);
    }
    console.log("listening on port 3000")
})