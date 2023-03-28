const express = require("express");
//This connects to app.use(chat_route);
const chat_route = require("./routes/ChatRoute.js");

const app = express();
// This is used by socket.io
const server = require("http").createServer(app);
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

//This connects to line 3.
app.use(chat_route);

server.listen(3001);

// NOTES ABOUT SOCKET.IO

// socket.io works in a different protocol called socket protocol. (example http)
