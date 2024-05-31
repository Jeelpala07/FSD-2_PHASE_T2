const express = require('express');
app=express()
// express.static("folder") // open_static file such as img html etc 
// app.use(express.static("folder")) // this file opens a corresponding resource of file and use it 


const path=require("path")
const staticpath=(path.join(__dirname,"../public"))
app.use(express.static(staticpath))
app.listen(6030,()=>{})