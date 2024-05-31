// write a express js script to display json obj [array of obj ] in table form on browser 
const express=require("express")
const app=express()
arr=[{name:"abc",age:15},
        {name:"pqr",age:12},
        {name:"efg",age:13},
        {name:"xyz",age:20}
    ]
app.get("/",(req,res)=>{
    res.set("content-type","text/html")
    var tab=("<html><head><style>table,tr,td{border:1px solid black;}</style></head><body><table>")
    for(i=0;i<arr.length;i++){
        tab+=`<tr><td>${arr[i].name}</td><td>${arr[i].age}</td></tr>`
    }
    tab+="</table></body></html>"
    res.send(tab)
})
app.listen(5000,()=>{})