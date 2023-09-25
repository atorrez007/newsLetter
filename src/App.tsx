import "./App.css";
import SignUp from "./components/SignUp";
import SuccessMessage from "./components/SuccessMessage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="signup-container">
      <Routes>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="/success" element={<SuccessMessage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
