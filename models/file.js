import mongoose from "mongoose";

const fileSchema=new mongoose.Schema({
    path:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    download:{
        type:Number,
        default:0
    }
})

const fileModel= mongoose.model("file-collections",fileSchema)

export default fileModel