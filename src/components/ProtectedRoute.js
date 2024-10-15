// src/components/ProtectedRoute.js

import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext'; // Adjust the path according to your project structure

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext); // Access user state from UserContext

  return user ? children : <Navigate to="/login" />; // If user is logged in, render children; otherwise redirect to login
};

export default ProtectedRoute;
