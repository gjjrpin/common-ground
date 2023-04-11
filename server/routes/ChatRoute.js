// This allows us to use express
const express = require("express");

// We are using router here to manage the endpoint.
const router = express.Router();

router.get("/api/chat", (req, res) => {
  // TODO: save chat?
});

// This is how we export modules.
module.exports = router;
