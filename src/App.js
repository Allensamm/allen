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
import PostList from "./Pages/Home/Blog";
import UserForm from "./Pages/Home/Userform";
import { AuthProvider } from "./Pages/AuthContext";
import { useAuth } from "./Pages/AuthContext";

const PrivateRoute = ({ element }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    // If the user is not logged in, navigate to the login page
    return <Navigate to="/beauser" />;
  }

  // Render the provided element when the user is authenticated
  return element;
};

// const API_URL = "http://127.0.0.1:8000";
const API_URL = "https://portfoliobackend-9og0.onrender.com";
function App() {
  return (
    <AuthProvider apiURL={API_URL}>
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>

              <Route
                path="/blog"
                element={<PrivateRoute element={<PostList />} />}
              />
              <Route
                path="/blog/:category"
                element={<PrivateRoute element={<PostList />} />}
              />

              <Route path="/home" element={<Home />}></Route>
              <Route path="/beauser" element={<UserForm />}></Route>
              <Route path="*" element={<div>404 Not Found</div>}></Route>
            </Routes>
          </div>
        </Router>
      </div>
    </AuthProvider>
  );
}
2;

export default App;
