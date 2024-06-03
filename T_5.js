// Write a express js script to print msg in next line splitting by . and use get method to submit the data html file contains form of text area for the msg and submit button .

const express=require("express")
const app=express()
const path=require("path")
const staticpath=(path.join(__dirname))
app.use(express.static(staticpath,{index:"T_5.html"}))
app.get("/procces_get",(req,res)=>{
    const r=req.query.txta
    splited=r.split(".")
    console.log(splited)
    res.send(splited)
})
app.listen(4000,()=>{console.log("Listning on 4k")})