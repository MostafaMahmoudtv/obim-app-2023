import React from 'react';

const ChatFeed = ({ children }) => {
  return (
    <div
      id='chat-feed'
      className='w-100 px-2 d-flex flex-column '
      style={{ height: 'calc(80vh - 100px)' , overflowY:'scroll' }}
    >
      {children}
    </div>
  );
};

export default ChatFeed;