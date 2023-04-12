// This allows us to use express
const express = require("express");
const knex = require("knex")(require("../knexfile"));
const {
  usernames_list,
  connected_users,
  queues,
} = require("../utilities/memory_data");

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
//------------------------------------------
router.get("/api/test/queues", (req, res) => {
  res.send(queues);
});
router.get("/api/test/connected_users", (req, res) => {
  res.send(connected_users);
});
router.get("/api/test/usernames_list", (req, res) => {
  res.send(usernames_list);
});

// This is how we export modules.
module.exports = router;
