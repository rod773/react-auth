import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.scss";
import "bootstrap/dist/js/bootstrap.bundle"

const root = ReactDOM.createRoot( document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
 
);
