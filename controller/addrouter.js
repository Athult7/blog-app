const express=require("express")
const userModel=require("../model/usermodel")

const router=express.Router()

const bcrypt=require("bcryptjs")

const hashfunction=async(password)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(password,salt)
}

router.post("/signin",async(req,res)=>{
    let {data}={"data" :req.body}
    let password=data.pssword

    hashfunction(password).then((hashedpassword)=>{
        data.pssword=hashedpassword
        console.log(data)
        let userobj=new userModel(data)
        let result=userobj.save()
    })
    res.json({
        status:"success"
    })
})


module.exports=router