const express = require("express");
//This connects to app.use(chat_route);
const chat_route = require("./routes/ChatRoute.js");

const app = express();
// This is used by socket.io
const server = require("http").createServer(app);

//This connects to line 3.
app.use(chat_route);

server.listen(3001);
