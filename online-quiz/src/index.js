import React from 'react';
import ReactDOM from 'react-dom/client'; // Essential for React 18+
import './App.css'; // Importing your main styles here
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);