const express=require("express")
const app=express()
const session=require("express-session")
app.use(session({
    resve:true,
    saveUninitialized:true,
    secret:"heelo"
}))
app.get("/",(req,res)=>{
    if(req.session.page){
        req.session.page++
        res.send(`<h1 style="color:green">YOU VISITED PAGE ${req.session.page} TIMES </h1>`)
    }
    else{
        req.session.page=1
        res.send(`<h1 style="color:green">YOU VISITED PAGE ${req.session.page} TIMES </h1>`)
    }
})
app.listen(5050);