import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const PrivateRoute = ({ element, ...rest }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    // If the user is not logged in, navigate to the login page
    return <Navigate to="/login" />;
  }

  return <Route {...rest} element={element} />;
};

export default PrivateRoute;
