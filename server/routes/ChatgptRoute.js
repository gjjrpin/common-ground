require("dotenv").config();
// This allows us to use express
const express = require("express");
const router = express.Router();
const openai = require("../utilities/openai.js");

router.get("/isappropriate", async (req, res) => {
  try {
    const { message_1, message_2 } = req.query;
    const response = await openai.isAppropriate(message_1, message_2);

    res.status(200).json({ result: response.data.choices[0].text });
  } catch (error) {
    console.log(error);
    res.status(500).send("Something Went Wrong!");
  }
});

// --------------------------------------------------------------------------------

router.get("/joke", async (req, res) => {
  try {
    const response = await openai.generateJoke();

    res.status(200).json({ result: response.data.choices[0].text });
  } catch (error) {
    console.log(error);
    res.status(500).send("Something Went Wrong!");
  }
});

// This is how we export modules.
module.exports = router;
