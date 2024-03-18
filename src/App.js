import "./App.css";
import "./index.css";

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import UserForm from "./Pages/Home/Userform";
import Projects from './Pages/Home/Projects.jsx'
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />}></Route>

            <Route path="/" element={<Home/>} />
            <Route path="/Signin" element={<UserForm />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}
2;

export default App;
