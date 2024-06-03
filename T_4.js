// Sending a single file named task.html on a route with use of send file function 

//   Sending img on website
const express=require("express")
const app=express()
const path=require("path")
app.get("/file",(req,res)=>{
    res.sendFile(path.join(__dirname,"i1.jpg"));
})
app.listen(8080,()=>{console.log("Listning on 8080")})
