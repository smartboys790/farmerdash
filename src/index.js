import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Sidebar from './Sidebar';
import './App.css'
import ProductPage  from './ProductPage';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <App />
      <ProductPage />
      <Sidebar/>
    </BrowserRouter>
);