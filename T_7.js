// Write a express js script to load an html file having username and pwd also Submit button on clicking submit button it should jump on / check page using post method if username is admin then print msg welcome Admin if not then msg-in red color pls login with admin 

const express=require("express")
const app=express()
const path=require("path")
const bodyparser=require("body-parser")
const staticpath=path.join(__dirname)
app.use(express.static(staticpath,{index:"T_7.html"}))
const url=bodyparser.urlencoded({extended:false}) 

app.post("/check",url,(req,res)=>{
    if(req.body.username=="admin"){
        res.write("<h1>WELCOME ADMIN</h1>")
    }
    else{
        res.write("<h1 style='color:red'>YOU are not welcomed here </h1>")
    }
    res.send()
})
app.listen(8080,()=>{console.log("Listning on 8080")})