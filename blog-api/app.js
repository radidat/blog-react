const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose');
const dotenv = require('dotenv'); 
const PORT = 5000; 
const authRouter = require('./router/authRoute');
const userRouter = require('./router/userRoute');
const postRouter = require('./router/postRoute');
const categoryRoute = require("./router/categoryRoute");
const path  = require('path')    
const multer = require('multer');
const cors = require('cors'); 
dotenv.config();

app.use(cors({origin:'http://localhost:3000'}));
app.use(express.json())
app.use('/images', express.static(path.join(__dirname+'/images')))

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('you are connected to mongodb with sucess'))
.catch((err)=>console.log(err))

/*const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
  }; 

const storage = multer.diskStorage({
 destination:(req, file, cb)=>{ 
     
    cb(null, 'images')
 }, 
 filename: (req, file, cb)=>{
    const name  = file.originalname.split('.')[0];    
    const uniqSuffix = Date.now() + '-'+ Math.floor(Math.random() * 1E9); 
    const extension = MIME_TYPES[file.mimetype]; 
    cb(null, name +'-'+uniqSuffix  + '.'+ extension );
 }
})

const upload = multer({storage: storage});
const uploadMulptiple = upload.fields[{name:'photoProfil', maxCount:2}]
app.post('/api/upload', uploadMulptiple, (req, res)=>{ 


    console.log(req.files)
    upload(req, res, function(err){ 
        if(err instanceof multer.MulterError){
            res.status(500).json(err);
        }else{ 
            res.status(500).json(err);
        }
    })

    res.status(200).json('file uploaded');

})*/


app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/posts', postRouter);
app.use("/api/categories", categoryRoute);

app.listen(PORT, ()=>{
    console.log(` server listing on ${PORT}`)
})