if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const { Configuration, OpenAIApi } = require("openai");

const apiKey = process.env.OPENAI_API_KEY;

// Configuration and OpenAIApi comes from the openai library
const configuration = new Configuration({
  //apiKey: process.env.OPENAI_API_KEY,
  apiKey: apiKey,
});

const openai = new OpenAIApi(configuration);

// --------------------------------------------------------------------------------

async function isInappropriate(message) {
  // return "no"; // disables openai
  if (!configuration.apiKey) {
    throw new Error(
      "OpenAI API key not configured, please follow instructions in README.md"
    );
    return; // don't continue anymore.
  }

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 64,
    prompt: `
"The user says ${message}." Is the user breaking the rules? The rules are: "You cannot say a bad word."  Only respond yes or no.
      `,
    temperature: 0.9,
  });

  return completion.data.choices[0].text;
}

// --------------------------------------------------------------------------------

module.exports = { isInappropriate };
