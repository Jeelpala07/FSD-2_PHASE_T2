const express = require("express")
const app = express()
app.get("/", (req, res) => {
    const std = [{
        name: "xyz",
        age: 20
    },
    {
        name: "pqr",
        age: 21
    },
    {
        name: "abc",
        age: 19
    }
    ]
    res.set("content-type","application/json")
    res.send(std) // Directly obj ne stringify kari ne print karavse
})
app.listen(5050,()=>{
    console.log("Listning on 5050")
})