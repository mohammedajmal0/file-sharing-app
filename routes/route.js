import express from 'express'
import { uploadFile ,downloadImage} from '../controller/image-controller.js'
import upload from '../middleware/upload.js'

const router=express.Router()

router.post('/upload',upload.single('file'),uploadFile)
router.get('/file/:fileId',downloadImage);

export default router
// https://file-sharing-app-1xes.onrender.com/file/65fb163e180f8afb6dc8e384
