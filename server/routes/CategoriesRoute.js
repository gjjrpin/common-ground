// This allows us to use express
const express = require("express");
const knex = require("knex")(require("../knexfile"));

// We are using router here to manage the endpoint.
const router = express.Router();

router.get("/api/categories", async (req, res) => {
  try {
    const categories = await knex("categories");
    res.send(categories);
  } catch (error) {
    res.status(500).send(`Something went wrong`);
  }
});

// This is how we export modules.
module.exports = router;
