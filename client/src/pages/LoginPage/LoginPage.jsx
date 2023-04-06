import "./LoginPage.scss";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage({ chooseUsername }) {
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
      <div
        style={{
          // Testing the formatting. NEED TO CHANGE THIS!!!
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form onSubmit={handleOnSubmit}>
          <h2>Username:</h2>
          <input
            className={`form-username ${error ? "error" : ""}`}
            type="text"
            onChange={handleOnChange}
          />
          {/* conditional rendering */}
          {error && <p>You have entered invalid values! Please try again.</p>}
          <button type="submit">Send</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default LoginPage;
