import {
    selectIsConnectedToRoom,
    useHMSActions,
    useHMSStore
  } from "@100mslive/react-sdk";
  import React from "react";
import './meeting.css'
  


  function Header() {
    const isConnected = useHMSStore(selectIsConnectedToRoom);
    const hmsActions = useHMSActions();
  
    return (
      <header>
        
        {isConnected && (
          <button
            id="leave-btn"
            className="btn-danger"
            onClick={() => hmsActions.leave()}
          >
            غادر المحادثة
          </button>
        )}
      </header>
    );
  }
  
  export default Header;
  