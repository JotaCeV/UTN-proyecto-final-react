import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/nav-bar/NavBar";
import HomePage from "./pages/home-page/HomePage";
import HistoryPage from "./pages/history-page/HistoryPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
