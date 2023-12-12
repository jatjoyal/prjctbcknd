const express = require("express");
const cors =require("cors");
const multer=require('multer');
const storage=multer.memoryStorage();
const upload=multer({storage:storage});

const app = new express();
 const studentmodel =require('./model/student')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());

app.get('/',(request,response)=>{
    response.send("hi")
})

// app.post('/new',(request,response)=>{
//     console.log(request.body)
//     new studentmodel(request.body).save();
//     response.send("record saved")
// })


app.post('/new',upload.single('image1'),async(request,response)=>{
    try{

        const{Addmno,name,Age,Course}=request.body
        const newdata=new studentmodel({
            Addmno,name,Age,Course,
            image1:{
                data:request.file.buffer,
                contentType:request.file.mimetype,
            }  
        })
        await newdata.save();
        response.status(200).json({message:'Record Saved'});
    }
    catch(error)
    {
        response.status(500).json({error:'INTERNAL SERVER ERROR'});
    }
})

app.get('/view',async(request,response)=>{
    var data = await studentmodel.find();
    response.send(data)
})

app.put('/edit/:id',async(request,response)=>{
    let id = request.params.id;
    await studentmodel.findByIdAndUpdate(id,request.body)
    response.send("Data Updated")
})

app.listen(4000,(request,response)=>{
    console.log("port is running in 3005")
})