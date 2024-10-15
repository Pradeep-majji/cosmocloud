import React, { createContext, useState, useEffect } from 'react';
import SecureStorage from 'react-secure-storage'; // Ensure you have installed this or similar secure storage library

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user exists in secure storage
    const storedUser = SecureStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    // Set user in state and secure storage
    setUser(userData);
    SecureStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    // Remove user from state and secure storage
    setUser(null);
    SecureStorage.removeItem('user');
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
