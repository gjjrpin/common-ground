// This allows us to use express
const express = require("express");
const knex = require("knex")(require("../knexfile"));
const { v4: uuidv4 } = require("uuid");

// We are using router here to manage the endpoint.
const router = express.Router();

// THIS IS THE QUEUE FOR THE AGREE/DISAGREE----------------------------------------

let queues = {};

router.get("/api/test", (req, res) => {
  res.send(queues);
});

//-----------------------------------------------------------------------------

router.post("/api/topics/:topic_id/agree", (req, res) => {
  const { topic_id } = req.params; // topic id
  const { username } = req.body;

  if (!queues[topic_id]) {
    queues[topic_id] = {
      agree: [],
      disagree: [],
    };
  }
  // allows us to have a dynamic value in [topic_id] (also called as an accessor)
  // push allows us add another username in the array. "push" is a reserved word.
  queues[topic_id].agree.push(username);

  if (queues[topic_id].disagree.length > 0) {
    const agreer = queues[topic_id].agree.shift();
    const disagreer = queues[topic_id].disagree.shift();
    console.log(`${agreer} matches ${disagreer}`);
    res.send({ room_id: uuidv4() });
    return;
  }

  res.send(queues);
});

//-----------------------------------------------------------------------------

router.post("/api/topics/:topic_id/disagree", (req, res) => {
  const { topic_id } = req.params; // topic id
  const { username } = req.body;

  if (!queues[topic_id]) {
    queues[topic_id] = {
      agree: [],
      disagree: [],
    };
  }
  // allows us to have a dynamic value in [topic_id] (also called as an accessor)
  // push allows us add another username in the array. "push" is a reserved word.
  queues[topic_id].disagree.push(username);

  if (queues[topic_id].agree.length > 0) {
    const agreer = queues[topic_id].agree.shift();
    const disagreer = queues[topic_id].disagree.shift();
    console.log(`${agreer} matches ${disagreer}`);
    // here we send them to chat.
    res.send({ room_id: uuidv4() });
    return;
  }

  res.send(queues);
});

// ---------GET ALL THE TOPICS---------------------------------------------------

router.get("/api/topics", async (req, res) => {
  try {
    const topics = await knex("topics");
    res.send(topics);
  } catch (error) {
    res.status(500).send(`Something went wrong`);
  }
});

// ---------GETS A SINGLE TOPIC---------------------------------------------------

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
