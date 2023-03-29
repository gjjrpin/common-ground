const express = require("express");
//This connects to app.use(chat_route);
const chat_route = require("./routes/ChatRoute.js");
const categories_route = require("./routes/CategoriesRoute.js");
const topics_route = require("./routes/TopicsRoute.js");
require("dotenv").config();

const app = express();
// This is used by socket.io
const server = require("http").createServer(app);
// This will return us PORT 3001
const PORT = process.env.PORT || "3001";
// express -> HTTP
// socket.io -> socket protocol
// server (port 3001) via HTTP -> express
// server (port 3001) via socket protocol -> socket.io (io)
// ----------------------------------------------------------
// copied directly from socket.io.
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3002",
  },
});

// every time someone enters our socket, this will initialize.
// When someone connects to our socket, it will log out "someone connected"
io.on("connection", (socket) => {
  console.log("someone connected");

  // This is the same as connected but disconnected.
  socket.on("disconnect", () => {
    console.log("socket: connection closed");
  });
  // This is the same as connected but sending chat.
  // we are destructuring username and message from the ChatPage.jsx component.
  // client -> send_chat (message) -> server -> client
  socket.on("send_chat_client", ({ username, message }) => {
    // console.log("sending...");
    // console.log(username, message);
    // This sends
    socket.emit("send_chat_server", { username, message });
    socket.broadcast.emit("send_chat_server", { username, message });
  });
});
//-----------------------------------
//This connects to line 3.
app.use(chat_route);
app.use(categories_route);

app.use(topics_route);

server.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});

// NOTES ABOUT SOCKET.IO

// socket.io works in a different protocol called socket protocol. (example http)
