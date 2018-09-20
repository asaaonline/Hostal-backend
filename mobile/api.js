const express=require('express');
const router=express.Router();
const connect=require('../connection/connect')
var bcrypt = require('bcrypt');
const saltRounds = 10;


router.post('/login',function(req,resp){

    console.log('post login reqvest mobile');
    console.log(req.body);
    const name=req.body.name;
    const password=req.body.password;
    if(name!==null && password!==null){
   
connect.query('select password from login where name=?',[name],(error,rows,fields)=>{
    
        console.log(rows);
      
            if(!!error){
                console.log("error in the code");
            }else{
                 console.log("successfull");
                 var compair;
                 console.log(rows.length);
                 if(rows.length!==0){
                 bcrypt.compare(password,rows[0].password, function(err, res) {
                   compair=res;
                   console.log(res);
                    if(compair){
                        resp.send({
                            type:'post',
                            status:'correct',
                            name:req.body.name
                        });
                    }else{
                        resp.send({
                            type:'post',
                            status:'false'
                            
                        });
                    }
                   
                   
                });
            }
                          
            }
    });
    }

});

router.post('/sinup',function(req,res){
    console.log(req.body);

    const name=req.body.name;
    const password=req.body.password;
    bcrypt.hash(password, saltRounds, function(err, hash) {
        // Store hash in your password DB.
    
    connect.query('insert into login(name,password) value(?,?)',[name,hash],(error,rows,fields)=>{
            if(!!error){
                console.log(error);
            }else{
                console.log("succsess");
            }
    })
   
});
    res.send({
        type:'post',
        name:req.body.name
    })
});

module.exports=router;