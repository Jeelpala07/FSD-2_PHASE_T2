// write a script to meet following requirements 
// 1].create indexedDB.html page and open it on lh 
// 2]. After clicking submit button it should jump to save session page store uname in session 
// 3]. After savibg session redirect to fetch session page and read seession value put a logout link button here 
// 4]. Destroy the session on this page and redirect to index.html

const express=require("express")
const app=express()
const session=require("express-session")
// const staticpath=(path.join(__dirname))
app.use(session({
    resvae:true,
    saveUninitialized:true,
    secret:"Hello"
}))
app.get("/",(req,res,next)=>{
    res.sendFile(__dirname+"/T_12.html")
})
app.get("/action",(req,res)=>{
    var uname=req.query.uname
    var pwd=req.query.pwd
    req.session.uname=uname
    req.session.pwd=pwd
    res.redirect("fetchsession")
})
app.get("/fetchsession",(req,res)=>{
    res.write("<h1>Welcome "+req.session.uname +" </h1>")
    res.write("<a href='/deleteSession'> logout </a>")
    res.send()
})
app.get("/deleteSession",(req,res)=>{
    req.session.destroy();
    res.redirect("/")
    res.send()
})
app.listen(6006)