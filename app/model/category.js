const mongoose=require('mongoose')
const Schema= mongoose.Schema
const categorySchema = new Schema({
   
     name:{
         type:String,
         required:true
        },
    notes:{
        type:Schema.Types.ObjectId,
        ref:'Note'
    }
   
})

// model 
const Category = mongoose.model('Category', categorySchema)

module.exports = Category