const express = require("express")
const {connection} = require("./config/db")
const {userRouter} = require("./routes/user.routes")
const redisClient = require("./helpers/redis")
const logger = require("./middlewares/logger")
require("dotenv").config()


const app = express()
app.use(express.json())


const PORT = process.env.PORT || 4500

app.get("/",async(req,res) => {
    res.send(await redisClient.get("name"))
})

app.use("/user",userRouter)

app.listen(PORT,async()=>{
    try{
        await connection
        console.log("server is connected to mongodb at port"+PORT)
        logger.log("info","Database has been connected")
    }
    catch(err){
        console.log(err)
        logger.log("error","Database has been failed")
    }
    console.log("server is listening")
})