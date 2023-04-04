import "./SortingPage.scss";
import axios from "axios";
import { useState, useEffect } from "react";

function SortingPage() {
  const [topics, setTopics] = useState([]);

  // useEffect(async () => {
  //   await getTopics("2922c286-16cd-4d43-ab98-c79f698aeab1");
  //   await getTopics("2922c286-16cd-4d43-ab98-c79f698aeab2");
  //   await getTopics("2922c286-16cd-4d43-ab98-c79f698aeab3");
  // }, []);

  async function getTopics(category_id) {
    try {
      const response = await axios.get(`/api/topics/category/${category_id}`);
      // console.log(response.data.topics);
      // This allows the 3 different topics to stack on top of each other.
      // ...[1,2,3,4] = 1,2,3,4
      // [...[1,2,3,4], ...[5,6,7]] = [1,2,3,4,5,6,7]
      setTopics((prevTopics) => {
        const arr = [...prevTopics, ...response.data.topics];
        return arr;
      });
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
            <div>
              {topic.statement} <button>Agree</button>
              <button>Disagree</button>
            </div>
          );
        })}
        <hr />
        <button>Submit</button>
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
      agree: [], // 005 is user_id
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
    topic_prompt: "Do you belive in c",
    queues: {
      agree: [],
      disagree: [],
    },
  },
];
*/