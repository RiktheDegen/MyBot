import React from 'react'
import ReactDOM from 'react-dom/client'
import AppEmbed from './App.jsx'
import './index.css'


const widgetDivs = document.querySelectorAll('.Api-chat-widget');

console.log(widgetDivs);

widgetDivs.forEach(div => {
 const root = ReactDOM.createRoot(div);
 console.log(div.dataset.symbol);
 root.render(
   <React.StrictMode>
    <AppEmbed symbol={div.dataset.symbol}/>
   </React.StrictMode>
 );
});


