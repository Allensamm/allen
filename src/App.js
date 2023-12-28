import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import PostList from "./Pages/Home/Blog";
import UserForm from "./Pages/Home/Userform";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/blog" element={<PostList />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/beauser" element={<UserForm/>}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
