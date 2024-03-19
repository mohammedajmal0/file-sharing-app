import express from 'express'
import router from './routes/route.js'
import cors from 'cors'
import dotenv from 'dotenv'
import DBConnection from './database/db.js'
const app=express()
dotenv.config()
const PORT=8000
app.use(cors())
await DBConnection()
app.listen(PORT,()=>{
    console.log("listening on port 8000")
})

app.use('/',router)