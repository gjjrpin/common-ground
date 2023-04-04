require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

const apiKey = process.env.OPENAI_API_KEY;

// Configuration and OpenAIApi comes from the openai library
const configuration = new Configuration({
  //apiKey: process.env.OPENAI_API_KEY,
  apiKey: apiKey,
});

const openai = new OpenAIApi(configuration);

// --------------------------------------------------------------------------------

async function isAppropriate(message_1, message_2) {
  if (!configuration.apiKey) {
    throw new Error(
      "OpenAI API key not configured, please follow instructions in README.md"
    );
    return; // don't continue anymore.
  }

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `
"User1 says ${message_1} User2 says ${message_2}." Are either users breaking the rules? The rule is: No swearing.
      `,
    temperature: 0.6, // Accuracy?
  });
  console.log(completion.data.choices[0].text);
  return completion;
}

// --------------------------------------------------------------------------------

async function generateJoke() {
  if (!configuration.apiKey) {
    throw new Error(
      "OpenAI API key not configured, please follow instructions in README.md"
    );
    return; // don't continue anymore.
  }

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "tell me a joke about web developers",
    temperature: 0.6, // Accuracy?
  });
  console.log(completion.data.choices[0].text);
  return completion;
}

// --------------------------------------------------------------------------------

module.exports = { isAppropriate, generateJoke };
