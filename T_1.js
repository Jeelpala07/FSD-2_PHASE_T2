// create a web page using Express js which has hompage display hello home page in big and blue color font student page shows welcome to student page and abt page shows abut us in red color and italic font 
// Note: Render respnonse and routing concepts 
const express = require('express');

app=express()
app.get("/homepage",(req,res)=>{
    res.set("content-type","text/html")
    res.send("<h1 style='color:blue'>Hello Home Page</h1>")
})
app.get("/about",(req,res)=>{
    res.set("content-type","text/html")
    res.send("<i style='color:red'>This is About Page</i>")
})
app.get("/Student",(req,res)=>{
    res.set("content-type","text/html")
    res.send("This is Student page")
})
app.listen(6060,()=>{
    console.log("Listening on 6k")
})