const express=require('express');
const router=express.Router();
const connect=require('../connection/connect')

router.post('/login',function(req,res){
    console.log('post login reqvest mobile');
connect.query("select * from login",(error,rows,fields)=>{
        console.log(error);
        console.log(rows);
      
            if(error){
                console.log("error in the code");
            }else{
                 console.log("successfull");
               
                 res.send({
                     type:'GET',
                    name:'asela' 
                 });               
            }
    });
});

router.post('/sinup',function(req,res){
    console.log(req.body);
    res.send({
        type:'post',
        name:req.body.name
    })
});

module.exports=router;