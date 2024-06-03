const express=require("express")
const path=require("path")
const app=express()
const staticpath=(path.join(__dirname))
app.use(express.static(staticpath,{index:"index1.html"}))
app.get("/process_get",(req,res)=>{
    const response={u:req.query.Username,p:req.query.password}
    console.log(response)
    res.send(response)
})
app.listen(8080,()=>{console.log("Listning on 8080")})
