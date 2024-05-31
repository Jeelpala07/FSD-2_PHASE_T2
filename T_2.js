// write an express js script to define one json array of 3 obj having members name and age name must be sorted according to a if user request sorted req url then all names should be printed according to ascending order of age
const express = require("express")
const app = express()
arr=[{name:"abc",age:15},
        {name:"pqr",age:12},
        {name:"efg",age:13},
        {name:"xyz",age:20}
    ]
app.get("/", (req, res) => {
    res.set("content-type","application/json")
    
    res.send(arr)
    
})
app.get("/sorted_age", (req, res) => {
    res.set("content-type","application/json")
    s_arr=arr.sort((a, b) => (a.age - b.age));
    res.send(s_arr)
})
app.get("/sorted_name", (req, res) => {
    res.set("content-type","application/json")
    n_arr=arr.sort((a,b)=>(a.name > b.name ? 1 : -1))
    res.send(n_arr)
})
app.listen(5020)