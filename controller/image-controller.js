import fileModel from "../models/file.js"

export const uploadFile=async (req,res)=>{
    const fileObj={
        path:req.file.path,
        name : req.file.originalname
    }
    console.log(fileObj)
    try {
         const file=await  fileModel.create(fileObj)
         res.status(200).json({path: `https://file-sharing-app-1xes.onrender.com/file/${file._id}`})
    } catch (error) {
        res.status(500).json("error while uploading")
    }
}

export const downloadImage=async (req,res)=>{
    try {
        const file=await fileModel.findById(req.params.fileId)
        file.download++;
        await file.save()
        res.download(file.path,file.name);
    } catch (error) {
        console.error("error while getting image")
    }
}
