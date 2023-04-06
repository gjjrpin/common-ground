import "./LandingPage.scss";
import hero from "../../assets/hero.svg";
import React from "react";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import HowItWorks from "../../components/HowItWorks/HowItWorks";

function LandingPage() {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__column">
          <h1 className="hero__title">COMMON GROUND CHAT</h1>
          <div className="hero__link">
            <Link className="hero__button" to="/sorting">
              Get Started
            </Link>
            <a className="hero__button" href="/#how-it-works">
              How It Works
            </a>
          </div>
        </div>
        <div className="hero__column">
          <img className="hero__image" src={hero} alt="hero" />
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
