import { BrowserRouter as Router, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Navbar from "./components/Navbars";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes path="/home" element={<HomePage />}></Routes>
      <Routes path="/login" element={<Login />}></Routes>
      <Routes path="/register" element={<Register />}></Routes>
    </Router>
  );
}

export default App;
