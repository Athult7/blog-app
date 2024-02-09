const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:String,
    age:String,
    phonenumber:String,
    address:String,
    pincode:String,
    email:String,
    pssword:String

    
})

module.exports=mongoose.model("user",userSchema)