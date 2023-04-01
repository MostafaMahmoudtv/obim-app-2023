import React, { useContext ,useEffect,useState } from 'react'
import { Context } from '../../context/ContextState'

const AdminPage = () => {
const context = useContext(Context)
const {bookedToday,setbookedToday} = context

let adminLocal =  localStorage.getItem('UsersDetails')


   
      

useEffect(() => {
  console.log(JSON.parse(adminLocal).bookedAppointements)

    if((JSON.parse(adminLocal).bookedAppointements).length >= 1){
         var dtToday = new Date();
    
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
    
    var maxDate = year + '-' + month + '-' + day;

let userbookedarray3 = (JSON.parse(adminLocal).bookedAppointements).filter(element => {
console.log(element.date)
console.log(maxDate , " max")

 return element.date === maxDate



})
console.log(userbookedarray3)
    setbookedToday(userbookedarray3)
}
    
},[])









  return (
    <div className='reception mt-5'>
        <div className='container  mt-3 p-4'>
<h1> مواعيد المرضى بتاريخ اليوم  </h1>
<div className='doc-table  table-responsive'>
     {/* <h1 className={filteredEgyId.length ? "d-none" : "d-block"}>  لا يوجد مواعيد محجوزة لهذا الرقم القومي</h1>  
    <h1 className={filteredEgyId.length ? "d-block" : "d-none"}>  المواعيد المحجوزة</h1> */}
<table  className={bookedToday.length ? "table" : "d-none"}>
  <thead>
    <tr className='doc'>
      <th scope="col">#</th>
      <th scope="col">الاسم</th>
      <th scope="col">القسم</th>
      <th scope="col">التاريخ</th>
      
    </tr>
  </thead>
  <tbody>
      {bookedToday.map((element,i)=>(
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









        </div>





    </div>
  )
}

export default AdminPage