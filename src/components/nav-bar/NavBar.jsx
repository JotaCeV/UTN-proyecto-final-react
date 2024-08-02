import { Link } from "react-router-dom";
import "./navbar-styles.css";

function NavBar() {
  return (
    <nav className="nav-container">
      <Link to="/">
        <svg
          width="70"
          height="70"
          viewBox="0 0 90 90"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="20"
            y="20"
            width="60"
            height="40"
            fill="#f5f6fa"
            stroke="#000"
            strokeWidth="2"
          />
          <rect
            x="25"
            y="25"
            width="50"
            height="30"
            fill="#333"
            stroke="#000"
            strokeWidth="1"
          />
          <rect x="30" y="30" width="40" height="2" fill="#00FF00" />
          <rect x="30" y="35" width="25" height="2" fill="#00FF00" />
          <rect x="30" y="40" width="30" height="2" fill="#00FF00" />
          <rect x="30" y="45" width="10" height="2" fill="#00FF00" />
          <rect
            x="40"
            y="60"
            width="20"
            height="5"
            fill="#f5f6fa"
            stroke="#000"
            strokeWidth="1"
          />
          <rect
            x="35"
            y="65"
            width="30"
            height="5"
            fill="#f5f6fa"
            stroke="#000"
            strokeWidth="1"
          />
        </svg>
      </Link>
      <ul>
        <li>
          <Link to="/history">Historia</Link>
        </li>
        <li>
          <Link to="/game">Juguemos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
