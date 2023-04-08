import "./LoginPage.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage({ chooseUsername, socket }) {
  const [username, setUsername] = useState("");
  // Error state
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  function handleOnSubmit(event) {
    event.preventDefault();

    if (!isValid()) {
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
  function isValid() {
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

  return (
    <>
      <div className="login">
        <form onSubmit={handleOnSubmit}>
          <h2 className="login__title">Please enter a username:</h2>
          {/* conditional rendering */}
          {error && (
            <p className="login__error-message">
              Invalid values! Username should not include special characters or
              numbers, and should be less than 10 characters in length.
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
