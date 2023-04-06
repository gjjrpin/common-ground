import "./Footer.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

function Footer() {
  return (
    <div className="footer">
      <ul className="footer__container">
        <div className="footer__logo-container">
          <Link className="footer__logo-link" to="/">
            <img className="footer__logo" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="footer__main-container">
          <div className="footer__list-container">
            <li className="footer__list">Twitter</li>
            <li className="footer__list">Linkedin</li>
            <li className="footer__list">Github</li>
          </div>
          <div className="footer__copyright">
            {" "}
            <li className="footer__list">
              Copyright @2023 | Designed By: GJ Pineda
            </li>
          </div>
        </div>
      </ul>
    </div>
  );
}

export default Footer;
