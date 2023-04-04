const { calculatorModel } = require("../model/calculator.model")
const express=require("express")

const calculatorRouter=express.Router()

calculatorRouter.post("/calculate",async(req,res)=>{
    try{
        const {AnnualInstalmentAmount,AnnualInterestRate,NumberofYears}=req.body
        const TotalInvesmentAmount=AnnualInstalmentAmount*NumberofYears
        const RateofInterest=AnnualInterestRate/100
        const TotalMaturityValue=AnnualInstalmentAmount*((Math.pow(1+RateofInterest,NumberofYears)-1)/RateofInterest)
        const TotalInterestGained=TotalMaturityValue-TotalInvesmentAmount
        const calculation=new calculatorModel({
            AnnualInstalmentAmount,
            AnnualInterestRate,
            NumberofYears,
            TotalInvesmentAmount,
            TotalInterestGained,TotalMaturityValue
        })
        await calculation.save()
        res.json(calculation)

    }
    catch(err){
        res.status(500).json({"msg":"Server Error"})

    }
})
module.exports={calculatorRouter}