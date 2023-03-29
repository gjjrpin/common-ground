// This allows us to use express
const express = require("express");
const knex = require("knex")(require("../knexfile"));

// We are using router here to manage the endpoint.
const router = express.Router();

router.get("/api/topics/:category_id", async (req, res) => {
  try {
    // extracting category from req.params.
    const { category_id } = req.params;
    // This displays the title for the category.
    const topics = await knex("topics").where("category_id", category_id);
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