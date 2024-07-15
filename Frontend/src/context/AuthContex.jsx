import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [persona, setPersona] = useState(false); // Initialize persona with false
  
    const handlePersonaClick = () => {
      setPersona(!persona); // Toggle persona state
    };
  
    return (
      <AuthContext.Provider value={{ persona, setPersona, handlePersonaClick }}>
        {children}
      </AuthContext.Provider>
    );
  };