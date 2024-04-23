import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Make API call to login and get token
    // For now, just set the user data
    setUser(userData);
  };

  const register = (userData) => {
    // Make API call to register and get token 
    // For now, just set the user data
    setUser(userData);
  };

  const logout = () => setUser(null);

  const value = { user, login, register, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);