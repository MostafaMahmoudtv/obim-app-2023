import React from 'react'
import "./vsitingtimes.css"
import fayum from '../../Assets/جامعة الفيوم.jpg'


const VisitingTimes = () => {
  return (
    <div className='visiting-time'>
<div className='container mt-5 pt-4 d-flex justify-content-center'>
<div className='time-content mb-3 '>
<div className='title  d-flex align-items-center justify-content-between'>
<p className='fs-2  fw-bold pe-3'>أوقات ونظام الزيارة</p>
<img src={fayum} alt="جامعة الفيوم"/>
</div>
<div className='bar' style={{backgroundColor:"rgba(129, 33, 219, 0.762)",height:'30px'}}>

</div>
<div className='p-3 border-bottom greetings fw-bold' >
الأخوة زوّار ومرضى مستشفى جامعة الفيوم


</div>
<div className='info'>
<p className='mb-3 p-2'>حرصا من إدارة المستشفى على حماية حقوق المرضى وراحتهم وعدم إزعاجهم وضمانا لسلامتهم تم تحديد ساعات الزيارة في المستشفى خلال

أيام الأسبوع من الساعة الرابعة وحتى الساعة السابعة مساءاً.</p>
<p className='mb-3 p-2'>وفي أيام العطل والأعياد من الساعة 11 صباحاً ولغاية الساعة 6 مساءاً.

</p>
<p className='mb-3 p-2'>يرجى عدم اصطحاب الأطفال تحت سن 12 سنة.

</p>
<p className='mb-3 p-2'>يرجى الالتزام بعدم إدخال المأكولات للمرضى حيث أنّ تغذية المريض تتم حسب إرشادات الطبيب المعالج وتقييم أخصّائيي التغذية.



</p>
<p className='mb-3 p-2'>
<strong><em>متمنّين للجّميع السلامة والشّفاء العاجل
</em></strong>

</p>


</div>




</div>





</div>


    </div>
  )
}

export default VisitingTimes