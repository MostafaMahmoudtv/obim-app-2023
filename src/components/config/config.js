import { createChatBotMessage } from 'react-chatbot-kit';
import ChatbotQue from '../ChatbotQue';
import CoBotAvatar from '../CoBotAvatar';











const config ={



    
    initialMessages: [createChatBotMessage(`اهلا بك في موقع عيادة OBIM`)],
    customComponents: { botAvatar: (props) => <CoBotAvatar {...props} /> },
    widgets: [
        {
          widgetName: 'chatbotque',
          widgetFunc: (props) => <ChatbotQue {...props} />,
          
        },
      ],
    customStyles: {
      botMessageBox: {
        backgroundColor: '#376B7E',
      },
      chatButton: {
        backgroundColor: '#5ccc9d',
      },
    },
  };

export default config;