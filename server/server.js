const express = require("express");
//This connects to app.use(chat_route);
const chat_route = require("./routes/ChatRoute.js");
const categories_route = require("./routes/CategoriesRoute.js");
const topics_route = require("./routes/TopicsRoute.js");
const openai_route = require("./routes/OpenaiRoute.js");
const openaitesting_route = require("./routes/OpenaiTestingRoute.js");
const socketio = require("./utilities/socketio.js");
const users_route = require("./routes/UsersRoute.js");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();
// This is used by socket.io
const server = require("http").createServer(app);
// This links to socketio utilities
socketio.initialize(server);

const PORT = process.env.PORT || "3001";

// allows us to read x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// --------------------------------------------------------
app.use(chat_route);
app.use(categories_route);
app.use(openai_route);
app.use(openaitesting_route);
app.use(topics_route);
app.use(users_route);
server.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
