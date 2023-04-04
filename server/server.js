const express = require("express");
const openai = require("./utilities/openai.js");
//This connects to app.use(chat_route);
const chat_route = require("./routes/ChatRoute.js");
const categories_route = require("./routes/CategoriesRoute.js");
const topics_route = require("./routes/TopicsRoute.js");
const openai_route = require("./routes/OpenaiRoute.js");
const openaitesting_route = require("./routes/OpenaiTestingRoute.js");

require("dotenv").config();

const app = express();
// This is used by socket.io
const server = require("http").createServer(app);

const PORT = process.env.PORT || "3001";
// express -> HTTP
// socket.io -> socket protocol
// server (port 3001) via HTTP -> express
// server (port 3001) via socket protocol -> socket.io (io)
// ----------------------------------------------------------
// copied directly from socket.io.
const io = require("socket.io")(server, {
  // cors= cross origin resource- if another website wants to access your server, you need to whitelist it first.
  // whitelisting = allowing a client to use your server.
  cors: {
    origin: "http://localhost:3000",
  },
});

// THIS IS THE CHAT CONNECTION-----------------------------------------------
// every time someone enters our socket, this will initialize.
// When someone connects to our socket, it will log out "someone connected"
io.on("connection", (socket) => {
  console.log("someone connected");

  // This is the same as connected but disconnected.
  socket.on("disconnect", () => {
    console.log("socket: connection closed");
  });

  // THIS IS THE CHAT ROOMS----------------------------------------------------
  // https://socket.io/docs/v4/rooms/#joining-and-leaving

  socket.on("join_room", ({ room_number, username }) => {
    console.log("someone joined the room: " + room_number);

    // THIS NOTIFIES THAT ANOTHER PERSON JOINED THE ROOM---------------------------

    socket.join(room_number);
    socket.broadcast
      .to(room_number)
      .emit("new_user_joined_room", { room_number, username });
  });

  // THE CLIENT IS SENDING A MESSAGE HERE-------------------------------------
  /* This is the same as connected but sending chat.
     we are destructuring username and message from the ChatPage.jsx component.
     client -> send_chat (message) -> server -> client */
  socket.on("send_chat_client", async ({ room_number, username, message }) => {
    // THIS IS CALLING OPENAI API TO THE CHAT---------------------------------

    const result = await openai.isInappropriate(message);
    // No, the user is not breaking the rules.
    // Yes, the user is breaking the rules.
    if (result.includes("Yes")) {
      // send warning here.
      socket.to(room_number).emit("send_chat_server", {
        username: "Server",
        message: "The other user said something inappropriate",
      });
    } else {
      // console.log("sending...");
      // console.log(username, message);
      // broadcast is like emit but it sends the response to itself as well
      socket.to(room_number).emit("send_chat_server", { username, message });
    }
  });
});
//---------------------------------------------------------

app.use(chat_route);
app.use(categories_route);
app.use(openai_route);
app.use(openaitesting_route);
app.use(topics_route);
server.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
