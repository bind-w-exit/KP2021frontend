import './App.css';
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <div className="App-header">
        Header
      </div>
      <nav>
        <Link to="/sd_cards">SD cards</Link> |{" "}
        <Link to="/capacity_types_and_form_factors">Capacity types and form factors</Link> |{" "}
        <Link to="/speed_classes">Speed classes</Link> |{" "}
        <Link to="/bus_speeds">Bus speeds</Link>
      </nav>
      <Outlet />
    </div>
  );
}