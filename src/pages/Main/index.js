import { Routes, Route } from 'react-router-dom';
import BusSpeeds from '../../routes/bus-speeds';
import SDCards from '../../routes/sd-cards';
import SpeedClasses from '../../routes/speed-classes';
import CapacityTypesAndFormFactors from '../../routes/capacity-types-and-form-factors';

const Main = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Routes>
        <Route exact path="sd_cards" element={<SDCards />} />
        <Route
          path="capacity_types_and_form_factors"
          element={<CapacityTypesAndFormFactors />}
        />
        <Route path="speed_classes" element={<SpeedClasses />} />
        <Route path="bus_speeds" element={<BusSpeeds />} />
      </Routes>
    </div>
  );
};

export default Main;
