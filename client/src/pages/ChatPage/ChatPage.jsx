import React, { useState, useEffect } from "react";
import { socket } from "../../socket";
import "./ChatPage.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

function ChatPage() {
  // ---------------------------------------------------------------------------
  const { room_id, topic_id } = useParams();

  // copied from socket.io website. https://socket.io/how-to/use-with-react
  const [isConnected, setIsConnected] = useState(socket.connected);

  const [messages, setMessages] = useState([]);

  const [currentMessage, setCurrentMessage] = useState("");

  const [username, setUsername] = useState("");

  const [topic, setTopic] = useState({});

  // ---------------------------------------------------------------------------

  useEffect(() => {
    joinRoom(room_id);

    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    // This is how the sockets connect using useEffect
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("send_chat_server", ({ username, message }) => {
      // spreading. spreads the array but with a new message.
      //setMessages([...messages, { username, message }]);
      setMessages((previousMessages) => [
        ...previousMessages,
        { username, message },
      ]);
      //setMessages((previousMessages) => [...previousMessages, { username, message }])
      // console.log(username, message);
    });
    // This is a new user joining a private room -------------------------------

    socket.on("new_user_joined_room", ({ room_number, username }) => {
      // todo
      setMessages((previousMessages) => [
        ...previousMessages,
        { username: "Server", message: `${username} has Joined` },
      ]);
    });

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  // THIS IS PUTTING A TOPIC  CHAT ROOM ------------------------------------------

  async function getTopic() {
    try {
      const response = await axios.get(`/api/topics/${topic_id}`);
      setTopic(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // THIS IS CREATING A CHAT ROOM ------------------------------------------

  function joinRoom(roomid) {
    const roomDetails = {
      room_number: roomid,
      username: username,
    };
    getTopic();
    socket.emit("join_room", roomDetails);
  }

  function handleSendMessage() {
    //this connects to the server.js in server.
    const message = {
      room_number: room_id,
      username: username,
      message: currentMessage,
    };

    setMessages((previousMessages) => [
      ...previousMessages,
      { username, message: currentMessage },
    ]);

    // SOCKET PROTOCOL
    // A lot like axios.post
    socket.emit("send_chat_client", message);

    setCurrentMessage("");
  }

  // ---------------------------------------------------------------------------

  function handleOnChangeCurrentMessage(event) {
    setCurrentMessage(event.target.value);
  }
  function handleOnChangeUsername(event) {
    setUsername(event.target.value);
  }
  // ---------------------------------------------------------------------------

  return (
    <div>
      <h1>Chat Page</h1>
      <hr />
      <p>{topic.statement}</p>
      <hr />
      <div>
        {/* This displays each message */}
        {messages.map((message, index) => (
          <div key={index}>
            {message.username}:{message.message}
          </div>
        ))}
      </div>
      <h3>username</h3>
      <input type="text" value={username} onChange={handleOnChangeUsername} />
      <br />
      <h3>Message</h3>
      <textarea
        value={currentMessage}
        onChange={handleOnChangeCurrentMessage}
      ></textarea>
      <button onClick={handleSendMessage}>Send</button>
      <hr />
    </div>
  );
}

export default ChatPage;
