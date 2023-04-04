import "./NavBar.scss";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      NAV BAR
      <ul>
        <li>
          <Link to="/">landing</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/sorting">sorting</Link>
        </li>
        <li>
          <Link to="/chat">chat</Link>
        </li>
        <li>
          <Link to="/how-it-works">how-it-works</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
