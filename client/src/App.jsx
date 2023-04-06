import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./pages/LandingPage/LandingPage";
import ChatPage from "./pages/ChatPage/ChatPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SortingPage from "./pages/SortingPage/SortingPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  function chooseUsername(newUsername) {
    setUsername(newUsername);
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/login"
          element={<LoginPage chooseUsername={chooseUsername} />}
        />
        <Route
          path="/chat/:room_id/:topic_id"
          element={<ChatPage username={username} />}
        />
        <Route path="/sorting" element={<SortingPage username={username} />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
