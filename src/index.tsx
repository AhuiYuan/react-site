import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <React.StrictMode>
        <Routes>
            <Route path='*' Component={App}/>
        </Routes>
        </React.StrictMode>
    </BrowserRouter>
);

reportWebVitals();
