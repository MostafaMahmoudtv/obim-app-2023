import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

import Register from './components/Register/Register';
import React,{useContext  ,useEffect, useState} from 'react'
import { Context } from './context/ContextState';
import HeroSlider from './components/HeroSlider/HeroSlider';
import Options from './components/Options/Options';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppointementPage from './pages/AppointmentPage/AppointementPage';
import BookedPage from './pages/BookedPage/BookedPage';
import BurgerMenu from './components/Navbar/BurgerMenu';
import DoctorPage from './pages/DoctorPage/DoctorPage';
import VisitingTimes from './pages/VisitingTimes/VisitingTimes';
import Achievements from './pages/Achievements/Achievements';
import MedicalRecord from './pages/MedicalRecord/MedicalRecord';
import AdminPage from './pages/AdminPage/AdminPage';
import DoctorsVacation from './pages/DoctorsVacation/DoctorsVacation';
import Departments from './pages/departments/Departments';
import Footer from './components/Footer/Footer';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css';
import MessageParser from './components/MessageParser/MessageParser';
import ActionProvider from './components/ActionProvider/ActionProvider';
import config from './components/config/config';
import {AiFillMessage} from 'react-icons/ai'
import {IoIosArrowDropdownCircle} from 'react-icons/io'
import MapComponent from './pages/MapTest/MapTest';
import MeetingIcon from './components/MeetingIcon/MeetingIcon';
import MeetingPage from './pages/MeetingPage/MeetingPage';
import QRCode from './components/QRCode/QRCode';
import QRCodePopup from './QRCodePopup';





function App() {
  const context = useContext(Context)
  const {user,setuser,password,setpassword,userValidation,setuserValidation ,usersArray,LogIn,saveuser, showNewReg ,  setshowNewReg , showburgermenu, setshowburgermenu} = context
const [chatbot, setchatbot] = useState(false)
const [closechatbot, setclosechatbot] = useState(false)
const [qrcodechecker, setqrcodechecker] = useState('')



const handlebotopen= () =>{

  setchatbot(true)
setclosechatbot(true)

}
const handlebotclose= () =>{

  setchatbot(false)
setclosechatbot(false)

}







const username = `اهلا (${saveuser}) في المحادثة`

useEffect(() => {

  let userbookedarray3 = (usersArray.bookedAppointements).filter(element => {
    console.log(element.name)
    console.log(saveuser)
    
     return element.name === saveuser
    
    
    
    })
console.log(userbookedarray3)
    setqrcodechecker(userbookedarray3)




}, [usersArray , LogIn ])




const [handleQr, sethandleQr] = useState(false)



  return ( 
    <div className="App">
      
      <BrowserRouter>
{ showburgermenu ? <BurgerMenu/> :'' }
{showNewReg ? <Register/> : '' }
{saveuser ?  <MeetingIcon  active={"active-meeting-icon"}  /> :  <MeetingIcon  active={"meeting-icon"}  /> }
{saveuser && qrcodechecker.length >= 1 ?  <QRCode  sethandleQr={sethandleQr}  active={"active-qr-icon"}  /> :  <QRCode  active={"qr-icon"}  /> }
   { handleQr &&  <QRCodePopup sethandleQr={sethandleQr} />}
      <Navbar/>
      
      <Routes>

      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/حجز-المواعيد" element={<AppointementPage/>}></Route>
      <Route path="/مواعيد-حجز-المريض" element={<BookedPage/>}></Route>
      <Route path="/مواعيد-حضور-الدكاترة" element={<DoctorPage/>}></Route>
      <Route path="/أوقات-الزيارة" element={<VisitingTimes/>}></Route>
      <Route path="/الإنجازات الطبية" element={<Achievements/>}></Route>
      <Route path="/السجل-الطبي" element={<MedicalRecord/>}></Route>
      <Route path="/admin/receptionist" element={<AdminPage/>}></Route>
      <Route path="/إجازة-الأطباء" element={<DoctorsVacation/>}></Route>
      <Route path="/التخصصات-المتاحة" element={<Departments/>}></Route>
      <Route path="/map" element={<MapComponent/>}   ></Route>
      <Route path="/meeting" element={<MeetingPage/>}   ></Route>

      </Routes>
<Footer/>
<div className='chatbot'>
{LogIn && !closechatbot  && 
<AiFillMessage color='green'  onClick={() =>   handlebotopen()   }  />
}
{chatbot &&

<div className='chatbot-content'>
<IoIosArrowDropdownCircle  color='green' onClick={() => handlebotclose()} />

<Chatbot
       config={config}
       messageParser={MessageParser}
       actionProvider={ActionProvider}
       headerText= {username} 
       placeholderText='اكتب أي كلمة مثال : أهلا'
       />
       </div>
       
}
       </div>
      </BrowserRouter>

      
      {/* <Home/> */}
    </div>
  );
}

export default App ;
