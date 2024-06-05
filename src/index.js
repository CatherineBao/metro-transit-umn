import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Ticket from './pages/Ticket'
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <div className="bg-black">
        < App />
        <Routes>
          <Route path="/Ticket" element={<Ticket />} />
        </Routes>
      </div>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
