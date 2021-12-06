import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import BusSpeeds from './routes/bus-speeds';
import SDCards from './routes/sd-cards';
import SpeedClasses from './routes/speed-classes';
import CapacityTypesAndFormFactors from './routes/capacity-types-and-form-factors';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="sd_cards" element={<SDCards />} />
        <Route path="capacity_types_and_form_factors" element={<CapacityTypesAndFormFactors />} />
        <Route path="speed_classes" element={<SpeedClasses />} />
        <Route path="bus_speeds" element={<BusSpeeds />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

