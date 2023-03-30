import React,{useContext,useState,useEffect,useCallback} from 'react'
import "./medicalrecord.css"
import toast from 'react-hot-toast'
import { Context } from '../../context/ContextState'
import { faCaretDown , faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import obimimage from '../../Assets/obim-removebg-preview-small.png'
import {IoLocationSharp} from 'react-icons/io5'
import {AiOutlinePhone} from 'react-icons/ai'

const MedicalRecord = () => {
  const context = useContext(Context)
    const {LogIn,usersArray,setusersArray,showUserBooked, saveuser , setshowUserBooked} = context
const [egyidConfirm, setegyidConfirm] = useState('')
const [idSpare, setidSpare] = useState('')
const [docCode, setdocCode] = useState('')
const [docCodeConfirmed, setdocCodeConfirmed] = useState(false)
const [egyidConfirmed, setegyidConfirmed] = useState(false)
const [filteredEgyId, setfilteredEgyId] = useState([])
const [filteredEgyId2, setfilteredEgyId2] = useState([])
const [prescription, setprescription] = useState('')
const [previousPrescription, setprevoiusPrescription] = useState('')
const [createPrescription, setcreatePrescription] = useState({ medicine:'' , medicinePrescription:'', date:'' , id:''})
const [search, setsearch] = useState('')
const [notfound, setnotfound] = useState([])






useEffect(() => {
  if(!LogIn){
    setegyidConfirmed(false)
  }
}, [LogIn])

const handleCreate =()=>{
document.querySelector(".black").style.display="flex"

}

const checkDocCode = (e) =>{

if(docCode){
    if (docCode === "fayum-hospital12345"){
    setdocCodeConfirmed(true)
    }
    else{
        toast.error("كود الطبيب خاطىء")
    }
  }
  e.preventDefault()

}

useEffect(() => {
    
    if(usersArray.myPrescription){
        
          const jsonArr =JSON.stringify(usersArray)
          localStorage.setItem("UsersDetails",jsonArr)
  
let userbookedarraynew = (usersArray.myPrescription).filter(element => {


 return element.id === idSpare}
 )


 setnotfound(userbookedarraynew)
 setfilteredEgyId2(userbookedarraynew)
    }
}, [usersArray])

const handlesubmitbutton = ()=>{
    
    if((egyidConfirm).length !== 14 ){
        document.getElementById('egyid').setCustomValidity('تأكد من إدخال 14 رقم')
        setegyidConfirmed(false)
    }
    
}

let savedUserDetails = localStorage.getItem('UsersDetails')

useEffect(() => {
  

  
setfilteredEgyId2(notfound)




  let adjustingarrray = notfound?.filter((element)   =>  element.medicinePrescription.toLowerCase().includes(search.toLowerCase()) ? element  : ''
    
) 
  setfilteredEgyId2(adjustingarrray)

  
}, [search])



//     useEffect(() => {

// if(filteredEgyId2.length > 0 ){

//   if(savedUserDetails){
//     setusersArray(JSON.parse(savedUserDetails))
//   }
// }

  


  

      
    
  
 
         
//     },[filteredEgyId2])














const handleform = (e)=>{
    if(!LogIn){
        setegyidConfirmed(false)
toast.error(" يجب أن تقوم بتسجيل الدخول")
    }
    else{
let userbookedarray = (usersArray.bookedAppointements).filter(element => {

 return element.egyid === egyidConfirm



})
let userbookedarray2 = (usersArray.myPrescription).filter(element => {

 return element.id === egyidConfirm



})
setshowUserBooked(true)
setfilteredEgyId(userbookedarray)
setfilteredEgyId2(userbookedarray2)
setnotfound(userbookedarray2)
setegyidConfirmed(true)
setcreatePrescription({...createPrescription , id:egyidConfirm})

setegyidConfirm('')
    }
e.preventDefault()


}


useEffect(() => {
  if(egyidConfirm.length === 14 ){
    setidSpare(egyidConfirm)
    setcreatePrescription({...createPrescription , id:egyidConfirm})

  }
}, [egyidConfirm])





const prescriptionSubmit =(e)=>{
     e.preventDefault()
     let specialNo = (usersArray.myPrescription).length + 1
  

    
    let newprescription = [...usersArray.myPrescription ,{...createPrescription, num:specialNo}]
setusersArray({...usersArray,myPrescription:newprescription })
    toast.success('تم الإضافة بنجاح ')




setcreatePrescription({...createPrescription, medicine:"" , medicinePrescription:'', date:''})

document.querySelector(".black").style.display="none"

    setdocCodeConfirmed(false)
    setdocCode("")
    // handleform()

}
useEffect(() => {
  var dtToday = new Date();
    
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
    
    var maxDate = year + '-' + month + '-' + day;

    setcreatePrescription({...createPrescription , date:maxDate})

    
    
},[usersArray])

const closeBlack =()=>{
    document.querySelector(".black").style.display="none"
    setdocCode("")
    setdocCodeConfirmed(false)
}

const removeFromList =(elementId)=>{

let userbookedarraynew2 = (usersArray.myPrescription).filter((element,index) => {


 return (element.num !== elementId )}
 )

 setusersArray({...usersArray,myPrescription:userbookedarraynew2 })
 





}







  return (
    <>
   
    <div className='black'>
        <FontAwesomeIcon className='xmark'  style={{cursor:'pointer',color:"white"}} onClick={closeBlack} icon={faXmark}/ >
 <div className='form-parent p-3'>
{docCodeConfirmed ?<form className='prescription-form' onSubmit={prescriptionSubmit}> 
    <div className='prescriptionimage-date d-flex flex-column align-items-center '>
      <div className='d-flex w-100 align-items-center justify-content-between pres-head'>
     
<h1 className='m-0 '>عيادة</h1>

   <img style={{width:'30%'}} src={obimimage} alt='obim' />
      </div>
   <div className='doctor-patient-date d-flex align-items-center w-100 justify-content-between mt-5'>
<div className='doctor-patient'>
  <span>الدكتور: </span>
<span className='ms-5'>..................</span>
  <span>المريض:</span>
<span>{saveuser} </span>
</div>
<div className='pres-date'>

<span>التاريخ:</span>


<span>{createPrescription.date}</span>


</div>
   </div>
    </div>
    {/* <label className='ms-3 mb-2' style={{color:'white'}}>اسم الدواء </label>
  <input required style={{width:"100%"}} className='rounded' type="text" value={createPrescription.medicine} onChange={(e) => setcreatePrescription({...createPrescription , medicine:e.target.value})}></input>
    <label className='ms-3 mb-2' style={{color:'white'}}> الوصف </label>
  <textarea required style={{width:"100%"}} className='rounded'  value={createPrescription.medicinePrescription} onChange={(e) => setcreatePrescription({...createPrescription , medicinePrescription:e.target.value})}></textarea>
  <button  className='mt-2 '>
    إضافة
  </button> */}
    
    <textarea  
    required
    value={createPrescription.medicinePrescription}  
    placeholder='الدواء / عدد الجرعات / ملاحظات ...'
    onChange={(e) => setcreatePrescription({...createPrescription , medicinePrescription:e.target.value})}
    >

    </textarea>
    <button  className='mt-2 '>
    إضافة
  </button>
    <div className='pres-footer'>
      <div>
<IoLocationSharp className='ms-1'/>
<span>الفيوم - العامرية - خلف السيتي سنتر </span>

      </div>
      <div>
<AiOutlinePhone/>
<span> +0200106547838</span>

      </div>
    </div>
     </form>
        


:

<form className='doctor-area' onSubmit={checkDocCode}>
 <label className='ms-3 mb-2' style={{color:'white'}}>كود الطبيب</label>
  <input lang="en" dir="ltl" style={{width:"100%"}} className='rounded' type="text" value={docCode} onChange={(e) => setdocCode(e.target.value)}></input>
  <button  className='mt-2 '>
    إدخال
  </button>

            </form>
            
            
            
            
            }
            
            



        </div>

    </div>
    <div className='booked pt-4 pb-4 mt-5 '>
        <div className='container mt-3'>
<div className='d-flex align-items-center flex-column '>

<div className='idbooked'>
    <h1 className='d-inline-block'>السجل الطبي للمريض</h1>
<span style={{fontSize:'14px'}}>(قم بإدخال الرقم القومي الخاص بك لإظهار السجل الخاص بك أو إنشاء روشتة)</span>
<form onSubmit={handleform} >
<div className='identity mb-3 '>
    {/* {already ? <p style={{color:'white',fontSize:'20px'}}>تم حجز هذا القسم مسبقا </p> : <p style={{color:'white',fontSize:'25px'}}>تم الحجز بنجاح</p>} */}
<label className='d-block' htmlFor="egyid" style={{fontSize:'22px'}}>الرقم القومي <span style={{fontSize:'13px'}}>(يرجى إدخال 14 رقم)</span></label>
<div className='d-flex align-items-center flex-wrap'>
<input id='egyid'  className='d-inline-block' type='number' required  onInput={(e) => e.target.setCustomValidity('')} value={egyidConfirm} onChange={(e)=>setegyidConfirm(e.target.value)} ></input>
<div className='checkbutton d-inline-block '>
<button className='rounded' onClick={handlesubmitbutton} type='submit'>إظهار </button>

</div>
</div>
</div>



</form>

</div>
{egyidConfirmed &&
<div className='doc-table  table-responsive'>
     <h1 className={filteredEgyId.length ? "d-none" : "d-block"}>  لا يوجد مواعيد محجوزة لهذا الرقم القومي</h1>  
    <h1 className={filteredEgyId.length ? "d-block" : "d-none"}>  السجل الطبي </h1>
<table  className={filteredEgyId.length ? "table" : "d-none"}>
  <thead>
    <tr className='doc'>
      <th scope="col">#</th>
      <th scope="col">الاسم</th>
      <th scope="col">القسم</th>
      <th scope="col">التاريخ</th>
      
    </tr>
  </thead>
  <tbody>
      {filteredEgyId.map((element,i)=>(
    <tr>
      <th scope="row" className='doc' >{i+1}</th>
      <td>{element.name} </td>
      <td>{element.departmentstate} </td>
      <td>{element.date} </td>
      
    </tr>
   
     ))}
  </tbody>
</table>
</div>
}
{egyidConfirmed &&
<div className='createbutton align-self-start mt-5'>
<label htmlFor="prebutton" style={{fontSize:'30px',fontWeight:'bold',display:'block'}} > إنشاء روشتة <span style={{fontSize:'14px',fontWeight:'bold'}} >(متاحة فقط للأطباء)</span></label>
<button className='mt-2' onClick={handleCreate}>إنشاء</button>
</div>
}
{egyidConfirmed &&
<div className='doc-table mt-3 table-responsive'>
     <h1 className={filteredEgyId2.length ? "d-none" : "d-block"}>   لا توجد روشتة </h1>  
    <h1 className={filteredEgyId2.length ? "d-block" : "d-none"}>  روشتة المريض  </h1>
    <input type='search' placeholder='ابحث عن اسم الدواء...' className='search-medicine my-2 ' value={search} onChange={(e) => setsearch(e.target.value) } />
<table  className={filteredEgyId2.length ? "table" : "d-none"}>
  <thead>
    <tr className='doc'>
      <th scope="col">#</th>
      <th scope="col">الوصف</th>
      <th scope="col">تاريخ الإنشاء</th>
      <th className='text-center' scope="col">حذف </th>

      
    </tr>
  </thead>
  <tbody>
      {filteredEgyId2.map((element,i)=>(
    <tr>
      <th scope="row" className='doc' >{i+1}</th>
      
      <td>{element.medicinePrescription} </td>
      <td>{element.date} </td>
      <td onClick={()=> removeFromList(element.num)} className='text-center'><FontAwesomeIcon className='xmark2'  style={{cursor:'pointer',color:"white"}}  icon={faXmark}/ > </td>
      
    </tr>
   
     ))}
  </tbody>
</table>
</div>
}


</div>




        </div>




    </div>
    </>
  )
}


export default MedicalRecord