// This allows us to use express
const express = require("express");
const knex = require("knex")(require("../knexfile"));

// We are using router here to manage the endpoint.
const router = express.Router();

router.get("/api/topics/:topic_id", async (req, res) => {
  try {
    const { topic_id } = req.params; // topic id

    const topic = await knex("topics").where("id", topic_id).first();

    res.send(topic);
  } catch (error) {
    res.status(500).send(`Something went wrong`);
  }
});

router.get("/api/topics/category/:category_id", async (req, res) => {
  try {
    // extracting category from req.params.
    const { category_id } = req.params;
    // This is limiting the number of responses.
    const { limit = 3 } = req.query;

    // This displays the title for the category.
    const topics = await knex("topics")
      .where("category_id", category_id)
      // This limits the amount of topics
      .limit(limit);
    const category = await knex("categories").where("id", category_id);

    const response = {
      category: category[0].category_title,
      topics: topics,
    };

    //   we are sending the entire topics here.
    res.send(response);
  } catch (error) {
    res.status(500).send(`Something went wrong`);
  }
});

// This is how we export modules.
module.exports = router;
