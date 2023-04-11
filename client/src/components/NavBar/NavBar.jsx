import "./NavBar.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";

function NavBar() {
  return (
    <nav className="nav">
      <a className="nav__logo-container" href="/#home">
        <img className="nav__logo" src={logo} alt="logo" />
      </a>
      <ul className="nav__list">
        <li className="nav__item nav__item--active">
          <Link className="nav__link" to="/login">
            Get Started
          </Link>
        </li>
        <li className="nav__item nav__item--margin">
          <a className="nav__link" href="/#how-it-works">
            How It Works
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
