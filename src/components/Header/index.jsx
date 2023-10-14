import "./styles.modules.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="containerHeader">
      <div className="headerContent">
        <div className="logo">#VANLIFE</div>
        <nav className="navHeader">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
