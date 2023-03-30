import React , {useEffect} from 'react'
import useScript from 'usescript-hook'
import './options.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClipboard} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import {useNavigate} from "react-router-dom"


const Options = () => {
 const navigate = useNavigate();


  const visitingtimes =() => {
    navigate("/أوقات-الزيارة");
  }
  const achievements =() => {
    navigate("/الإنجازات الطبية");
  }
  const medicalrecord =() => {
    navigate("/السجل-الطبي");
  }






const useScript = url =>{
useEffect(() => {
  const script = document.createElement('script')
  script.src=url
script.async=true;
document.body.appendChild(script)

  return () => {
    document.body.removeChild(script)
  }
}, [url])
}

   useScript('https://cdn.lordicon.com/fudrjiwc.js')


  return (
    <div className='three-opts pt-4 pb-4 mt-4'>
<div className='container'>
<div className='row  justify-content-center'>
    <div onClick={medicalrecord} className='opts d-flex align-items-center justify-content-center col-lg-4 col-md-4 col-sm-12'>
 
<lord-icon
    src="https://cdn.lordicon.com/pqxdilfs.json"
    trigger="loop"
           colors="outline:#131432,primary:#606874,secondary:#4030e8,tertiary:#ebe6ef"
    style={{width:'150px',height:'150px'}}>
</lord-icon>

   <p>السجل الطبي</p>
    </div>
    
    <div onClick={visitingtimes} className='opts d-flex align-items-center justify-content-center col-lg-4 col-md-4 col-sm-12'>
 <lord-icon
    src="https://cdn.lordicon.com/osvvqecf.json"
    trigger="loop"
    colors="outline:#121331,primary:#f24c00,secondary:#ebe6ef,tertiary:#4030e8"
    state="loop"
    style={{width:'150px',height:'150px'}}>
</lord-icon>
   <p>اوقات الزيارة</p>
    </div>
    
    <div onClick={achievements} className='opts d-flex align-items-center justify-content-center col-lg-4 col-md-4 col-sm-12'>
 <lord-icon
    src="https://cdn.lordicon.com/kejpvrvr.json"
    trigger="loop"
    colors="primary:#121331,secondary:#ffc738,tertiary:#ebe6ef,quaternary:#2516c7,quinary:#b26836"
    style={{width:'150px',height:'150px'}}>
</lord-icon>
   <p>الإنجازات الطبية</p>
    </div>


</div>






</div>



    </div>
  )
}

export default Options