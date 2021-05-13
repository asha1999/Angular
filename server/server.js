const express=require("express");
const bodyparser=require("body-parser");
const cors=require("cors");
 
const app=express();

app.use(bodyparser.json());

app.use(cors());
app.get('/',function(req,res){
    res.send("Hello from server");
})
 app.post('/enroll',function(req,res){
     console.log(req.body);
     res.status(200).send({"message":"data received"});
 })
app.listen(5000);