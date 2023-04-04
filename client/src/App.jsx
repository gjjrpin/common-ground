import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SortingPage from "./pages/SortingPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/sorting" element={<SortingPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
