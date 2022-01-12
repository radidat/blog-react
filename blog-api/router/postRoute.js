const router = require('express').Router(); 
const Post = require('../model/Post');
const User = require('../model/User');
const multer = require('multer');


router.post('/', async(req, res)=>{ 

  console.log(req.query.filterPost); 
 
    try{
          const user = await User.exists({$or:[{firstName: req.body.firstName}, {lastName:req.body.lastName}]}); 
          if(user){ 
            const newPost = new Post(req.body); 
            const saveNewPost =  await newPost.save(); 
            res.status(200).json(saveNewPost)
          } 
          !user && res.status(401).json('you are not allowed to write an article')

    }catch(err){
        res.status(500).json(err)
    }

})


router.get("/", async (req, res) => {
    const lastName = req.query.lastName;
    const catName = req.query.filterPost;
    try {
      let posts;

      if (lastName) {
        posts = await Post.find({ lastName : lastName });
      }
       if (catName) {
        posts = await Post.find({
            categories: {
              $elemMatch:{value: catName}
            },
          });
      }else{
        posts = await Post.find();
      } 
       if(lastName && catName){
        posts = await Post.find({  categories: {  $in: [catName] }},
            { lastName : lastName }
            );

      }
      
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get("/:id", async (req, res) => {
    const id = req.params.id;
     
    try{
      let post = await Post.findById(id); 
      res.status(200).json(post);
    }   catch (err) {
      res.status(500).json(err);
    }
  });  
  
router.put('/:id', async (req, res)=>{

  console.log(req.body)
    try{
        const updatePost = await Post.findByIdAndUpdate(req.params.id,{  
            $set: req.body
        },{new: true}); 
        res.status(200).json(updatePost);

    }catch(err){ 
        res.status(500).json(err)
    }
})


router.delete('/:id',async (req, res)=>{ 

    try{
         await Post.findByIdAndDelete(req.params.id)
        res.status(200).json('your post has deleted');

    }catch(err){ 
        res.status(500).json(err)
    }
})

const storage = multer.diskStorage({
    destination:(req, file, cb)=>{ 
      cb(null, 'images');
    }, 
    filename:(req, file, cb)=>{
      cb(null, file.originalname);
    }
})
const upload = multer({storage: storage}).fields([{name:'photoArticle'}, {name:'file'}]);

router.post('/upload', upload, (req, res)=>{

  res.status(200).json(req.files);
})
module.exports = router;  