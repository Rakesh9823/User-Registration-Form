const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {User} = require("./schema/UserSchema")

app.use(express.json())

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


app.listen(4000 , () =>{
    console.log("Server is up at port no. 4000!!")
})


