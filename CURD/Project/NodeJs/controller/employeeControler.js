const express=require('express');
var router=express.Router();
var ObjectId=require('mongoose').Types.ObjectId;

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE')
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
  });


var { Employee }= require('../model/employee.js')
router.get('/',(req,res)=>{

    Employee.find((err,data)=>{
        if(!err){
            res.send(data);
        }
        else{
            res.send("You have an error in employee controler:"+JSON.stringify(err,undefined,2));
        }
    })

})

router.get('/:id',(req,res)=>{

    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No record with given id : ${req.params.id}`)
    }
    Employee.findById(req.params.id,(err,data)=>{
        if(!err){
            res.send(data)
        }
        else{
            console.log('Error in retriving Employee :'+JSON.stringify(err,undefined,2))
        }
    });
})

router.post('/',(req,res)=>{

    var employee = new Employee({
        name:req.body.name,
        position:req.body.position,
        office: req.body.office,
        salary : req.body.salary
    });

    employee.save((err,data)=>{
        if(!err){
            res.send(data)
        }
        else{
            res.send('Error in database connection ' + JSON.stringify(err,undefined,2));
        }
    })
})

router.put('/:id',(req,res)=>{

    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No record with given id : ${req.params.id}`)
    }

    var emp={
        name:req.body.name,
        position:req.body.position,
        office: req.body.office,
        salary : req.body.salary
    }
    Employee.findByIdAndUpdate(req.params.id,{ $set:emp},(err,data)=>{
        if(!err){
            res.send(data)
        }
        else
        {
            console.log('Error in retriving Employee :'+JSON.stringify(err,undefined,2))
        }
    })
})

router.delete('/:id',(req,res)=>{

    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send("No record with given id "+ req.params.id)
    }

    Employee.findByIdAndRemove(req.params.id,(err,data)=>{

        if(!err){
            res.send(data)
        }
        else{
            console.log('Error in retriving Employee :'+JSON.stringify(err,undefined,2))
        }

    })
})

module.exports=router