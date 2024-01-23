import React from 'react';
import { useAuth } from '../AuthContext';

const LoginRegister = () => {
  const { currentUser, login, logout } = useAuth();

  return (
    <div>
      {currentUser ? (
        <>
        <button className='bg-[#1d96ec] px-10 py-3 rounded-full' onClick={logout}>Logout</button>
        </>
      ) : (
        // User is not logged in
        <button className='bg-[#1d96ec] px-10 py-3 rounded-full' onClick={login}>sign in</button>
      )}
    </div>
  );
};

export default LoginRegister;
