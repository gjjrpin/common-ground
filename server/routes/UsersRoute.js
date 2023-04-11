// This allows us to use express
const express = require("express");

// We are using router here to manage the endpoint.
const router = express.Router();

const { usernames_list } = require("../utilities/memory_data");

//RECORDS EXISTING USERNAME---------------------------------------

router.post("/api/users/:username", (req, res) => {
  const { username } = req.params;

  if (usernames_list[username]) {
    return res.send(false);
  }

  // username is ok.
  usernames_list[username] = true;
  res.send(true);
});

// This is how we export modules.
module.exports = router;
