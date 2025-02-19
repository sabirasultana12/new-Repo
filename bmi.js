require("dotenv").config();
const express=require("express");
const path=require("path");
const bodyparser=require("body-parser")

const app=express();
const PORT=process.env.PORT || 4000

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,"public")));

app.get("/bmi",(req,res)=>{ // this /bmi nam ecan be anything this is a new path
    res.render("home")

});

app.use(bodyparser.urlencoded({extended:true}));

app.post("/calculate",(req,res)=>{
    const H=req.body.height
    const W=req.body.weight
    const newHeight=H/100;
    const bmi_result=W/(newHeight*newHeight);
    res.send(`<h1>Your BMI is: ${bmi_result.toFixed(2)}
        <p><a href="/bmi">GO BACK</a></p>`)

});

app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`This server is running on PORT:${PORT}`) 
})