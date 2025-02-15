import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Home/HomePage";
import AuthPage from "./Authentication/AuthPage";

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<AuthPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
