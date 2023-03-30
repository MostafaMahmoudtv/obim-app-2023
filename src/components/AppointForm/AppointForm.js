import React,{useState,useEffect, useContext} from 'react'
import { Context } from '../../context/ContextState'
import './appointform.css'
import toast from 'react-hot-toast'
const AppointForm = () => {
   const [already, setalready] = useState(false)
    const context = useContext(Context)
    const{LogIn} =context

    const {saveuser, setSaveUser,usersArray,setusersArray,setshowburgermenu,bookedToday, setbookedToday,date, setdate} =context

const arrayUpdate =() =>{
   
    let found=false
    console.log(usersArray)
    if(usersArray.bookedAppointements.length){
  usersArray.bookedAppointements.forEach(element => {
   
    // console.log(element)
    // console.log(appointmentState.departmentstate)
    if(element.name === appointmentState.name && element.departmentstate === appointmentState.departmentstate){
        
    toast.error('تم حجز هذا القسم مسبقا')
        found = true
    }
    
let userbookedarray3 = (usersArray.bookedAppointements).filter(element => {

 return element.date === date



})
setbookedToday(userbookedarray3)




    
});}

if(!found){
    
    let newappointment = [...usersArray.bookedAppointements,appointmentState]
setusersArray({...usersArray,bookedAppointements:newappointment })
    toast.success('تم الحجز بنجاح')

}

}


const handleform = (e)=>{
    if(!LogIn){
        toast.error(" يجب أن تقوم بتسجيل الدخول")
    }
    else{
        
        arrayUpdate()
        // console.log(appointmentState)
        
        
        
    }
    
    e.preventDefault()
    
}

useEffect(() => {
    
    if(usersArray.bookedAppointements.length){
        //   console.log(usersArray)
          const jsonArr =JSON.stringify(usersArray)
          localStorage.setItem("UsersDetails",jsonArr)
    }


}, [usersArray])


const handlesubmitbutton = ()=>{
    if((appointmentState.egyid).length !== 14 ){
        document.getElementById('egyid').setCustomValidity('تأكد من إدخال 14 رقم')
    }
    
  
}
const [appointmentState, setappointmentState] = useState({ name:'' , egyid:'',phone:'' , email:'' , date:'', departmentstate:'',doctorstate:'',timingchose:''})


    const departments = [
    
    

{
id:1,
department:'العيون',


},
{
id:2,
department:'الأطفال',


},
{
id:3,
department:'النساء والولادة',


},
{
id:4,
department:'العظام',


},
{
id:5,
department:'السمنة والتغذية',


},
{
id:6,
department:'قسم الأشعة',


},
{
id:7,
department:'عيادة الأسنان',


},




]
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
setdate(maxDate)
    

    document.getElementById('date').setAttribute('min', maxDate);
    
},[date,setdate])

useEffect(() => {
  if(LogIn){
setappointmentState({...appointmentState ,name :saveuser })

    }

}, [LogIn])



const handledep =(e)=>{
setappointmentState({...appointmentState ,departmentstate:e.target.value , doctorstate:"" , timingchose:'' })


}


  return (
    <div className='appointment d-flex p-4 align-items-center flex-column'>
<form className='bookingform w-100' onSubmit={handleform}>
<div className='col-12  mb-3'>
    {/* {already ? <p style={{color:'white',fontSize:'20px'}}>تم حجز هذا القسم مسبقا </p> : <p style={{color:'white',fontSize:'25px'}}>تم الحجز بنجاح</p>} */}
   
<label htmlFor="egyid">الرقم القومي <span style={{fontSize:'13px'}}>(يرجى إدخال 14 رقم)</span></label>
<input id='egyid'  className='d-block' type='number' required  onInput={(e) => e.target.setCustomValidity('')} value={appointmentState.egyid} onChange={(e)=>setappointmentState({...appointmentState ,egyid:e.target.value  })} ></input>
</div>
<div className='col-12 mb-3'>
<label htmlFor="date"> اختر التاريخ</label>
<input  id="date" className='d-block' type='date' required onInvalid={(e) => e.target.setCustomValidity('هذا الحقل مطلوب')} onInput={(e) => e.target.setCustomValidity('')} value={appointmentState.date} onChange={(e)=>setappointmentState({...appointmentState ,date:e.target.value  })} ></input>

</div>

<div className='col-12 mb-5'>
<label htmlFor="section">القسم</label>
<select id='section' name='departments' value={appointmentState.departmentstate} onChange={ (e) => handledep(e)} required onInvalid={(e) => e.target.setCustomValidity('هذا الحقل مطلوب')} onInput={(e) => e.target.setCustomValidity('')}>
<option  value="">اختر القسم</option>

{
departments.map((department,i)=>(
<option key={i} value={department.department}>{department.department}</option>


))


}






</select>

</div>
<div className='col-12 '>
<button className='rounded' onClick={handlesubmitbutton} type='submit'>أحجز</button>

</div>
</form>
    </div>
  )
}

export default AppointForm