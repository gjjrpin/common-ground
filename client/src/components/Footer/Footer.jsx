import "./Footer.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";

function Footer() {
  return (
    <div id="footer">
      <div className="footer">
        <div className="footer__main-container">
          <Link className="footer__logo-link" to="/">
            <img className="footer__logo" src={logo} alt="logo" />
          </Link>
          <div>
            <h3>Tech stack</h3>
          </div>
          <ul>
            <li className="footer__list">React</li>
            <li className="footer__list">Express</li>
            <li className="footer__list">Socket.io</li>
            <li className="footer__list">OpenAI Api</li>
            <li className="footer__list">MySQL</li>
          </ul>
          <div className="footer__list-container">
            <div>
              <h3>Contact</h3>
            </div>
            <ul>
              <li className="footer__list">Twitter</li>
              <li className="footer__list">Linkedin</li>
              <li className="footer__list">Github</li>
            </ul>
          </div>
          <div className="footer__copyright">
            <p className="footer__list">
              Copyright @2023 | Designed By: GJ Pineda
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
