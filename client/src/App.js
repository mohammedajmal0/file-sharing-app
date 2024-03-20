import './App.css';
import { useRef, useState ,useEffect} from 'react';
import {uploadFile} from './services/api'

function App() {
  const fileInputRef=useRef();
  const [file,setFile]=useState('');
  const [result,setResult]=useState('')
  const [loading, setLoading] = useState(false);
  
  useEffect(()=>{
    const getImage=async ()=>{
      if(file){
        setLoading(true);
        const data=new FormData();
        data.append('name',file.name)
        data.append('file',file)
        console.log(data)
       const res=await uploadFile(data)
       setResult(res.path);
        setLoading(false);
      }
    }
    getImage()
  },[file])
  const onUpoadClick=()=>{
    fileInputRef.current.click()
  }


  return (
    <div className='container'>
      <div className='wrapper'>
        <h1>File Sharing!</h1>
        <p>upload and share your files easily</p>
        <button onClick={()=>onUpoadClick()} disabled={loading}>upload</button>
        // {loading && <p> Uploading...</p> } 
        <input type='file' ref={fileInputRef} style={{display:'none'}} onChange={(e)=>{
          setFile(e.target.files[0])
        }}>
        </input>
        <a href={result}>{result}</a>
      </div>
    </div>
  );
}

export default App;
