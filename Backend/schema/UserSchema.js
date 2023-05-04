const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({

    name:{type:String , required:true},
    age:{type:Number , required:true},
    gender:{type:String , required:true},
    mobile:{type:Number },
    govtIdType:{type:String },
    govtId:{type:String },
    guardianDetails:{type:String },
    guardianName:{type:String},
    email:{type:String},
    emergencyNumber:{type:Number },
    address:{type:String },
    state:{type:String},
    city:{type:String },
    country:{type:String},
    pincode:{type:Number},
    occupation:{type:String },
    religion:{type:String },
    maritalStatus:{type:String },
    bloodGroup:{type:String },
    nationality:{type:String }

} , {timestamps:true});

module.exports = {User : mongoose.model("personDetails" ,UserSchema )}