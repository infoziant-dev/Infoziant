import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Add Jotform Agent script
const addJotformScript = () => {
  const script = document.createElement('script');
  script.src = 'https://cdn.jotfor.ms/agent/embedjs/0196c83366b37995aa24907c2f61e9c41a50/embed.js?skipWelcome=1&maximizable=1';
  script.async = true;
  document.body.appendChild(script);
};

// Add the script after React has mounted
window.onload = () => {
  addJotformScript();
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();