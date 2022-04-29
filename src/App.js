import "./App.css";
import { Routes, Route } from "react-router-dom";
import Authorize from "./components/Authorize"
import Test from "./components/Test"
import Profile from "./components/Profile"
import Login from "./components/Login";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/callback" element={<Authorize/>}/>
      <Route path="/test" element={<Test/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
  );
}

export default App;
