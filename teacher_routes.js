const express=require('express');
const router=express.Router();

const teacher=require('./teacher');

router.post('/',async(req,res)=>{
    try{
    const data=req.body;
    const new_t=new teacher(data);
    const response=await new_t.save();
    console.log("teacher data has been saved");
    res.status(200).json(response);
    }catch(err){
        console.log("error has occured");
        res.status(500).json(err);
    }
});

router.get('/',async(req,res)=>{
    try{
        const data= await teacher.find();
        console.log("data has been fetch");
        res.status(200).json(data);
    }catch(err){
        console.log("error has occured");
        res.status(500).json(err);
    }
});

router.get('/:sub',async(req,res)=>{
    try{
        const subject=req.params.sub;
        const data=await teacher.findOne({subject});
        res.status(200).json(data);
    }catch(err){
        console.log("error has occured");
        res.status(500).json(err);
    }
})

module.exports=router;