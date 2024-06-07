// Write a express js script to perform following task 
// 1].Create 1 html file which contains 1 text field for name , email id and chat box for subscription html file will be load on home page email id and name field are required field on login page welcome user and email id data should be printed
// 2] If User checl the subscription then thanks for the subscription will be printed and log out print will be displayed under the msg if user clicks log out link he or she will be redirected to home page
// 3] If user has not opt for subs then you can subscribe to get daily updates msg will be printed and subs link will be displayed uneder the msg if user clicks subs link then he / she will be redirected to subs page in this page thank u fo r the visit msg will be printed and logout link will be displayed under the msg if user clicks logout link then he or she will be redirected to the home page 

// NOTE: USE concept of the middle ware and any of http method get/post 


const express=require("express")
const app=express()
const path=require("path")
const staticpath=(path.join(__dirname))
app.use(express.static(staticpath,{index:"T_9.html"}))
app.get("/action",(req,res,next)=>{
    res.write(`<h1> Your Name : ${req.query.name}`)
    res.write(`<h1> Your Email : ${req.query.email}`)
    next()
})
app.get("/action",(req,res,next)=>{
    
    if(req.query.sub=="on"){
        res.write(`<h2>Thank You for subscription </h2> <a href='/'>Logout</a>`)
    }
    else{
        res.write(`<h2>You can get daily update </h2> <a href='/subs'>subs</a>`)
    }
    next()
})
app.get('/subs',(req,res)=>{
    res.set("content-type","text/html")
    res.write("<h3>Thanks For a visit</h3> <a href='/'>Logout</a>")
    res.send()
})
app.listen(4050,()=>{console.log("Listning on 4050")});




















// app.get("/action",(req,res,next)=>{
//     if(req.body.sub!="on"){
//         res.write(`Welcome to ${req.body.name} <br> Your Email is ${req.body.email} <br> You can get daily update <br>  <a href='/'>SUBS</a>`)
//         next()
//     }
   
// })
// app.get("/action",(req,res,next)=>{
//     if(req.body.sub=="on"){
//         res.write(`Welcome to ${req.body.name} <br> Your Email is ${req.body.email} <br> Thank You for Subs <br>  <a href='/'>logout</a>`)
//     }
//     res.send()
// })

// app.listen(7000)