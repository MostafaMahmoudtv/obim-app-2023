import React from 'react'
import {BsQrCode} from 'react-icons/bs'

import './QRCode.css'



const QRCode = ({active , sethandleQr} ) => {
  return (
    
    <div onClick={()=> sethandleQr(true)} className={active}>

<BsQrCode color='#fff'  size={30}/>


    </div>
    
    
  )
}

export default QRCode