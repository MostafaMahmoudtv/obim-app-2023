import React,{useContext  ,useEffect, useState} from 'react'
import { Context } from './context/ContextState';
// import { useQRCode } from 'react-qrcode'
import './components/QRCodePopup/QRCodePopup.css'
import {AiOutlineClose} from 'react-icons/ai'
// import 'react-qrcode/lib/use-qrcode'
import {QRCodeSVG} from 'qrcode.react';
import obimlogo from '../src/Assets/obim-removebg-preview-small.png'
// import {QRCode} from 'react-qrcode'
import {QRCodeCanvas} from 'qrcode.react';
const QRCodePopup = ({sethandleQr}) => {

    const context = useContext(Context)
    const {user,setuser,password,setpassword,userValidation,setuserValidation ,usersArray,LogIn,saveuser, showNewReg ,  setshowNewReg , showburgermenu, setshowburgermenu} = context


    const [collection , setcollection] = useState([])
    const [value, setValue] = useState('')
    // const dataUrl = useQRCode(value)
const [filteredqr, setfilteredqr] = useState([])





useEffect(() => {
  let filterQR = (usersArray.bookedAppointements).filter(element => {

return element.name === saveuser


  })

setfilteredqr(filterQR)
 
}, [])




useEffect(() => {
 if(filteredqr.length >= 1){
    
    let operator =[]
    let count 
    filteredqr.forEach((each,index) => {
        count = 1
         Object.keys(each).forEach((item , i) =>{
       console.log(item)
       console.log(Object.values(each)[i])
       if(Object.values(each)[i]){
         if(count === 1){
             operator = [
                 ...operator ,`
الموعد رقم ${index + 1}

` ] 
         }
       operator = [
           ...operator ,` (${count})  ${item === 'date' ? 'التاريخ' : item === 'departmentstate' ? 'القسم' : item === 'egyid' ? 'الرقم القومي' : 'الاسم'   } : ${Object.values(each)[i]}  
--------------------------
` ]

count++
       }
           
           
         })
         setcollection(operator)
   
       })


 }



}, [filteredqr])















//     let operator =[]
//     let count 
//     const handlepress = () =>{
//         filteredqr.forEach((each,index) => {
//            count = 1
//             Object.keys(each).forEach((item , i) =>{
//           console.log(item)
//           console.log(Object.values(each)[i])
//           if(Object.values(each)[i]){
//             if(count === 1){
//                 operator = [
//                     ...operator ,`
// الموعد رقم ${index + 1}

// ` ] 
//             }
//           operator = [
//               ...operator ,` (${count})  ${item === 'date' ? 'التاريخ' : item === 'departmentstate' ? 'القسم' : item === 'egyid' ? 'الرقم القومي' : 'الاسم'   } : ${Object.values(each)[i]}  
// --------------------------
// ` ]

// count++
//           }
              
              
//             })
//             setcollection(operator)
      
//           })

          

//     }
       
    useEffect(() => {
      
        console.log(collection.join(' '))
        setValue(collection.join(' '))
      
    }, [collection])
    


    useEffect(() => {
      
        console.log(value)
        
      
    }, [value])
    





     
  


























let x = 'موعد'

  return (
    <div className='qr-popup justify-content-between align-items-center d-flex flex-column p-2'>
        <AiOutlineClose onClick={() => sethandleQr(false)} className='align-self-start'  size={30}/>
<h4 className=' text-center'>قم بمسح الQR كود الخاص بك للحصول على مواعيد الحجز</h4>

{/* <img src={dataUrl} alt='QR-code' /> */}
<QRCodeCanvas
className='qrcanva'
  value={value}
  size={400}
  bgColor={"#ffffff"}
  fgColor={"#000000"}
  level={"L"}
  includeMargin={false}
  imageSettings={{
    src: "/obim-removebg-preview-small.png",
    x: undefined,
    y: undefined,
    height: 90,
    width:90,
    excavate: true,
  }}
/>
    </div>
  )
}

export default QRCodePopup