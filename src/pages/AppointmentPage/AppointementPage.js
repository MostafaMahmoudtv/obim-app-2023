import React from 'react'
import './appointementpage.css'
import appointemntImage from '../../Assets/young-handsome-physician-medical-robe-with-stethoscope.jpg'
import AppointForm from '../../components/AppointForm/AppointForm'
const AppointementPage = () => {
  return (
    <div className='appointement'>
        <div className='container'>
        <div className='row ps-5 pe-5 mt-5 '>
         <div className='col-lg-6 col-md-6 col-sm-12 p-0 appoint-image-parent'>
         <img className='appoint-image ' src={appointemntImage} alt="doctor" />

         </div>
         <div className='col-lg-6 col-md-6 col-sm-12 p-0  appointform d-flex justify-content-center'>
           <AppointForm/>

         </div>




        </div>



        </div>




    </div>
  )
}

export default AppointementPage