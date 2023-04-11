import "./SortingPage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SortingPage({ username, socket }) {
  const [topics, setTopics] = useState([]);
  const [currentTopic, setCurrentTopic] = useState({});
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const navigate = useNavigate();

  //------------------------------------------------------------

  useEffect(() => {
    getTopics();

    socket.on("go_to_room", ({ room_id, topic_id }) => {
      goToRoom(room_id, topic_id);
    });

    socket.on("disconnect", onDisconnect);
  }, []);

  function onDisconnect() {
    socket.emit("leave_room", { username });
  }

  //------------------------------------------------------------

  async function getTopics() {
    try {
      const response = await axios.get(`/api/topics`);
      setTopics(response.data); // array of topics
      setCurrentTopic(response.data[currentTopicIndex]); // first element in the array.
    } catch (error) {
      console.log(error);
    }
  }

  async function agree(topic_id) {
    try {
      const response = await axios.post(`/api/topics/${topic_id}/agree`, {
        username: username,
      });
      if (response.data.room_id) {
        const room_id = response.data.room_id;
        //navigate(`/chat/${room_id}/${topic_id}`);
      } else if (currentTopicIndex < topics.length - 1) {
        // checking if you're in the end.
        setCurrentTopicIndex((prevState) => prevState + 1);
        setCurrentTopic(topics[currentTopicIndex + 1]);
      } else {
        console.log("you reached the end!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function disagree(topic_id) {
    try {
      const response = await axios.post(`/api/topics/${topic_id}/disagree`, {
        username: username,
      });
      if (response.data.room_id) {
        const room_id = response.data.room_id;
        console.log("match");
        //navigate(`/chat/${room_id}/${topic_id}`);
      } else if (currentTopicIndex < topics.length - 1) {
        // checking if you're in the end.
        setCurrentTopicIndex((prevState) => prevState + 1);
        setCurrentTopic(topics[currentTopicIndex + 1]);
      } else {
        console.log("you reached the end!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function goToRoom(room_id, topic_id) {
    navigate(`/chat/${room_id}/${topic_id}`);
  }

  //------------------------------------------------------------

  return (
    <div>
      <div className="sorting">
        <div className="sorting__container">
          <h2 className="sorting__username">{username}</h2>
          <h2 className="sorting__prompt">{currentTopic.statement}</h2>
          <div className="sorting__button-container">
            <button
              className="sorting__button"
              onClick={() => agree(currentTopic.id)}
            >
              Agree
            </button>
            <button
              className="sorting__button"
              onClick={() => disagree(currentTopic.id)}
            >
              Disagree
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SortingPage;
