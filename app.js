const express=require("express")
const cors=require("cors")
const mogoose=require("mongoose")
const addrouter=require("./controller/addrouter")

const app=express()

app.use(express.json())
app.use(cors())
mogoose.connect("mongodb+srv://athul:athul2000@cluster0.ytkxfih.mongodb.net/userDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)


app.use("/api",addrouter)

app.listen(3006,()=>{
    console.log("running")
})
