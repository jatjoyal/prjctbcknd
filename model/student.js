const mongoose=require("mongoose")
//mongoose.connect("mongodb+srv://muhammedmoosa369:@joyalandmoosa@cluster0.9voi88o.mongodb.net/?retryWrites=true&w=majority")

mongoose.connect("mongodb+srv://muhammedmoosa369:123@cluster0.8mmkjh3.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{ 
    console.log("db connected");
})
.catch(err=>console.log(err));


const studentschema =new mongoose.Schema(
    {
        Addmno:Number,
        name:String,
        Age:Number,
        Course:String
    }
)
var studentmodel =mongoose.model("student",studentschema)
module.exports=studentmodel;