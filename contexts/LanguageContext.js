import { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('english');

  useEffect(() => {
    AsyncStorage.getItem('language').then(saved => {
      if (saved === 'english' || saved === 'filipino') setLanguage(saved);
    });
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    AsyncStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);