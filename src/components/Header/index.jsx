import "./styles.modules.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="containerHeader">
      <div className="headerContent">
        <div className="logo">#VANLIFE</div>
        <nav className="navHeader">
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : null)}
            to="host"
          >
            Host
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : null)}
            to="vans"
          >
            Vans
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : null)}
            to="about"
          >
            About
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
