const express = require("express");
const app = express();
const cp = require("cookie-parser");
app.use(cp());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/T_11.html");
});

app.get("/action", (req, res) => {
    res.set("content-type", "text/html");
    
    if (req.query.submit === "Submit") {
        res.cookie("Name", req.query.name, { expires: new Date(Date.now() + 10000) });
        res.cookie("Email", req.query.email, { expires: new Date(Date.now() + 10000) });
        res.cookie("MSG", req.query.msg, { expires: new Date(Date.now() + 10000) });
        res.cookie("Rating", req.query.r, { expires: new Date(Date.now() + 10000) });

        res.write("<h2>Thank you for sending feedback</h2>");
        res.write("<a href='/feedback'>View Feedback</a>");
        res.end();
    } else {
        res.send("Form submission failed.");
    }
});

app.get("/feedback", (req, res) => {
    const name = req.cookies.Name || "";
    const email = req.cookies.Email || "";
    const msg = req.cookies.MSG || "";
    const rating = req.cookies.Rating || "";

    res.write("NAME: " + name + "<br>");
    res.write("Email: " + email + "<br>");
    res.write("MSG: " + msg + "<br>");
    res.write("Rating: " + rating + "<br>");
    res.end();
});

app.listen(8080, () => {
    console.log("Listening on 8080");
});
