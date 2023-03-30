import React,{useState ,useEffect} from 'react'
import "./home.css"

const Home = () => {
const [appointmentState, setappointmentState] = useState({ name:'' , egyid:'',phone:'' , email:'' , date:'', departmentstate:'',doctorstate:'',timingchose:''})
const [ID, setID] = useState()





useEffect(() => {
    if(appointmentState.departmentstate){
  
const requiredId = departments.find(item => item.department === appointmentState.departmentstate ) 
 
setID(requiredId.id)
    }

}, [appointmentState ,ID])

const handledep =(e)=>{
setappointmentState({...appointmentState ,departmentstate:e.target.value , doctorstate:"" , timingchose:'' })


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

    

    document.getElementById('date').setAttribute('min', maxDate);
},)



const handleform =(e)=>{
    
e.preventDefault()
console.log(appointmentState)

}

const handlesubmitbutton = ()=>{
    if((appointmentState.egyid).length !== 14 ){
        document.getElementById('egyid').setCustomValidity('تأكد من إدخال 14 رقم')
    }
    console.log(isNaN(Number(appointmentState.phone)))
    if( isNaN(parseInt(appointmentState.phone))  ){
        document.getElementById('phone').setCustomValidity('الحقل مطلوب ، تأكد من إدخاله بشكل صحيح')
    }
}






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





const doctors = [
{
name:'د.زياد سالم',
id:1,
timing:["9:00 AM","11:30 AM","12:00 PM","1:30 PM","3:00 PM"]

},
{
name:'د.رنا فوزي',
id:1,
timing:["9:00 AM","11:30 AM","2:00 PM","2:45 PM","3:00 PM"]

},
{
name:'د.علي محمد',
id:2,
timing:["9:00 AM","11:30 AM","12:30 PM","3:45 PM","5:00 PM"]

},
{
name:'د.عادل النجار',
id:2,
timing:["9:00 AM","11:30 AM","1:50 PM","2:45 PM","5:30 PM"]

},
{
name:'د.زكي الأسيوطي',
id:3,
timing:["9:00 AM","11:30 AM","2:40 PM","5:45 PM","7:00 PM"]

},
{
name:'د.جمال إبراهيم',
id:4,
timing:["10:00 AM","10:50 AM","3:50 PM","4:45 PM","6:30 PM"]

},
{
name:'د.هالة رشدي',
id:4,
timing:["9:00 AM","11:50 AM","12:40 PM","1:45 PM","9:00 PM"]

},
{
name:'د.إياد رمزي',
id:4,
timing:["10:00 AM","10:40 AM","12:00 PM","1:45 PM","8:30 PM"]

},
{
name:'د.رامي جمال',
id:5,
timing:["10:45 AM","11:30 AM","1:45 PM","1:45 PM","2:15 PM"]

},
{
name:'د.هاني عادل',
id:6,
timing:["10:00 AM","11:10 AM","12:10 PM","1:45 PM","2:45 PM"]

},
{
name:'د.فوزية محمود',
id:6,
timing:["8:10 AM","11:30 AM","12:15 PM","1:45 PM","7:50 PM"]

},
{
name:'د.سمية طارق',
id:6,
timing:["9:50 AM","11:30 AM","12:00 PM","1:45 PM","7:40 PM"]

},
{
name:'د.جون ',
id:7,
timing:["9:30 AM","12:00 PM","12:35 PM","1:30 PM","3:35 PM"]

},
{
name:'د.فادي محمد',
id:7,
timing:["9:00 AM","11:35 AM","12:32 PM","2:00 PM","3:00 PM"]

},
{
name:'د.كريم عمر',
id:5,
timing:["9:20 AM","11:30 AM","1:30 PM","2:45 PM","4:10 PM"]

},
{
name:'د.أحمد خالد',
id:4,
timing:["9:25 AM","11:30 AM","2:00 PM","3:45 PM","4:55 PM"]

},




]


  return (
    <div className='home-main'>
        <div className='container d-flex align-items-center flex-column justify-content-around p-1'>
            <h1 className='trust-title mt-5'>أخصائيون تثق بهم</h1>

<div className='appointment  mt-lg-2 m-md-0 m-sm-1'>
            <h3 className='mb-3'>حجز موعد</h3>
            <form className='bookingform' onSubmit={handleform}>
                <div className='row g-4'>

<div className='col-lg-4 col-md-6 col-sm-12'>

<label htmlFor="name">اسم المريض</label>
<input id='name' className='d-block' type='text' required onInvalid={(e) => e.target.setCustomValidity('هذا الحقل مطلوب')} onInput={(e) => e.target.setCustomValidity('')} value={appointmentState.name} onChange={(e)=>setappointmentState({...appointmentState ,name:e.target.value  })}   ></input>
</div>
<div className='col-lg-4 col-md-6 col-sm-12'>

<label htmlFor="egyid">الرقم القومي</label>
<input id='egyid'  className='d-block' type='number' required  onInput={(e) => e.target.setCustomValidity('')} value={appointmentState.egyid} onChange={(e)=>setappointmentState({...appointmentState ,egyid:e.target.value  })} ></input>
</div>
<div className='col-lg-4 col-md-6 col-sm-12'>
<label htmlFor="phone">رقم الهاتف</label>
<input id='phone'  className='d-block' type="tel" required onInvalid={(e) => e.target.setCustomValidity('الحقل مطلوب ، تأكد من إدخاله بشكل صحيح')} onInput={(e) => e.target.setCustomValidity('')} value={appointmentState.phone} onChange={(e)=>setappointmentState({...appointmentState ,phone:e.target.value  })}></input>

</div>
<div className='col-lg-4 col-md-6 col-sm-12'>
<label htmlFor="email">البريد الإلكتروني</label>
<input id="email" className='d-block' type='email' required onInvalid={(e) => e.target.setCustomValidity('الحقل مطلوب ،تأكد من كتابته بالطريقة الصحيحة')} onInput={(e) => e.target.setCustomValidity('')} value={appointmentState.email} onChange={(e)=>setappointmentState({...appointmentState ,email:e.target.value  })}></input>

</div>
<div className='col-lg-4 col-md-6 col-sm-12'>
<label htmlFor="date"> اختر التاريخ</label>
<input  id="date" className='d-block' type='date' required onInvalid={(e) => e.target.setCustomValidity('هذا الحقل مطلوب')} onInput={(e) => e.target.setCustomValidity('')} value={appointmentState.date} onChange={(e)=>setappointmentState({...appointmentState ,date:e.target.value  })} ></input>

</div>
<div className='col-lg-4 col-md-6 col-sm-12'>
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
<div className='col-lg-4 col-md-6 col-sm-12'>
<label htmlFor="doctor">الدكتور</label>
<select id="doctor" name='departments' value={appointmentState.doctorstate} onChange={(e)=>setappointmentState({...appointmentState ,doctorstate:e.target.value  })} required onInvalid={(e) => e.target.setCustomValidity('هذا الحقل مطلوب')} onInput={(e) => e.target.setCustomValidity('')}>
<option  value="">اختر الدكتور</option>
{
doctors.filter((doc) => doc.id === ID ).map((filterdoc,id) => (

<option key={id} value={filterdoc.name}>{filterdoc.name}</option>


)) 
    
}






</select>

</div>
<div className='col-lg-4 col-md-6 col-sm-12'>
<label htmlFor="timing">المواعيد المتاحة</label>
<select id='timing' name='departments' value={appointmentState.timingchose} onChange={(e)=>setappointmentState({...appointmentState ,timingchose:e.target.value  })} required onInvalid={(e) => e.target.setCustomValidity('هذا الحقل مطلوب')} onInput={(e) => e.target.setCustomValidity('')} >
<option  value="">اختر الوقت</option>

{
doctors.filter((doc) => doc.name === appointmentState.doctorstate ).map((filterdoc,id)  => (

filterdoc.timing.map((eachtime,i)=>(  



<option key={i} value={eachtime}>{eachtime}</option>





 ))


)) 
    
}






</select>

</div>



<div className='col-lg-4 col-md-6 col-sm-12 d-flex align-items-end '>
<button onClick={handlesubmitbutton} type='submit'>أحجز</button>

</div>





                </div>

            </form>

        </div>
        </div>
        

    </div>
  )
}

export default Home