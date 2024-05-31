// npm config set proxy http://192.168.10.252:808  :Set proxy
// npm install express: then install EXPRESSJS


// ROUTING

// Get-Read
// post-create
// Put -update
// Delete-Delete

const express=require("express")
const app=express()
app.get("/",(req,res)=>{
    res.set("content-type","text/html")
    res.write("<h1>HELLO</h1>")
    res.write("Hello World")
    res.send()
})
app.get("/about",(req,res)=>{
    res.send("ABT PAGE")
})
app.listen(5000,()=>{
    console.log("Listing on 5k...")
})