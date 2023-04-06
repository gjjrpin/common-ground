import React, { useState, useEffect } from "react";
import { socket } from "../../socket";
import "./ChatPage.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useRef } from "react";

function ChatPage({ username }) {
  // ---------------------------------------------------------------------------
  const { room_id, topic_id } = useParams();

  // copied from socket.io website. https://socket.io/how-to/use-with-react
  const [isConnected, setIsConnected] = useState(socket.connected);

  const [messages, setMessages] = useState([]);

  const [currentMessage, setCurrentMessage] = useState("");

  const [topic, setTopic] = useState({});

  const endOfMessageRef = useRef();

  // ---------------------------------------------------------------------------

  // auto-scroll down effect.
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
    // This sends a message when the user disconnects.
    socket.on("user_disconnected", ({ username }) => {
      setMessages((previousMessages) => [
        ...previousMessages,
        { username: "server", message: `${username} has disconnected` },
      ]);
    });
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

  function scrollToBottom() {
    endOfMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  // ---------------------------------------------------------------------------

  function handleOnChangeCurrentMessage(event) {
    setCurrentMessage(event.target.value);
  }
  // ---------------------------------------------------------------------------

  return (
    <div className="chat">
      <div className="chat__prompt-container">
        <h2 className="chat__prompt">{topic.statement}</h2>
      </div>
      <div className="chat__message-container">
        {/* This displays each message */}
        {messages.map((message, index) =>
          // This changes the color of the text bubbles.----------------
          {
            if (message.username === username) {
              return (
                <div key={index} style={{ backgroundColor: "red" }}>
                  {message.username}:{message.message}
                </div>
              );
            } else if (message.username === "Server") {
              return (
                <div key={index} style={{ backgroundColor: "yellow" }}>
                  {message.username}:{message.message}
                </div>
              );
              // ----------------------------------------------------
            } else {
              return (
                <div key={index} style={{ backgroundColor: "lightblue" }}>
                  {message.username}:{message.message}
                </div>
              );
            }
          }
        )}
        <div ref={endOfMessageRef}></div>
      </div>
      <h3>Message</h3>
      <textarea
        className="chat__message-box"
        value={currentMessage}
        onChange={handleOnChangeCurrentMessage}
      ></textarea>
      <button className="chat__button" onClick={handleSendMessage}>
        Send
      </button>
    </div>
  );
}

export default ChatPage;
