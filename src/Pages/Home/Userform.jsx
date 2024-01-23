// UserForm.jsx
import React, { useState } from "react";

import { useAuth } from "../AuthContext";
import "./userform.css";

const API_URL = 'https://portfoliobackend-9og0.onrender.com';

function UserForm() {
  const { currentUser, login, logout } = useAuth();
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const updateFormBtn = () => {
    setRegistrationToggle((prevToggle) => !prevToggle);
  };
3
  const submitRegistration = async (e) => {
    e.preventDefault();
    try {
      const registerResponse = await fetch(`${API_URL}/api/register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username,
          password,
        }),
        credentials: "include",
      });

      if (registerResponse.ok) {
        console.log("Registration successful");
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/api/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
        credentials: "include",
      });

      if (response.ok) {
        login();
        window.location.href = "/blog";
      } else {
        const contentTypes = response.headers.get("content-type");
        if (contentTypes && contentTypes.includes("application/json")) {
          const responseData = await response.json();
          const errorMessage = responseData.detail || "Login failed";

          console.error("Login failed:", errorMessage);
          alert(errorMessage);
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (currentUser) {
    window.location.href = "/blog";
  }

  return (
    <div className="center">
      <div className="container">
        <div>
          <div className="toggleHeading mb-5">
            <div className="link">
             <span className="text-white pr-5">Click button for options</span>
              <button className="buttonToggle" onClick={updateFormBtn}>
                {registrationToggle ? "Register" : "Login"}
              </button>
            </div>
          </div>
          {registrationToggle ? (
            <div className=" flex flex-col" onSubmit={submitRegistration}>
              <input
                className="registeremail"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                className="registerusername"
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <input
                required
                className="registerpassword"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                className="registerbutton"
                variant="primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          ) : (
            <div className="flex flex-col" onSubmit={submitLogin}>
              <input
                className="loginemail"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                className="loginpassword"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className="loginbutton" variant="primary" type="submit">
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserForm;
