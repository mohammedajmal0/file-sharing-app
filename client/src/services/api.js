import axios from 'axios'

const API_URL='https://file-sharing-app-1xes.onrender.com'
export const uploadFile=async (data)=>{
    try{
       const response= await axios.post(`${API_URL}/upload`,data)
       console.log(response)
       return response.data
    }catch(error){
        console.error("err :", error.message)
    }
}

