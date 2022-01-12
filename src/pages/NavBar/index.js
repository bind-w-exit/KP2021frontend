import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', flexDirection: 'column' }}>
      <NavLink to="/sd_cards">SD cards</NavLink>
      <NavLink to="/capacity_types_and_form_factors">
        Capacity types and form factors
      </NavLink>
      <NavLink to="/speed_classes">Speed classes</NavLink>
      <NavLink to="/bus_speeds">Bus speeds</NavLink>
    </nav>
  );
};

export default NavBar;
