import React, { createContext, useContext, useState } from 'react';

// contesto
const AuthContext = createContext();

// componente AuthProvider
export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizzato per Auth
export function useAuth() {
  return useContext(AuthContext);
}
