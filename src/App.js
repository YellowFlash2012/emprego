import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  return <div>
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />} />
        
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<Error/>} />
        </Routes>
    </BrowserRouter>
    </div>;
}

export default App;
