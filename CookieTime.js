
const express=require("express")
const app=express()
const cp=require("cookie-parser")
app.use(cp())
app.get("/",(req,res)=>{
    res.cookie("cookie","Express1",{expires:new Date(Date.now()+10000)})
    res.send("Cookie sent")
})

app.listen(8080,()=>{
    console.log("Listning on 8080")
})
