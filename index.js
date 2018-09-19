const express=require('express');
const routes=require('./mobile/api');
const bodyParser=require('body-parser');


//set up express app

const app=express();


app.use(bodyParser.json());

app.use('/mobile',routes);
//initialize routes


app.get('/',function(req,res){
    console.log('get reqvest');
  
});

//listen for reqvest

app.listen(process.env.port||4000,function(){
console.log("now lissting for reqvest");
});