import React from 'react';
import { useAuth } from '../AuthContext';

const LoginRegister = () => {
  const { currentUser, login, logout } = useAuth();

  return (
    <div>
      {currentUser ? (
        <>
        <button onClick={logout}>Logout</button>
        </>
      ) : (
        // User is not logged in
        <button onClick={login}>sign in</button>
      )}
    </div>
  );
};

export default LoginRegister;
