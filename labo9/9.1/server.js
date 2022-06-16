const express = require("express")
const cors = require("cors")
const pool = require("./database")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
/app.use(cors({
    origin: "*"
}))

app.get("/",(req,res)=>{
    res.send("ok")
})

app.get("/test", (req, res) => {
    pool.getConnection( (err, conn) => {
        if (err) throw err

        console.log(`Connected as ${conn.id}`)

        conn.query("SELECT * FROM test", (err, rows) => {
            conn.release()
            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
                res.sendStatus(300)
            }
        })
    })
})

app.listen(3000,err=>{
    if(err) {
        console.log(err)
    } else {
        console.log("listening on port 3000")
    }
})    