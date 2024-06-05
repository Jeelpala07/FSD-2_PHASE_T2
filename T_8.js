// Procces a form using post method form has fields like username ,pwd ,confirm password ,gender ,submit,reset button After entering all fields if pwd and confirm pass match then form should be procced and all relevent and selected fields value should be printed otherwise by printing warning msg in red color it should terminate .

const express=require("express")
const app=express()
const path=require("path")
const staticpath=path.join(__dirname)

const bodyparser=require("body-parser")
const url=bodyparser.urlencoded({extended:false}) 
app.use(express.static(staticpath,{index:"T_8.html"}))
app.post("/action",url,(req,res)=>{
    res.set("content-type","text/html")
    // if (req.body.Username ==null || req.body.pwd==null || req.body.Cpwd==null  || req.body.gender.value==null){
    //     res.write("Pls enrter Empty value")
    // }
    if (req.body.pwd!=req.body.Cpwd){
        res.write("<h2 style='color:red;' > PWD doesnt match</h2>")
    }
    else{
        res.write(`UNAME : ${req.body.Username} <br>`)
        res.write(`PWD : ${req.body.pwd} <br>`)
        res.write(`GENDER :${req.body.gender.value} <br>`)
    }
    res.send()
})
app.listen(8080,()=>{console.log("Listning on 8080")})