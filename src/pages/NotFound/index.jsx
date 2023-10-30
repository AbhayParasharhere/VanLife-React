import { Link } from "react-router-dom";
import "./styles.modules.css";

const NotFound = () => {
  return (
    <div className="notFoundContainer">
      <h1>Sorry, the page you were looking for was not found.</h1>
      <div className="returnHome">
        <Link to="/">
          <span>Return to home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
