const mongoose=require('mongoose');
const st_info=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    reg:{
        type:String,
        required:true
    },
    email:{
         type:String,
         required:true
    },
    dept:{
        type:String,
        required:true
    }
})

const student=mongoose.model("student",st_info);
module.exports=student;






//for postman 
/*{
    "name": "Ram",
    "reg": "2021BCS0001",
    "email": "2021BCS0001@sggs.ac.in",
    "dept": "CSE"
}*/