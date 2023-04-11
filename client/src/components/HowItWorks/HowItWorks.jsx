import "./HowItWorks.scss";
import React, { useState } from "react";
import username from "../../assets/images/username.svg";
import prompted from "../../assets/images/prompted.svg";
import chatroom from "../../assets/images/chatroom.svg";
import openai from "../../assets/images/openai.svg";

function HowItWorksPage() {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);

  const handleClick = () => {
    resetAll();
    setActive(!active);
  };
  const handleClick2 = () => {
    resetAll();
    setActive2(!active2);
  };
  const handleClick3 = () => {
    resetAll();
    setActive3(!active3);
  };
  const handleClick4 = () => {
    resetAll();
    setActive4(!active4);
  };
  const handleClick5 = () => {
    resetAll();
    setActive5(!active5);
  };

  function resetAll() {
    setActive(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
  }

  return (
    <div>
      <div className="content">
        <h2 className="content__header">How It Works:</h2>
        <div className="content__image-container">
          <img className="content__image" src={username} alt="username" />
          <h3 className="content__text">
            When you click "Get Started," you'll be asked to enter a username of
            your choice. You don't have to enter your real name, but please be
            respectful. Your username needs to be less than 10 letters and
            contain no special characters or numbers.
          </h3>
        </div>
        <div className="content__image-container">
          <img
            className="content__image content__image--secondary"
            src={prompted}
            alt="prompted"
          />
          <h3 className="content__text">
            You'll then be prompted with a statement that you can either agree
            or disagree with. Keep clicking until you find someone with an
            opposing view. Think of this like Tinder—except you're matching with
            someone you don't see eye to eye with.
          </h3>
          <img
            className="content__image content__image--primary"
            src={prompted}
            alt="prompted"
          />
        </div>
        <div className="content__image-container">
          <img className="content__image" src={chatroom} alt="chatroom" />
          <h3 className="content__text">
            After you match with someone, you'll both enter the chat room. The
            prompt that you both have opposing views on will be at the top of
            the chat room. The idea is to have a civil conversation with a
            person that you would otherwise not talk to.
          </h3>
        </div>
        <div className="content__image-container">
          <img
            className="content__image content__image--secondary"
            src={openai}
            alt="openai"
          />
          <h3 className="content__text">
            OpenAI's ChatGPT is being used to moderate the conversations and
            ensure that all participants can engage in a respectful and safe
            environment. The AI is "trained" to analyze each message and
            prevents users from sending if they broke the rules below.
          </h3>
          <img
            className="content__image content__image--primary"
            src={openai}
            alt="openai"
          />
        </div>
        <div className="content__rules-container">
          <h2 className="content__rules-header">Rules:</h2>
          <div>
            <button
              className={`content__button ${
                active ? "content__info--bold" : "content__button"
              }`}
              onClick={handleClick}
            >
              Respect each other
            </button>
            <div
              className={`content__info ${active ? "content__info" : "none"}`}
            >
              <p className="content__text">
                Both parties must show respect for each other at all times, even
                when discussing controversial or sensitive topics. Insults,
                personal attacks, or offensive language are not allowed.
              </p>
            </div>
          </div>
          <div>
            <button
              className={`content__button ${
                active2 ? "content__info--bold" : "content__button"
              }`}
              onClick={handleClick2}
            >
              Stay on topic
            </button>
            <div
              className={`content__info ${active2 ? "content__info" : "none"}`}
            >
              <p className="content__text">
                Both parties must stay on the topic at hand and avoid bringing
                up unrelated issues. This will help keep the discussion focused
                and prevent it from devolving into a heated argument.
              </p>
            </div>
          </div>
          <div>
            <button
              className={`content__button ${
                active3 ? "content__info--bold" : "content__button"
              }`}
              onClick={handleClick3}
            >
              Use evidence and reason
            </button>
            <div
              className={`content__info ${active3 ? "content__info" : "none"}`}
            >
              <p className="content__text">
                Both parties should back up their arguments with evidence and
                reason. Personal opinions are valid, but they should be
                supported by facts and logic.
              </p>
            </div>
          </div>
          <div>
            <button
              className={`content__button ${
                active4 ? "content__info--bold" : "content__button"
              }`}
              onClick={handleClick4}
            >
              Avoid fallacies
            </button>
            <div
              className={`content__info ${active4 ? "content__info" : "none"}`}
            >
              <p className="content__text">
                Both parties should avoid using logical fallacies, such as ad
                hominem attacks, straw man arguments, or slippery slope
                arguments. These tactics can derail the conversation and prevent
                productive dialogue.
              </p>
            </div>
          </div>
          <div>
            <button
              className={`content__button ${
                active5 ? "content__info--bold" : "content__button"
              }`}
              onClick={handleClick5}
            >
              Agree to disagree
            </button>
            <div
              className={`content__info ${active5 ? "content__info" : "none"}`}
            >
              <p className="content__text">
                If both parties cannot come to an agreement, they should agree
                to disagree respectfully. It is possible to have a civil
                discourse without necessarily changing one's own opinion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorksPage;
