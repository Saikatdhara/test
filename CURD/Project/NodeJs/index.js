const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const { mongoose }=require("./db.js");

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

var employeeController=require('./controller/employeeControler.js')

app.use(bodyParser.json());

app.use('/employee',employeeController)

app.listen(3000,()=> console.log("Server started as port : 3000"))