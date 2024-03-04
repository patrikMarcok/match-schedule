// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import Routes from './Routes';
import reportWebVitals from './reportWebVitals';



//firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
