const mongoose=require("mongoose")
const calculatorSchema=mongoose.Schema({
    AnnualInstalmentAmount:{
        type:Number,
        required:true
    },
    AnnualInterestRate:{
        type:Number,
        required:true
    },
    NumberofYears:{
        type:Number,
        required:true
    },
    TotalInvesmentAmount:{
        type:Number
    },
    TotalInterestGained:{
        type:Number
    },
    TotalMaturityValue:{
        type:Number
    }

});

const calculatorModel=mongoose.model("Calculator",calculatorSchema)
module.exports={calculatorModel}