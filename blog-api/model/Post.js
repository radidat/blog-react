const mongoose = require('mongoose'); 
const {Schema} = mongoose; 


const postSchema = new Schema({
         title:{
             type: String, 
             required:true
         },
         introduce: {
            type:String,
         }, 
          
         content:{
             type: Array,
         }, 

         categories:[Object], 
         photoPost:{
             type: String, 
             default: ''
         }, 
         firstName:{ 
             type: String,
         }, 
         status:{ 
            type: String,
        }, 
         lastName:{
             type: String
         }, 
         photoProfil:{
             type: String, 
             default:''
         }
})

module.exports  = mongoose.model('Posts', postSchema);