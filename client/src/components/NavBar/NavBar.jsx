import "./NavBar.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

function NavBar() {
  return (
    <nav className="nav">
      <Link>
        <img className="nav__logo" src={logo} alt="logo" />
      </Link>
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="/#home">
            Home
          </a>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/login">
            Get Started
          </Link>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/#how-it-works">
            How It Works
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
