const express= require("express");
const app= express();

const path=require('path')
const mongoose = require("mongoose")

app.listen(2343,()=>{
  console.log('server is running at 2343');
})

mongoose.connect('mongodb+srv://aathsha:aathsha@cluster0.sposqme.mongodb.net/')
.then(()=>{
  console.log("DB connected")
})
.catch((err)=>{
  console.log(err)
})