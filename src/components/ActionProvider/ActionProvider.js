// in ActionProvider.jsx
import React from 'react';




const ActionProvider = ({ createChatBotMessage, setState, children }) => {


 

  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };


  const handleStart = () => {
    const botMessage = createChatBotMessage(
      "كيف يمكنني مساعدتك ، بالأسفل اختيارات ممكنة:",
      {
        widget: 'chatbotque',
        withAvatar:false
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleerror = () => {
    const botMessage = createChatBotMessage(
      "عذرا ، قم بإدخال الكلام بشكل صحيح",
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleStart,
            handleerror
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;