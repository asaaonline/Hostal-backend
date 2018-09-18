const express=require('express');
const router=express.Router();

router.get('/login/:id',function(req,res){
console.los("mobile login reqvested");
});

module.exports=router;