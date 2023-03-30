import React from 'react'
import "./doctorpage.css"
const DoctorPage = () => {


    const doctorsInfo=[
{
name:' أحمد فتحي',
major:'الأمراض الباطنية',
department:'دائرة الأمراض الباطنية',
specialmajor:'أمراض وزراعة الكلى،وضغط الدم',
mobileNo:'2627',
emailAddress:'Ahmed.f@egy.com',
attendingstatus:'دوام كلي',
time:'9 صباحا - 4مساء',
},
{
name:'منى إبراهيم  ',
major:'الأمراض الباطنية',
department:'دائرة الأمراض الباطنية',
specialmajor:'أمراض الكلى وزراعتها وارتفاع ضغط الدم',
mobileNo:'2486',
emailAddress:'mona@yahoo.com',
attendingstatus:'دوام كلي',
time:'10:15 صباحا -6 مساء',
},
{
name:'حازم عيد',
major:'باطنية',
department:'دائرة الأمراض الباطنية',
specialmajor:'أمراض الكلى وزراعتها',
mobileNo:'2389',
emailAddress:'Hazem@ju.edu.jo',
attendingstatus:'دوام كلي',
time:'8:30 صباحا -4:30 مساء',
},
{
name:'محمد حسن',
major:'الأمراض الجلدية',
department:'دائرة الأمراض الجلدية',
specialmajor:'أخصائي جلدية',
mobileNo:'2378',
emailAddress:'Mo23@gmail.com',
attendingstatus:'دوام كلي',
time:'9 صباحا -5 مساء',

},
{
name:'مها حمدي',
major:'الأمراض الجلدية',
department:'دائرة الأمراض الجلدية',
specialmajor:'أخصائي جلدية',
mobileNo:'2378',
emailAddress:'mha123@gmail.com',
attendingstatus:'دوام كلي',
time:'9 صباحا -5 مساء',
},
{
name:'أحمد فتحي',
major:'الأمراض الجلدية',
department:'دائرة الأمراض الجلدية',
specialmajor:'أخصائي جلدية',
mobileNo:'2378',
emailAddress:'Ahmed.f@gmail.com',
attendingstatus:'دوام كلي',
time:'9 صباحا -5 مساء',
},
{
name:'راندا إبراهيم',
major:'الأمراض الجلدية',
department:'دائرة الأمراض الجلدية',
specialmajor:'أخصائي جلدية',
mobileNo:'2378',
emailAddress:'randafarah.1194@gmail.com',
attendingstatus:'دوام كلي',
time:'9 صباحا -5 مساء',
},
{
name:'فاطمة عبدالحميد',
major:'الأمراض الجلدية',
department:'دائرة الأمراض الجلدية',
specialmajor:'أخصائي جلدية',
mobileNo:'2378',
emailAddress:'fatima@gmail.com',
attendingstatus:'دوام كلي',
time:'9 صباحا -5 مساء',
},
{
name:'مروة عبدالملك',
major:'الأمراض الجلدية',
department:'دائرة الأمراض الجلدية',
specialmajor:'أخصائي جلدية',
mobileNo:'2378',
emailAddress:'marwa@gmail.com',
attendingstatus:'دوام كلي',
time:'9 صباحا -5 مساء',
},
{
name:'مريم إيهاب',
major:'الأمراض الجلدية',
department:'دائرة الأمراض الجلدية',
specialmajor:'أخصائي جلدية',
mobileNo:'2378',
emailAddress:'mariam@gmail.com',
attendingstatus:'دوام كلي',
time:'9 صباحا -5 مساء',
},
{
name:'رجب العدلي',
major:'الأمراض الجلدية',
department:'دائرة الأمراض الجلدية',
specialmajor:'أخصائي جلدية',
mobileNo:'2378',
emailAddress:'ragab.eladley@gmail.com',
attendingstatus:'دوام كلي',
time:'9 صباحا -5 مساء',
},
{
name:'شريف صبري',
major:'الأمراض الجلدية',
department:'دائرة الأمراض الجلدية',
specialmajor:'أخصائي جلدية',
mobileNo:'2378',
emailAddress:'shareef@gmail.com',
attendingstatus:'دوام كلي',
time:'9 صباحا -5 مساء',
},
{
name:'نرمين أحمد',
major:'الأمراض الجلدية',
department:'دائرة الأمراض الجلدية',
specialmajor:'أخصائي جلدية',
mobileNo:'2378',
emailAddress:'nermeen.ahmed@gmail.com',
attendingstatus:'دوام كلي',
time:'9 صباحا -5 مساء',
},
{
name:' هبة الله محمود',
major:'الأمراض الجلدية',
department:'دائرة الأمراض الجلدية',
specialmajor:'أخصائي جلدية',
mobileNo:'2378',
emailAddress:'heba.23@gmail.com',
attendingstatus:'دوام كلي',
time:'9 صباحا -5 مساء',
},
{
name:'سامر سمير',
major:'الأمراض الجلدية',
department:'دائرة الأمراض الجلدية',
specialmajor:'أخصائي جلدية',
mobileNo:'2378',
emailAddress:'samer.s@gmail.com',
attendingstatus:'دوام كلي',
time:'9 صباحا -5 مساء',
},
{
name:'تامر سيد',
major:'الأمراض الجلدية',
department:'دائرة الأمراض الجلدية',
specialmajor:'أخصائي جلدية',
mobileNo:'2378',
emailAddress:'TamerSayed@gmail.com',
attendingstatus:'دوام كلي',
time:'9 صباحا -5 مساء',
},
{
name:'محمد حسن',
major:'الأمراض الجلدية',
department:'دائرة الأمراض الجلدية',
specialmajor:'أخصائي جلدية',
mobileNo:'2378',
emailAddress:'Mo.hassan@gmail.com',
attendingstatus:'دوام كلي',
time:'9 صباحا -5 مساء',
},
{
name:'مروة عبدالملك',
major:'الأمراض الجلدية',
department:'دائرة الأمراض الجلدية',
specialmajor:'أخصائي جلدية',
mobileNo:'2378',
emailAddress:'marwa.3@gmail.com',
attendingstatus:'دوام كلي',
time:'9 صباحا -5 مساء',
},
{
name:'مريم إيهاب',
major:'الأمراض الجلدية',
department:'دائرة الأمراض الجلدية',
specialmajor:'أخصائي جلدية',
mobileNo:'2378',
emailAddress:'M.ehab@gmail.com',
attendingstatus:'دوام كلي',
time:'9 صباحا -5 مساء',
}


]
  return (
    <div className='container'> 
    <div className='doc-table mt-5 table-responsive'>
    <h1>مواعيد حضور الدكاترة</h1>
<table className="table ">
  <thead>
    <tr className='doc'>
      <th scope="col">#</th>
      <th scope="col">الدكتور/ة</th>
      <th scope="col">التخصص</th>
      <th scope="col">القسم</th>
      <th scope="col">التخصص الدقيق</th>
      <th scope="col">رقم الهاتف </th>
      <th scope="col">البريد الإلكتروني</th>
      <th scope="col">حالة الدوام</th>
      <th scope="col">مواعيد الحضور</th>
    </tr>
  </thead>
  <tbody>
      {doctorsInfo.map((element,i)=>(
    <tr>
      <th scope="row" className='doc' >{i+1}</th>
      <td>{element.name} </td>
      <td>{element.major} </td>
      <td>{element.department} </td>
      <td>{element.specialmajor} </td>
      <td>{element.mobileNo} </td>
      <td>{element.emailAddress} </td>
      <td>{element.attendingstatus} </td>
      <td>{element.time} </td>
    </tr>
   
     ))}
  </tbody>
</table>

</div>
</div>
  )
}

export default DoctorPage