const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
/app.use(cors({
    origin: "*"
}))


let todo = []
let done = []

app.post("/todo", (req, res)=> {
    
    todo.push({
        "id": req.body.id,
        "todo": req.body.todo,
    }
    )

    res.sendStatus(200).end()
})

app.get("/todo", (req, res)=> {
    todoText = ""
    for (let item of todo) {
        todoText += item.todo + '\n'
    }
    res.send(todoText)
})

app.put("/done/:id", (req, res)=>{
    for (let i=0; i < todo.length; i++) {
        if (todo[i].id == req.params.id) {
            done.push({
                "id": todo[i].id,
                "done": todo[i].todo,
            })
            todo.splice(i, 1)
        }
    }
    res.sendStatus(200).end()
})

app.get("/done", (req, res)=> {
    doneText = ""
    for (let item of done) {
        doneText += item.done + '\n'
    }
    res.send(doneText)})

app.listen(3000, err=>{
    if (err) {
        console.log(err);
    }
    console.log("listening on port 3000")
})