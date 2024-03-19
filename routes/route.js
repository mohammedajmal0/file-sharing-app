import express from 'express'
import { uploadFile ,downloadImage} from '../controller/image-controller.js'
import upload from '../middleware/upload.js'

const router=express.Router()

router.post('/upload',upload.single('file'),uploadFile)
router.get('/file/:fileId',downloadImage);

export default router