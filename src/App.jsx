import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
