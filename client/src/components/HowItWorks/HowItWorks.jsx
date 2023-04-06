import "./HowItWorks.scss";
import React, { useState } from "react";

function HowItWorksPage() {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [active6, setActive6] = useState(false);
  const [active7, setActive7] = useState(false);

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
  const handleClick6 = () => {
    resetAll();
    setActive6(!active6);
  };
  const handleClick7 = () => {
    resetAll();
    setActive7(!active7);
  };

  function resetAll() {
    setActive(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive6(false);
    setActive7(false);
  }

  return (
    <div>
      <div className="content">
        <h2>How It Works:</h2>
        <p>
          "When you click "Get Started", you'll be prompted a statement that you
          can either agree or disagree with. You'll need to keep clicking away
          until you find someone who disagrees with you so much that you just
          have to talk it out.
          <br />
          <br />
          Think of this like Tinder, but instead of swiping left or right for a
          quick hookup, you're swiping for someone to argue with.
          <br />
          <br />
          But in all seriousness, this app is all about finding common ground
          with someone who sees things differently than you do. With so much
          division in the world, you'd be surprised how many things you'll have
          in common with someone you don't agree with.
          <br />
        </p>
        <h2>Rules:</h2>
        <div className="content__wrapper">
          <button
            className={`content__button ${
              active ? "content__info--bold" : "content__button"
            }`}
            onClick={handleClick}
          >
            Respect each other
          </button>
          <div className={`content__info ${active ? "content__info" : "none"}`}>
            <p className="content__text">
              Both parties must show respect for each other at all times, even
              when discussing controversial or sensitive topics. Insults,
              personal attacks, or offensive language are not allowed.
            </p>
          </div>
        </div>
        <div className="content__wrapper">
          <button
            className={`content__button ${
              active2 ? "content__info--bold" : "content__button"
            }`}
            onClick={handleClick2}
          >
            Listen actively
          </button>
          <div
            className={`content__info ${active2 ? "content__info" : "none"}`}
          >
            <p className="content__text">
              Both parties must listen to each other's opinions and try to
              understand their perspective, even if they don't agree with it.
              Avoid interrupting or talking over the other person.
            </p>
          </div>
        </div>
        <div className="content__wrapper">
          <button
            className={`content__button ${
              active3 ? "content__info--bold" : "content__button"
            }`}
            onClick={handleClick3}
          >
            Stay on topic
          </button>
          <div
            className={`content__info ${active3 ? "content__info" : "none"}`}
          >
            <p className="content__text">
              Both parties must stay on the topic at hand and avoid bringing up
              unrelated issues. This will help keep the discussion focused and
              prevent it from devolving into a heated argument.
            </p>
          </div>
        </div>
        <div className="content__wrapper">
          <button
            className={`content__button ${
              active4 ? "content__info--bold" : "content__button"
            }`}
            onClick={handleClick4}
          >
            Use evidence and reason
          </button>
          <div
            className={`content__info ${active4 ? "content__info" : "none"}`}
          >
            <p className="content__text">
              Both parties should back up their arguments with evidence and
              reason. Personal opinions are valid, but they should be supported
              by facts and logic.
            </p>
          </div>
        </div>
        <div className="content__wrapper">
          <button
            className={`content__button ${
              active5 ? "content__info--bold" : "content__button"
            }`}
            onClick={handleClick5}
          >
            Avoid fallacies
          </button>
          <div
            className={`content__info ${active5 ? "content__info" : "none"}`}
          >
            <p className="content__text">
              Both parties should avoid using logical fallacies, such as ad
              hominem attacks, straw man arguments, or slippery slope arguments.
              These tactics can derail the conversation and prevent productive
              dialogue.
            </p>
          </div>
        </div>
        <div className="content__wrapper">
          <button
            className={`content__button ${
              active6 ? "content__info--bold" : "content__button"
            }`}
            onClick={handleClick6}
          >
            Take breaks if necessary
          </button>
          <div
            className={`content__info ${active6 ? "content__info" : "none"}`}
          >
            <p className="content__text">
              If the discussion becomes too heated or emotional, both parties
              should be able to take a break to cool off and regroup before
              continuing the conversation.
            </p>
          </div>
        </div>
        <div className="content__wrapper">
          <button
            className={`content__button ${
              active7 ? "content__info--bold" : "content__button"
            }`}
            onClick={handleClick7}
          >
            Agree to disagree
          </button>
          <div
            className={`content__info ${active7 ? "content__info" : "none"}`}
          >
            <p className="content__text">
              If both parties cannot come to an agreement, they should agree to
              disagree respectfully. It is possible to have a civil discourse
              without necessarily changing one's own opinion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorksPage;
