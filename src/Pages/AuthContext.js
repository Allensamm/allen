// authContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children, apiURL }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem('currentUser');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userResponse = await fetch(`${apiURL}/api/user`, { credentials: 'include' });

        if (userResponse.ok) {
          const user = await userResponse.json();
          console.log(user);
          // Check if user data is valid before setting currentUser
          if (user && user.id) {
            setCurrentUser(true);
          } else {
            setCurrentUser(false);
          }
        } else {
          setCurrentUser(false);
        }
      } catch (error) {
        console.error('Error:', error);
        setCurrentUser(false);
      }
    };

    if (!currentUser) {
      fetchUser();
    }
  }, [currentUser, apiURL]);

  const login = () => {
    setCurrentUser(true);
    localStorage.setItem('currentUser', JSON.stringify(true));
  };

  const logout = async () => {
    try {
      const response = await fetch(`${apiURL}/api/logout/`, {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        setCurrentUser(false);
        localStorage.removeItem('currentUser');
        window.location.href = '/home';
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, login,}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
