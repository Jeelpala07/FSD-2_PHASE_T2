
const express=require("express")
const app=express()

app.get("/hello",(req,res,next)=>{
    res.write("Request date "+ new Date())
    next();
})

app.get("/hello",(req,res,next)=>{
    res.write("Hello Student ")
    next();
})
app.get("/hello",(req,res)=>{
    res.send()
})
app.listen(8070,()=>{console.log("Listning on 8070")})