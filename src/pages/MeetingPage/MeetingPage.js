import React,{useEffect,useState} from 'react'
import Header from '../../components/meeting/Header'
import Conference from '../../components/meeting/Conference'
import Footer from '../../components/meeting/Footer'
import JoinForm from '../../components/meeting/JoinForm'




import {
    selectIsConnectedToRoom,
    useHMSActions,
    useHMSStore
  } from "@100mslive/react-sdk";



const MeetingPage = () => {

    const isConnected = useHMSStore(selectIsConnectedToRoom);
    const hmsActions = useHMSActions();
  
    useEffect(() => {
      window.onunload = () => {
        if (isConnected) {
          hmsActions.leave();
        }
      };
    }, [hmsActions, isConnected]);



  return (
    <div>
       <Header />
      {isConnected ? (
        <>
          <Conference />
          <Footer />
        </>
      ) : (
        <JoinForm />
      )} 



    </div>
  )
}

export default MeetingPage