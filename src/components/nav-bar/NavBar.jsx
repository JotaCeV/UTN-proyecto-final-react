import { Link } from "react-router-dom";
import "./navbar-styles.css";

function NavBar() {
  return (
    <nav className="nav-container">
      <Link to="/">
        <h1>Logo</h1>
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
