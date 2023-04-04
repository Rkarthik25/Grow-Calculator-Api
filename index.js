const express=require("express")
const cors=require("cors")

const app=express()
app.use(express.json())

const {connection}=require("./db")

const {userRouter}=require("./routes/userRoutes")
const { calculatorRouter } = require("./routes/calculatorRoutes")

require("dotenv").config


app.get("/",(req,res)=>{
    res.send("hello world")
})
app.use("/",userRouter)
app.use("/calculate",calculatorRouter)

app.listen(3030,async()=>{
    try{
        await connection
        console.log("db connceted to 3030")
    }
    catch(err){
        console.log(err)
    }
    console.log("on port 3000")
})