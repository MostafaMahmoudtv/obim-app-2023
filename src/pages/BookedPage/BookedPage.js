import React,{useContext, useState,useEffect} from 'react'
import { Context } from '../../context/ContextState'
import './bookedpage.css'
import toast from 'react-hot-toast'



const BookedPage = () => {

    const context = useContext(Context)
    const {LogIn,usersArray,showUserBooked, setshowUserBooked} = context
const [egyidConfirm, setegyidConfirm] = useState('')
const [egyidConfirmed, setegyidConfirmed] = useState(false)
const [filteredEgyId, setfilteredEgyId] = useState([])


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

    

   
    
},)



useEffect(() => {
  if(!LogIn){
    setegyidConfirmed(false)
  }
}, [LogIn])





const handlesubmitbutton = ()=>{
    console.log(egyidConfirm.length)
    if((egyidConfirm).length !== 14 ){
        document.getElementById('egyid').setCustomValidity('تأكد من إدخال 14 رقم')
        setegyidConfirmed(false)
    }
    
}



const handleform =(e)=>{
    if(!LogIn){
        setegyidConfirmed(false)
toast.error(" يجب أن تقوم بتسجيل الدخول")
    }
    else{
let userbookedarray = (usersArray.bookedAppointements).filter(element => {

 return element.egyid === egyidConfirm



})
setshowUserBooked(true)
setfilteredEgyId(userbookedarray)
setegyidConfirm('')
setegyidConfirmed(true)
    }
e.preventDefault()


}


  return (
    <div className='booked pt-4 pb-4 mt-5 '>
        <div className='container mt-3'>
<div className='d-flex align-items-center flex-column '>

<div className='idbooked'>
    <h1>مواعيد حجز المريض</h1>

<form onSubmit={handleform} >
<div className='identity mb-3 '>
    {/* {already ? <p style={{color:'white',fontSize:'20px'}}>تم حجز هذا القسم مسبقا </p> : <p style={{color:'white',fontSize:'25px'}}>تم الحجز بنجاح</p>} */}
<label className='d-block' htmlFor="egyid" style={{fontSize:'22px'}}>الرقم القومي <span style={{fontSize:'13px'}}>(يرجى إدخال 14 رقم)</span></label>
<div className='d-flex align-items-center flex-wrap'>
<input id='egyid'  className='d-inline-block' type='number' required  onInput={(e) => e.target.setCustomValidity('')} value={egyidConfirm} onChange={(e)=>setegyidConfirm(e.target.value)} ></input>
<div className='checkbutton d-inline-block '>
<button className='rounded' onClick={handlesubmitbutton} type='submit'>إظهار المواعيد</button>

</div>
</div>
</div>



</form>

</div>
{egyidConfirmed &&
<div className='doc-table  table-responsive'>
     <h1 className={filteredEgyId.length ? "d-none" : "d-block"}>  لا يوجد مواعيد محجوزة لهذا الرقم القومي</h1>  
    <h1 className={filteredEgyId.length ? "d-block" : "d-none"}>  المواعيد المحجوزة</h1>
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
    <tr key={i}>
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

</div>




        </div>




    </div>
  )
}

export default BookedPage