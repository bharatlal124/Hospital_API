//require mongoose
const mongoose=require('mongoose'); 
//Patient Schema      
const patientSchema=new mongoose.Schema({
    name:{                                      
        type:String,
        required:true
    },
    phone:{                                   
        type:Number,
        required:true,
        unique:true
    },
    reports:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'report',
    }]
},
{
    timestamps:true                            
});

// exports patient
const Patient=mongoose.model('Patient',patientSchema);
module.exports=Patient;