const router = require('express').Router(); 
const User =  require('../model/User'); 
const Post =  require('../model/Post'); 
const bcrypt = require('bcrypt');



const saltRouds  = 10; 
router.get('/:id', async(req, res)=>{
  
try{ 

    const user = await User.findById(req.params.id); 
      !user && res.status(400).json('user doesn\'t exist'); 
    
      const {password, ...othersData} = user._doc; 
      res.status(200).json(othersData); 
}catch(err){ 

    res.status(500).json(err)
}
    
})

router.put('/:id', async(req, res)=>{
  
    try{
         const user = await User.findById(req.params.id);

          if(req.body.password){
              const salt = await bcrypt.genSalt(saltRouds); 
              req.body.password = await bcrypt.hash(req.body.password, salt); 
          } 
    
           if(user){
            const userUpdate = await User.findByIdAndUpdate(req.params.id, { 
                $set:req.body
            }, {new:true}); 
              const {password, ...others} = userUpdate._doc; 
              res.status(200).json(others); 
           }
     
    }catch(err){ 
    
        res.status(500).json(err)
    }
        
    });

    router.delete('/:id', async(req, res)=>{
  
             
        try{
            const user = await User.findById(req.params.id); 
              if(user){
                await Post.deleteMany({firstName: user.firstName}, {lastName: user.lastName})
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("user has deleted with success")
              }
         
         
        }catch(err){ 
        
            res.status(500).json(err)
        }
            
        });
    


module.exports = router; 