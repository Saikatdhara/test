const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/CurdDB",(err)=>{
    if(err){
        console.log('Error in database connection ' + JSON.stringify(err,undefined,2));
    }
    else{
        console.log('Connection sucessfull..');
    }
});

module.exports=mongoose;
