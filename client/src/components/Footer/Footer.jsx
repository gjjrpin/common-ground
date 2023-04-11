import "./Footer.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
import leetcode from "../../assets/icons/leetcode.svg";

function Footer() {
  return (
    <div id="footer">
      <div className="footer">
        <div>
          <h3>Contact</h3>
        </div>
        <div className="footer__container">
          <div className="footer__icon-container">
            <a href="https://www.linkedin.com/in/gj-pineda/">
              <img className="footer__icon" src={linkedin} alt="linkedin" />
            </a>
            <a href="https://github.com/gjjrpin">
              <img className="footer__icon" src={github} alt="github" />
            </a>
            <a href="https://leetcode.com/gjjrpin/">
              <img className="footer__icon" src={leetcode} alt="leetcode" />
            </a>
          </div>
          <div>
            <h3>Tech stack</h3>
          </div>
          <ul className="footer__list-container">
            <li className="footer__list">React</li>
            <li className="footer__list">Express</li>
            <li className="footer__list">Socket.io</li>
            <li className="footer__list">OpenAI Api</li>
            <li className="footer__list">MySQL</li>
          </ul>
        </div>
        <Link to="/">
          <img className="footer__logo" src={logo} alt="logo" />
        </Link>
        <div className="footer__copyright">
          <p>Copyright @2023 | Created By: GJ Pineda</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
