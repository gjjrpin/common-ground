import "./SortingPage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SortingPage() {
  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTopics();
  }, []);

  async function getTopics() {
    try {
      const response = await axios.get(`/api/topics`);
      setTopics(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // "/api/topics/:topic_id/agree"

  async function agree(topic_id) {
    try {
      const response = await axios.post(`/api/topics/${topic_id}/agree`, {
        username: "Test",
      });
      if (response.data.room_id) {
        const room_id = response.data.room_id;
        console.log("match");
        navigate(`/chat/${room_id}/${topic_id}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function disagree(topic_id) {
    try {
      const response = await axios.post(`/api/topics/${topic_id}/disagree`, {
        username: "Test",
      });
      if (response.data.room_id) {
        const room_id = response.data.room_id;
        console.log("match");
        navigate(`/chat/${room_id}/${topic_id}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div>
        <h1>SORTING PAGE</h1>
        {topics.map((topic) => {
          return (
            <div key={topic.id}>
              {topic.statement}{" "}
              <button onClick={() => agree(topic.id)}>Agree</button>
              <button onClick={() => disagree(topic.id)}>Disagree</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SortingPage;

//------------------------------------------------------------------------------

//  PLANNING OUT SORTING ALGORITHM FOR CHAT

//chatroom (001, 002)

// Random prompt - Do you believe in abortion?
// Agree     queueAgree[] prompt3
// Disagree  queueDisagree[] prompt3

// Random prompt - Do you believe in Jesus?
// Agree     queueAgree[]    of prompt2
// Disagree  queueDisagree[]   of prompt2

// Random prompt - Do you believe in space?
// Agree     queueAgree[] of prompt1
// Disagree  queueDisagree[] of prompt1

/*
const topics = [
  {
    topic_prompt: "Do you believe in x",
    queues: {
      agree: [],
      disagree: [],
    },
  },
  {
    topic_prompt: "Do you believe in a",
    queues: {
      agree: [],
      disagree: [],
    },
  },
  {
    topic_prompt: "Do you believe in b",
    queues: {
      agree: [],
      disagree: [],
    },
  },
  {
    topic_prompt: "Do you believe in c",
    queues: {
      agree: [],
      disagree: [],
    },
  },
];
*/
