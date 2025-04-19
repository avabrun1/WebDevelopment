import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Create a context for language
const LanguageContext = createContext();

// Create a provider component
export const LanguageProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentLanguage, setCurrentLanguage] = useState('english'); // Default language

  // Read language from URL on initial load and route changes
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const langParam = params.get('language');
    
    if (langParam === 'es') {
      setCurrentLanguage('spanish');
    } else if (langParam === 'en') {
      setCurrentLanguage('english');
    } else if (!langParam) {
      // No language parameter found, set default to English and update URL
      params.set('language', 'en');
      navigate({
        pathname: location.pathname,
        search: params.toString()
      }, { replace: true }); // Use replace to avoid adding to history stack
    }
  }, [location.search, navigate, location.pathname]);

  // Function to toggle language and update URL
  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'english' ? 'spanish' : 'english';
    setCurrentLanguage(newLanguage);
    
    // Update URL with language parameter
    const params = new URLSearchParams(location.search);
    params.set('language', newLanguage === 'english' ? 'en' : 'es');
    
    // Keep the current pathname but update the search params
    navigate({
      pathname: location.pathname,
      search: params.toString()
    });
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to access language context
export const useLanguage = () => useContext(LanguageContext);
