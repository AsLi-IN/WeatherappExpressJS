const express = require("express")
const app=express();
const path=require("path")
const hbs=require("hbs")
//process.env.PORT gives default port if its not in use
let port=process.env.PORT || 9090 ;

//dynamic (hbs)
template_path=path.join(__dirname,"../templates/views")

app.set("view engine","hbs");
app.set("views",template_path);

//partials patth
partials_path=path.join(__dirname,"../templates/partials")

hbs.registerPartials(partials_path)

//public static path

 staticpath=path.join(__dirname,"../public")
app.use(express.static(staticpath))


//routing
app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/weather",(req,res)=>{
    res.render("weather")
})

app.get("*",(req,res)=>{
    res.render("404error",{
        errormsg:"We are sorry for the incovience caused."
    })
})

app.listen(port,()=>{console.log("listening to port ... "+port);})