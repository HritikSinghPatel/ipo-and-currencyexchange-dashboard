// AuthContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    console.log("testing..");
  const [authenticated, setAuthenticated] = useState(false);

  const login = (username, password) => {
    if (username === 'hritik' && password === 'hritik') {
      setAuthenticated(true);
      alert("Login Successfully");
    } else {
      setAuthenticated(false);
    }
  };

  const logout = () => {
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
