// Write a express js script to perform task as asked below 
// 1].create 1html file which contains 2 number types input fields , 1 drop down which contains options like select , adiition ,sub ,mul, div and 1 submit button 
//  [2].the inp field must contain the value greater than 0 else it will give a msg pls enter the valid number also user must select any of the formula from the dropdown else give a msg u have not select any formula note msg will be displayd on /calculator page
//  [3] if 1 formula is selected and numbers are entered then respective calculation will be performed on the page /calculator 
// [4]Use get method to request data 

const express=require("express")
const app=express()
var path=require("path")
const staticpath=(path.join(__dirname))
app.use(express.static(staticpath,{index:"T_6.html"}))
app.get("/calc",(req,res)=>{
    n1=parseInt(req.query.num1)
    n2=parseInt(req.query.num2)
    if(n1>0 && n2>0){
        if(req.query.func=="add"){
            res.write(`Required Output ADD : ${n1+n2}`)
        }
        else if(req.query.func=="sub"){
            res.write(`Required Output SUB : ${n1-n2}`)
        }
        else if(req.query.func=="mul"){
            res.write(`Required Output MUL : ${n1*n2}`)
        }
        else if(req.query.func=="div"){
            res.write(`Required Output DIV : ${n1/n2}`)
        }
        else{
            res.write("Pls select any one operator")
        }
    }
    else{
        res.write("Pls enter valid input")
    }
    res.send()
})
app.listen(4040,()=>{console.log("Listning on 4k")})