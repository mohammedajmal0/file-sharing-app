import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()
const DBConnection=async ()=>{
    
    try {
        await mongoose.connect(process.env.DB_URI,{
            autoIndex:true
        })
        console.log("db connection established")
    } catch (error) {
        console.log("error while connecting db",error.message)
    }
}

export default DBConnection