import React from 'react';

const Chat = ({ msg }) => {
  return (
    <div className='d-flex flex-column  my-1 px-3 py-1 bg-gray-100 rounded text-left '>
      <span className='text-brand-100 text-sm font-semibold'>
        {msg.senderName}
      </span>
      <span className='text-gray-300 font-semibold'>{msg.message}</span>
    </div>
  );
};

export default Chat;