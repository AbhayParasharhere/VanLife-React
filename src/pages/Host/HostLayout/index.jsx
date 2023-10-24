import { NavLink, Outlet } from "react-router-dom";
import "./styles.modules.css";

const HostLayout = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <div>
      <nav className="host-nav">
        <NavLink
          to="."
          end
          style={({ isActive }) => {
            return isActive ? activeStyles : null;
          }}
        >
          Host
        </NavLink>
        <NavLink
          to="income"
          style={({ isActive }) => {
            return isActive ? activeStyles : null;
          }}
        >
          Income
        </NavLink>
        <NavLink
          to="vans"
          style={({ isActive }) => {
            return isActive ? activeStyles : null;
          }}
        >
          Vans
        </NavLink>
        <NavLink
          to="reviews"
          style={({ isActive }) => {
            return isActive ? activeStyles : null;
          }}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HostLayout;
