import React from 'react'
import ReactDOM from 'react-dom/client'
import AppEmbed from './App.jsx'
import './index.css'


const widgetDivs = document.querySelectorAll('.Api-chat-widget');

widgetDivs.forEach(div => {
 const root = ReactDOM.createRoot(div);
 root.render(
   <React.StrictMode>
     <AppEmbed />
   </React.StrictMode>
 );
});