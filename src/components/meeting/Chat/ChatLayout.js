import React from 'react';

const ChatLayout = ({ children }) => {
  return (
    <div style={{backgroundColor: 'blue'}} className='d-flex flex-column w-80  rounded chat-shadow position-relative'>
      <div style={{color: '#fff' , fontSize:'18px'}} className='font-bold text-lg my-1 py-1 border-b border-gray-100'>
        الرسائل
      </div>
      {children}
    </div>
  );
};

export default ChatLayout;