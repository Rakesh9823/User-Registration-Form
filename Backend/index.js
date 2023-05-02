const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {User} = require("./schema/UserSchema")
const cors =  require("cors")

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Registration" , {useNewUrlParser:true, useUnifiedTopology:true})
.then(() =>{
    console.log("Connected");
})

app.post("/user" , async (req , res) =>{
    try{
        let data = req.body
        let newUser = await User.create(data)
        res.status(201).json({
            status:"Success",
            newUser
        })
    }catch(e){
        res.status(401).json({
            status:"Failed",
            message:e.message
        })
    }
})

app.get("/user" , async (req , res) =>{
    try{
        let result = await User.find()
        res.status(201).json({
            status:"Success",
            result
        })
    }catch(e){
        res.status(401).json({
            status:"Failed",
            message:e.message
        })
    }
})


app.listen(8000 , () =>{
    console.log("Server is up at port no. 3001!!")
})


