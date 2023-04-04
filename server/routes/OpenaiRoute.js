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