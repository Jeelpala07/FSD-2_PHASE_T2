// install MIddleware
// npm install body-parser
// if error set proxy :
// npm config set proxy http://192.168.10.252:808

// body-parser => parse the incoming request 
// also encode the query string data like json ,form/data etc

// Syntax= 

// const bodyparser=require("body-parser")
// const url=bodyparser.urlencoded({extended:false})  // default true lahiye to nested form ma obj return karse 
// False jaldi value return karse json obj

const express=require("express")
const app=express()
const path=require("path")
const bodyparser=require("body-parser")
const staticpath=path.join(__dirname)
app.use(express.static(staticpath,{index:"PostMethod.html"}))
const url=bodyparser.urlencoded({extended:false}) 
app.post("/action",url,(req,res)=>{
    res.write(`<h1>${ req.body.username} is uname </h1>`)
    res.write(`<h1>${ req.body.pwd} is pwd </h1>`)
    res.send()````````````````````````````````````````````
})
app.listen(8080,()=>{console.log("Listning on 8080")})