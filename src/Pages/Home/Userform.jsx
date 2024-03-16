// UserForm.jsx
import React, { useState } from "react";
import { account, ID } from "../../appwrite";
import {useNavigate } from "react-router-dom";

function UserForm() {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const updateFormBtn = () => {
    setRegistrationToggle((prevToggle) => !prevToggle);
  };

  async function login(email, password) {
    await account.createEmailSession(email, password)
    setLoggedInUser(await account.get());
    navigate('/home');
  }
  

  if(loggedInUser){
    console.log(loggedInUser);
  }

  return (
    <div className="center">
      <div className=" mt-[15%] m-auto w-fit">
        <div>
          <div className="toggleHeading mb-5">
            <div className="link">
             <span className="text-white pr-5">Click button for options</span>
              <button className="buttonToggle bg-[#0096df] pl-8 pr-8 pt-2 pb-2" onClick={updateFormBtn}>
                {registrationToggle ? "Register" : "Login"}
              </button>
            </div>
          </div>
          {registrationToggle ? (
            <div className=" flex flex-col space-y-5" >
              <input
                className="registeremail pt-2 pb-2 rounded-lg outline pl-4 pr-4"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                className="registerusername pt-2 pb-2 rounded-lg outline pl-4 pr-4"
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <input
                required
                className="registerpassword pt-2 pb-2 rounded-lg outline pl-4 pr-4"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                className="registerbutton bg-[#0096df] pl-8 pr-8 pt-2 pb-2"
                variant="primary"
                type="button"
                onClick={async () => {
                await account.create(ID.unique(), email, password, username );
                login(email, password);
          }}

              >
                Submit
              </button>
            </div>
          ) : (
            <div className="flex flex-col space-y-5" >
              <input
                className="loginemail pt-2 pb-2 rounded-lg outline pl-4 pr-4"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                className="loginpassword pt-2 pb-2 rounded-lg outline pl-4 pr-4"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button  className="loginbutton bg-[#0096df] pl-8 pr-8 pt-2 pb-2" variant="primary" type="button" onClick={() => login(email, password)}>
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
