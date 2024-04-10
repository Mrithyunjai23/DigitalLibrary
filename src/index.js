import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FormComponent from './components/FormComponent';
//import Bday from './Birthday/Bday.js';
//import Reception from './Reception/Reception.js';
//import reportWebVitals from './reportWebVitals';
//import AppBar  from './Appbar/Appbar.js';
//import Home from './Home/Home.js';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <FormComponent/>
    {/* <App/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
