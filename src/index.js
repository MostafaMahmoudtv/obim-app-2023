import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StateContext from './context/ContextState';
import { AuthProvider } from './context/AuthProvider';
import { Toaster } from 'react-hot-toast';
import { Provider } from "react-redux";
import { store } from "./pages/MapTest/store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    
    <StateContext>
      <AuthProvider>
              <Toaster />
              <Provider store={store}>
    <App />
    </Provider>
    </AuthProvider>
    </StateContext>
   
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
