import "./HowItWorksPage.scss";
import Footer from "../components/Footer";

function HowItWorksPage() {
  return (
    <>
      <div>
        <h1>HOW IT WORKS PAGE</h1>
        <h2>How It Works</h2>
        <p>
          Common Ground is a full-stack application that utilizes React for the
          front end and Express, Node and MySQL for the back end. The goal of
          the app is to promote constructive conversations and find common
          ground between users. Once you log in, you'll be presented with ten
          questions to which you can either agree or disagree. Based on your
          responses, the app will randomly pair you with another user who shares
          or opposes your views, giving you a chance to engage in a meaningful
          chat. After the conversation, both users can rate each other with a
          thumbs up or down based on the interaction.
        </p>
        <h2>Rules:</h2>
        <ul>
          <li>
            Respect each other: Both parties must show respect for each other at
            all times, even when discussing controversial or sensitive topics.
            Insults, personal attacks, or offensive language are not allowed.
          </li>
          <li>
            Listen actively: Both parties must listen to each other's opinions
            and try to understand their perspective, even if they don't agree
            with it. Avoid interrupting or talking over the other person.
          </li>
          <li>
            Stay on topic: Both parties must stay on the topic at hand and avoid
            bringing up unrelated issues. This will help keep the discussion
            focused and prevent it from devolving into a heated argument.
          </li>
          <li>
            Use evidence and reason: Both parties should back up their arguments
            with evidence and reason. Personal opinions are valid, but they
            should be supported by facts and logic.
          </li>
          <li>
            Avoid fallacies: Both parties should avoid using logical fallacies,
            such as ad hominem attacks, straw man arguments, or slippery slope
            arguments. These tactics can derail the conversation and prevent
            productive dialogue.
          </li>
          <li>
            Take breaks if necessary: If the discussion becomes too heated or
            emotional, both parties should be able to take a break to cool off
            and regroup before continuing the conversation.
          </li>
          <li>
            Agree to disagree: If both parties cannot come to an agreement, they
            should agree to disagree respectfully. It is possible to have a
            civil discourse without necessarily changing one's own opinion.
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default HowItWorksPage;
