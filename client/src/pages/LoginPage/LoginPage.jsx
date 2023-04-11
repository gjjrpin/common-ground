import "./LoginPage.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage({ chooseUsername, socket }) {
  const [username, setUsername] = useState("");
  // Error state
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  async function handleOnSubmit(event) {
    event.preventDefault();

    if (!isValid() || !(await postUsername(username))) {
      setError(true);
      // stops everything
      return;
    }

    socket.emit("user_connected", { username });

    chooseUsername(username);
    navigate("/sorting");
  }

  function handleOnChange(event) {
    setUsername(event.target.value);
  }

  // Validation for Username:
  async function isValid() {
    let valid = true;
    //---regular expression--------
    //https://stackoverflow.com/questions/23476532/check-if-string-contains-only-letters-in-javascript
    if (username.length > 10) {
      valid = false;
    }
    if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/.test(username)) {
      valid = false;
    }
    //-----------------------------
    return valid;
  }

  async function postUsername(new_username) {
    try {
      const response = await axios.post(`/api/users/${new_username}`); // true or false, true means username was created, false means its invalid.
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="login">
        <form onSubmit={handleOnSubmit}>
          <h2 className="login__title">Please enter a username:</h2>
          {/* conditional rendering */}
          {error && (
            <p className="login__error-message">
              User might already be taken!
              <br />
              <br />
              Otherwise please make sure the username does not include any
              special characters or numbers, and should be less than 10
              characters in length.
            </p>
          )}
          <div className="login__container">
            <input
              className={`login__form form-username ${
                error ? "login__error" : ""
              }`}
              type="text"
              onChange={handleOnChange}
            />
            <button className="login__button" type="submit">
              Enter
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
