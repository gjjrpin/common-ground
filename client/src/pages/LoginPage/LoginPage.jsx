import "./LoginPage.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage({ chooseUsername, socket }) {
  const [username, setUsername] = useState("");
  // Error state
  const [errorInvalidCharacter, setErrorInvalidCharacter] = useState(false);
  const [errorUserTaken, setErrorUserTaken] = useState(false);

  const navigate = useNavigate();

  async function handleOnSubmit(event) {
    event.preventDefault();
    setErrorInvalidCharacter(false); // reset to false
    setErrorUserTaken(false); // reset to false

    if (!isValid()) {
      setErrorInvalidCharacter(true);
      // stops everything
      return;
    }
    if (!(await postUsername(username))) {
      setErrorUserTaken(true);
      // stops everything
      return;
    }

    // ---------- valid, continue

    socket.emit("user_connected", { username });

    chooseUsername(username);
    navigate("/sorting");
  }

  function handleOnChange(event) {
    setUsername(event.target.value);
  }

  // Validation for Username:
  function isValid() {
    let valid = true;
    //---regular expression--------
    //https://stackoverflow.com/questions/23476532/check-if-string-contains-only-letters-in-javascript
    if (username.length > 10) {
      valid = false;
    }
    if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(username)) {
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
          {errorUserTaken && (
            <p className="login__error-message">Username is already taken!</p>
          )}
          {errorInvalidCharacter && (
            <p className="login__error-message">
              Please make sure the username does not include any special
              characters and should be less than 10 characters in length.
            </p>
          )}

          <div className="login__container">
            <input
              className={`login__form form-username ${
                errorInvalidCharacter || errorUserTaken ? "login__error" : ""
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
