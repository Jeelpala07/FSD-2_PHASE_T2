// u have been asigned to devlope a user feedback form for a website using express js and cookies implement the following requirements 
// 1]. Create a form with the fields-- name , email ,msg ,rating [radio -bad,average,good,verygood,excellent], when the user submits the form store theire feedback information like name ,. email ,msg and rating in a cookie name feedback that expires in 10 secds 
// 2]. Dsplay a confirmation message to the user after succesfully submiting the formand create a link to diaplay the feedback deatails stored in feedback cookie when the user click to the link retrive the feedback info from the cookie and display it on the page also include a link on the feedback details page to log out when user clicks the link user redirected to home page  
// NOTE: Make simple .html file app.js file and use get method in express Js 


const express=require("express")
const app=express()
const cp=require("cookie-parser")
app.use(cp())
app.get("/",(req,res,next)=>{
    res.sendFile(__dirname+"/T_11.html")
})
app.get("/action",(req,res)=>{
    res.set("content-type","text/html")
    res.write("hello")

    if(req.query.submit==="Submit"){
        res.cookie("Name",req.query.name,{expires:new Date(Date.now()+10000)})
        res.cookie("Email",req.query.email,{expires:new Date(Date.now()+10000)})
        res.cookie("MSG",req.query.msg,{expires:new Date(Date.now()+10000)})
        res.cookie("Rating",req.query.r.value,{expires:new Date(Date.now()+10000)})

        res.send("<h2>Thank you for sending feedback</h2> <a href='/feedback'>View Feedback</a>")
       
    }
    else{
        res.send("Invalid")
    }

    
})
app.get("/feedback",(req,res)=>{
    res.write("NAME :" + req.cookies.name)
    res.write("Email :" + req.cookies.email)
    res.write("MSG :" + req.cookies.msg)
    res.write("Rating :" + req.cookies.r.value)
    res.send()
})

app.listen(4080,()=>{
    console.log("Listning on 4080")
})


// const express = require("express");
// const app = express();
// const cookieParser = require("cookie-parser");
// app.use(cookieParser());

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/T_11.html");
// });

// app.get("/action", (req, res) => {
//     if (req.query.submit === "Submit") {
//         res.cookie("Name", req.query.name, { expires: new Date(Date.now() + 10000) });
//         res.cookie("Email", req.query.email, { expires: new Date(Date.now() + 10000) });
//         res.cookie("MSG", req.query.msg, { expires: new Date(Date.now() + 10000) });
//         res.cookie("Rating", req.query.r, { expires: new Date(Date.now() + 10000) });

//         res.send("<h2>Thank you for sending feedback</h2><a href='/feedback'>View Feedback</a>");
//     } else {
//         res.send("Invalid");
//     }
// });

// app.get("/feedback", (req, res) => {
//     const name = req.cookies.Name;
//     const email = req.cookies.Email;
//     const msg = req.cookies.MSG;
//     const rating = req.cookies.Rating;

//     res.write("NAME: " + name + "<br>");
//     res.write("Email: " + email + "<br>");
//     res.write("MSG: " + msg + "<br>");
//     res.write("Rating: " + rating + "<br>");
//     res.write("<a href='/'>Logout</a>");
//     res.end();
// });

// app.listen(4080, () => {
//     console.log("Listening on port 4080");
// });
