import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);

  const login = (email, password) => {
    // Wenn erfolgreich, setze die Authentifizierungsdaten
    setAuthData({ email, password });
  };

  const logout = () => {
    // Zum Beispiel, setze die Authentifizierungsdaten auf null
    setAuthData(null);
  };

  return (
    <AuthContext.Provider value={{ authData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
