// UserForm.jsx
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuth } from '../AuthContext';
import './userform.css';


const API_URL = 'https://portfoliobackend-9og0.onrender.com';

function UserForm() {
  const { currentUser, login, logout } = useAuth();
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const updateFormBtn = () => {
    setRegistrationToggle((prevToggle) => !prevToggle);
  };

  const submitRegistration = async (e) => {
    e.preventDefault();
    try {
      const registerResponse = await fetch(`${API_URL}/api/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          username,
          password,
        }),
        credentials: 'include',
      });

      if (registerResponse.ok) {
        console.log('Registration successful');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/api/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
        credentials: 'include',
      });

      if (response.ok) {
        login();
        window.location.href = '/blog';
      } else {
        const contentTypes = response.headers.get('content-type');
        if (contentTypes && contentTypes.includes('application/json')) {
          const responseData = await response.json();
          const errorMessage = responseData.detail || 'Login failed';

          console.error('Login failed:', errorMessage);
          alert(errorMessage);
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  

  if (currentUser) {
    window.location.href = '/blog'
  }

  return (
    <div className="center">
      <div className="container">
        <div>
          <div className="toggleHeading">
            <div className="link">
              <Button className="buttonToggle" onClick={updateFormBtn}>
                {registrationToggle ? 'Register' : 'Login'}
              </Button>
            </div>
          </div>
          {registrationToggle ? (
            <Form onSubmit={submitRegistration}>
              <Form.Group className="form-input email" controlId="formBasicEmail">
                <Form.Control
                  className="registeremail"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="form-input" controlId="formBasicUsername">
                <Form.Control
                  className="registerusername"
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="form-input" controlId="formBasicPassword">
                <Form.Control
                  required
                  className="registerpassword"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button className="registerbutton" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          ) : (
            <Form onSubmit={submitLogin}>
              <Form.Group className="form-input email" controlId="formBasicEmail">
                <Form.Control
                  className="loginemail"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="form-input" controlId="formBasicPassword">
                <Form.Control
                  className="loginpassword"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button className="loginbutton" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserForm;