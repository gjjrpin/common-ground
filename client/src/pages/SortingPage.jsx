import "./SortingPage.scss";
import axios from "axios";
import { useState, useEffect } from "react";

function SortingPage() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics("2922c286-16cd-4d43-ab98-c79f698aeab1");
    getTopics("2922c286-16cd-4d43-ab98-c79f698aeab2");
    getTopics("2922c286-16cd-4d43-ab98-c79f698aeab3");
  }, []);

  async function getTopics(category_id) {
    try {
      const response = await axios.get(`/api/topics/${category_id}`);
      console.log(response.data.topics);
      // This allows the 3 different topics to stack on top of each other.
      // ...[1,2,3,4] = 1,2,3,4
      // [...[1,2,3,4], ...[5,6,7]] = [1,2,3,4,5,6,7]
      setTopics((prevTopics) => {
        const arr = [...prevTopics, ...response.data.topics];
        arr.sort((a, b) => {
          return a.created_at - b.created_at;
        });
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
