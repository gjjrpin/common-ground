import "./LandingPage.scss";
import hero from "../../assets/hero.svg";
import React from "react";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import HowItWorks from "../../components/HowItWorks/HowItWorks";

function LandingPage() {
  return (
    <div className="content container">
      <div className="content__container">
        <div className="content__column">
          <h1 className="content__title">COMMON GROUND</h1>
          <div className="content__link">
            <Link className="content__button" to="/sorting">
              Get Started
            </Link>
            <a className="content__button" href="/#how-it-works">
              How It Works
            </a>
          </div>
        </div>
        <div className="content__column">
          <img className="content__image" src={hero} alt="hero" />
        </div>
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
