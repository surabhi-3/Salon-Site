import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';      // keep default styles or Tailwind later
import SalonApp from './SalonApp';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SalonApp />
  </React.StrictMode>
);
