var express=require('express')
 
var router=express.Router();
 
router.get('/',(req,res)=>{
    let random=Math.floor(Math.random()*100)+1;
    let data=req.query.x;
    console.log(data,random);
    res.send('Math.abs('+random+') is: '+Math.abs(random)+'\n'+'Math.acos('+random+') is: '+Math.acos(random)+'\n'+'Math.sin('+random+') is: '+Math.sin(random)+'\n'+'Math.sinh('+random+') is: '+Math.sinh(random)
    );
})
 
module.exports=router