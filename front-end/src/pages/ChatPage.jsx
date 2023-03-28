import React, { useState, useEffect } from "react";
import { socket } from "../socket";
import "./ChatPage.scss";

function ChatPage() {
  // ---------------------------------------------------------------------------
  // copied from socket.io website. https://socket.io/how-to/use-with-react
  const [isConnected, setIsConnected] = useState(socket.connected);

  const [messages, setMessages] = useState([]);

  const [currentMessage, setCurrentMessage] = useState("");

  const [username, setUsername] = useState("");

  useEffect(() => {
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

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  function handleSendMessage() {
    //this connects to the server.js in back-end.
    const message = {
      username: username,
      message: currentMessage,
    };

    // SOCKET PROTOCOL
    // A lot like axios.post
    socket.emit("send_chat_client", message);

    setCurrentMessage("");
  }

  function handleOnChangeCurrentMessage(event) {
    setCurrentMessage(event.target.value);
  }
  function handleOnChangeUsername(event) {
    setUsername(event.target.value);
  }

  // ---------------------------------------------------------------------------

  return (
    <div>
      <div>
        {/* This displays each message */}
        {messages.map((message, index) => (
          <div key={index}>
            {message.username}:{message.message}
          </div>
        ))}
      </div>
      <h3>username</h3>
      <input
        type="text"
        value={username}
        onChange={handleOnChangeUsername}
      />{" "}
      <br />
      <h3>Message</h3>
      <textarea
        value={currentMessage}
        onChange={handleOnChangeCurrentMessage}
      ></textarea>
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default ChatPage;
