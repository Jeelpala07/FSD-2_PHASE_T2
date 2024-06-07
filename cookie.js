// cookie;  npm install cookie-parser

// note : Basic operations 
//           create
//           read 
//           delete

// const cp=require("cookie-parser")
// res.cookie("name","value","expiry-date")
// console.log(req.cookies)
// res.clearCookie("cookie name")

const express=require("express")
const app=express()
const cp=require("cookie-parser")
app.use(cp())
app.get("/",(req,res)=>{
    res.cookie("FSD","Express")

    res.send(req.cookies)
})
app.get("/delete",(req,res)=>{
    res.clearCookie("FSD")
    res.send("Cookie Deleted")
})
app.listen(8000)
