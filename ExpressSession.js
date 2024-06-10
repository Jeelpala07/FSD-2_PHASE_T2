// npm install express-session
const session=require("express-session")
const express=require("express")
const app=express()
app.use(
    session({
        secrete:"LJ",
        resave:false, // do not save if updated
        saveUninitialized:false//do not create if something is not stored 
    })
)

