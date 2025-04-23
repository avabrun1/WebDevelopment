import React, { createContext, useState, useContext } from 'react';

// Create a context for language
const LanguageContext = createContext();

// Create a provider component
export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('english'); // Default language

  const toggleLanguage = () => {
    setCurrentLanguage(prevLanguage => (prevLanguage === 'english' ? 'spanish' : 'english'));
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, toggleLanguage, setCurrentLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to access language context
export const useLanguage = () => useContext(LanguageContext);
