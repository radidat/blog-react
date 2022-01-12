const router = require('express').Router();
const User = require('../model/User.js'); 
const bcrypt = require('bcrypt'); 

const multer = require('multer');

const saltRounds = 10;

router.post('/register', async(req, res)=>{


    try{

        let { firstName, lastName, email, password,photoProfil }= req.body; 
            if(password){ 
                const salt = await bcrypt.genSalt(saltRounds);
                password = await bcrypt.hash(password, salt) 
            }
        const newUser = new User({
            firstName: firstName, 
            lastName: lastName, 
            email: email, 
            password: password,
            photoProfil: photoProfil
        });
         const saveNewUser = await newUser.save(); 

         res.status(200).json(saveNewUser); 
    }catch(err){
        res.status(500).json(err)
    }
    

}); 

router.post('/signin', async(req, res)=>{

      
    try{
        const user = await User.findOne({email: req.body.email});
       
        let { password}= req.body; 
            if(password){ 
                const checkPassword = await bcrypt.compare(password, user.password);
               if(checkPassword){ 
                   const {password, ...otherData}= user._doc; 
                   res.status(200).json(otherData); 
               }
            }
         
    }catch(err){
        res.status(500).json(err)
    }
    

}); 
const MIME_TYPES = {
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
 
    cb(null, name + uniqSuffix +'.'+extension );
 }
})

const upload = multer({storage: storage});
const uploadMulptiple = upload.single('photoProfil')
router.post('/upload', uploadMulptiple, (req, res)=>{ 

    res.status(200).json(req.file);

})

module.exports = router;

