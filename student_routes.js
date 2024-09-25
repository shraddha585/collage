const express=require('express');
const router=express.Router();

const student=require('./student');
router.post('/',async(req,res)=>{
 try{
   const data=req.body;
   const new_St=new student(data);
   const response=await new_St.save();
   console.log("data has been saved");
   res.status(200).json(response);
 }catch(err){
    console.log("error has occured");
    res.status(500).json(err);
 }
})

router.get('/',async(req,res)=>{
    try{
    const data=await student.find();
    res.status(200).json(data);
    console.log("data has been fetch");
    }catch(err){
        console.log("error has occured");
        res.status(500).json(err);
    }
});

router.get('/cse',async(req,res)=>{
  try{
   const data=await student.findOne({dept:'CSE'},{dept:'cse'});
   res.status(200).json(data);
  }catch(err){
    console.log("error has occured");
    res.status(500).json(err);
  }
})

router.get('/:reg',async(req,res)=>{
  try{
  const reg=req.params.reg;
  const data=await student.findOne({reg});
  if(data){
  res.status(200).json(data);
  }else{
    console.log("student not found please enter correct reg number");
  }
  }catch(err){
    console.log("error has occured");
    res.status(500).json(err);
  }
})

router.put('/:id',async(req,res)=>{
  try{
  const id=req.params.id();
  const st=req.body;
  const response= await student.findByIdAndUpdate(id,st,{
       new:true,
       runValidators:true
  })
  if(!response){
    res.status(404).json({error:"Person not found"});
  }else{
  res.status(200).json(response);
  }
  }catch(err){
    res.status(500).json(err);
  }
})

router.delete('/:id',async(req,res)=>{
  try{
  const id=req.params.id;
  const response=await student.findByIdAndDelete(id);
  if(response){
    res.status(404).json({error:"Person not found"});
  }else{
    res.status(200).json(response);
  }
}catch(err){
   res.status(500).json(err);
}
})

module.exports=router;