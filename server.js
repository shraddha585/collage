const express=require('express');
const app=express();
const db=require('./db');
const st_routes=require('./student_routes');
const te_routes=require('./teacher_routes');
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("welcome to our collage")
})
app.use('/student',st_routes);

app.use('/teacher',te_routes);


app.listen(3030,()=>{
    console.log("server is listen on port 3030");
})