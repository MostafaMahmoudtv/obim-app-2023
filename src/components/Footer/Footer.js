import React from 'react'
import logo from '../../Assets/obim-removebg-preview.png'
import './footer.css'
import {Link} from 'react-router-dom'




const Footer = () => {

const scrolling =(e)=>{
console.log(e)
window.scroll({top:'0', behavior:'smooth'})


}




  return (
    <div className='footer  p-4'>
<div className='container'>
<div className='row'>
<div className='col-lg-4 col-md-12 col-sm-12 mb-md-5 mb-sm-5'>
<h3 className='mb-3'>OBIM APP </h3>
<a  href='http://localhost:3000/'>

  <div style={{cursor:"pointer"}} className='logo'>
        <img src={logo} alt="hospital"/>
    </div>
</a>
</div>
<div className='col-lg-4 col-md-6 col-sm-6  ' >
<h3 className='mb-3'>  الروابط المهمة</h3>
<Link onClick={scrolling} to='/حجز-المواعيد'>
    <p>حجز المواعيد</p>
</Link>
<Link onClick={scrolling} to='/إجازة-الأطباء'>
    <p>إجازة الأطباء</p>
</Link>
<Link onClick={scrolling} to='/التخصصات-المتاحة'>
    <p>التخصصات المتاحة</p>
</Link>
<Link onClick={scrolling} to='/مواعيد-حضور-الدكاترة'>
    <p>مواعيد حضور الدكاترة</p>
</Link>


</div>
<div className='col-lg-4 col-md-6 col-sm-6'>
<h3 className='mb-3'>  تابعونا على </h3>

<a target='blank' href='https://www.facebook.com/Mostafamahmoudtv'>
    <p>الفيسبوك </p>
</a>
<a target='blank' href='https://www.facebook.com/Mostafamahmoudtv'>
    <p>تويتر </p>
</a>
<a target='blank' href='https://www.youtube.com/@MostafaMahmoudTV/videos'>
    <p>رابط اليوتيوب الخاص بنا </p>
</a>
<a target='blank' href='https://www.youtube.com/@MostafaMahmoudTV/videos'>
    <p>ويكيبيديا  </p>
</a>

</div>










</div>









    </div>
    </div>
  )
}

export default Footer



