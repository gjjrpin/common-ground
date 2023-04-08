import "./LandingPage.scss";
import hero from "../../assets/hero.svg";
import React from "react";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import HowItWorks from "../../components/HowItWorks/HowItWorks";

function LandingPage() {
  return (
    <div id="home" className="hero">
      <div className="hero__container">
        <div className="hero__column">
          <h1 className="hero__header">Bridge the Divide</h1>
          <h3 className="hero__sub-header">
            Connect with people holding opposing views through honest and
            respectful conversations.
          </h3>
          <div className="hero__link">
            <Link className="hero__button" to="/login">
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
