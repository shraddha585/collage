const mongoose=require('mongoose');


const t_info=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:false
    }
})

const teacher=mongoose.model('teacher',t_info);
module.exports=teacher;