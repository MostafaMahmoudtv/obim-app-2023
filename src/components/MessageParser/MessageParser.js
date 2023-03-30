// in MessageParser.js
import React , {useContext} from 'react';




const MessageParser = ({ children, actions }) => {

   


  const parse = (message) => {
    if (message.includes('hello')) {
      actions.handleHello();
    }
    else if (message.includes('اهلا') || message.includes('أهلا')) {
      actions.handleStart();
    }else {
        actions.handleerror();
    }
  };



  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;