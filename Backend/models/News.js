const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let newsSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    shortstory:{
        type:String
    },
    publisheddate:{
        type:String
    },
    storylink:{
        type:String
    },
})
module.exports=mongoose.model('News',newsSchema)
