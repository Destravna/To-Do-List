const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var items = [];

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let today = new Date();
let day_n = today.getDay();
let tdo;
if(day_n == 6 || day_n == 0){
    tdo = "Have fun and rest";
}
else{
    tdo = "Work :`< \n hope you survive one more day <br/> so u can see sunday \n holidays are coming my boi";
}
let day = weekday[day_n];


app.get("/", (req, res)=>{
    res.render('list.ejs', {t_day : day,   t_nt : items});
})

app.post("/",(req, res)=>{
    //let task = req.body.nt;
    //7console.log(task);
    if(req.body.nt.length > 0){
        items.push(req.body.nt);
        res.redirect("/");
    }
    else{
        res.send("Task Name not mentioned");
    }
})


app.listen(3000, ()=>{
    console.log("Server started at port 3000");
})