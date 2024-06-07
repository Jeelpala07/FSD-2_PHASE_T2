// Write a script to create a login form on index.html file after clicking submit button it should jump to next page and value of user name should be stored inside cookie perform the task using get method observe and check inside  browser that a cookie is stored perfectly or not .

const express=require("express")
const app=express()
const cp=require("cookie-parser")
const path=require("path")
const staticpath=path.join(__dirname)
app.use(express.static(staticpath,{index:"T_10.html"}))

app.get("/action",(req,res,next)=>{
    res.cookie(req.query.uname,req.query.pwd)
    res.send("cookie sent")
})
app.listen(7070,()=>{
    console.log("Listning on 7070")
})