require("dotenv").config();
// This allows us to use express
const express = require("express");
const router = express.Router();
const openai = require("../utilities/openai.js");

router.get("/inappropriate", async (req, res) => {
  try {
    const { message } = req.data;
    const response = await openai.isInappropriate(message);

    res.status(200).json({ result: response.data.choices[0].text });
  } catch (error) {
    console.log(error);
    res.status(500).send("Something Went Wrong!");
  }
});

// --------------------------------------------------------------------------------

module.exports = router;

const topics = [
  {
    topic_prompt: "Do you believe in x",
    queues: {
      agree: [], // 005 is user_id
      disagree: [],
    },
  },
  {
    topic_prompt: "Do you believe in a",
    queues: {
      agree: [],
      disagree: [],
    },
  },
  {
    topic_prompt: "Do you believe in b",
    queues: {
      agree: [],
      disagree: [],
    },
  },
  {
    topic_prompt: "Do you belive in c",
    queues: {
      agree: [],
      disagree: [],
    },
  },
];

//chatroom (001, 002)

// Random prompt - Do you believe i Russia?
// Agree     queueAgree[y] prompt3
// Disagree  queueDisagree[] prompt3

// Random prompt - Do you believe i Jesus?
// Agree     queueAgree[y]    of prompt2
// Disagree  queueDisagree[]   of prompt2

// Random prompt - Do you believe i naborstion?
// Agree     queueAgree[] of prompt1
// Disagree  queueDisagree[] of prompt1
