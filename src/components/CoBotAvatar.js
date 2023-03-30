import React from "react";

import logo from '../Assets/obim.jpg'


const CoBotAvatar = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div
        className="react-chatbot-kit-chat-bot-avatar-container"
        style={{ background: "none" }}
      >
        <img alt="BotAvatar" style={{width:"40px" , border:"2px solid #ccc" , borderRadius:"50%" , marginLeft:"10px"}} src={logo} />
      </div>
    </div>
  );
};

export default CoBotAvatar;
