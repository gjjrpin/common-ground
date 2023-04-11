const socket = require("socket.io");
const openai = require("./openai.js");
const { connected_users, usernames_list } = require("./memory_data.js");

let io;

// express -> HTTP
// socket.io -> socket protocol
// server (port 3001) via HTTP -> express
// server (port 3001) via socket protocol -> socket.io (io)
// ----------------------------------------------------------
// copied directly from socket.io.
function initialize(server) {
  io = socket(server, {
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

    // This is the same as connected but disconnected.
    socket.on("disconnect", () => {
      // This is the person that disconnects
      socket.broadcast.emit("user_disconnected", { username: "User" });
    });
    // THIS IS STORING THE USERNAME AND SOCKET ID TO connected_users
    // our client will emit "user_connected" with their username
    socket.on("user_connected", ({ username }) => {
      // console.log("new user", username);
      connected_users[username] = socket.id;
    });

    // THIS IS THE CHAT ROOMS----------------------------------------------------
    // https://socket.io/docs/v4/rooms/#joining-and-leaving

    socket.on("join_room", ({ room_number, username }) => {
      // THIS NOTIFIES THAT ANOTHER USER JOINED THE ROOM---------------------------
      socket.join(room_number);
      socket.nsp
        .to(room_number)
        .emit("new_user_joined_room", { room_number, username });
    });

    // THIS DISCONNECTS THE CHAT----------------------------------------------------

    socket.on("leave_room", ({ room_number, username }) => {
      delete connected_users[username]; // removes {username:socket.id} from connected_users
      delete usernames_list[username]; // removes a user from the list when they leave
      socket.leave(room_number);
      socket.broadcast
        .to(room_number)
        .emit("user_left_room", { room_number, username });
    });
    // THE CLIENT IS SENDING A MESSAGE HERE-----------------------------------------
    /* This is the same as connected but sending chat.
       we are destructuring username and message from the ChatPage.jsx component.
       client -> send_chat (message) -> server -> client */

    socket.on(
      "send_chat_client",
      async ({ room_number, username, message }) => {
        // THIS IS CALLING OPENAI API TO THE CHAT---------------------------------

        const result = await openai.isInappropriate(message);
        // No, the user is not breaking the rules.
        // Yes, the user is breaking the rules.
        if (result.includes("Yes")) {
          // send warning here.
          socket.emit("send_chat_server", {
            username: "Server",
            message: "You said something inappropriate",
          });
        } else {
          // console.log("sending...");
          // console.log(username, message);
          // broadcast is like emit but it sends the response to itself as well
          socket
            .to(room_number)
            .emit("send_chat_server", { username, message });
        }
      }
    );
  });
}

function getIo() {
  return io;
}

function getConnectedUsers() {
  return connected_users;
}

function sendUsersToRoom(username1, username2, room_id, topic_id) {
  io.to(connected_users[username1]).emit("go_to_room", {
    room_id: room_id,
    topic_id: topic_id,
  });

  io.to(connected_users[username2]).emit("go_to_room", {
    room_id: room_id,
    topic_id: topic_id,
  });
}

module.exports = { initialize, getIo, sendUsersToRoom };
