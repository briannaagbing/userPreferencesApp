import { View, Text, StyleSheet, Switch } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();

  const translations = {
    english: { 
      title: 'User Preferences App', 
      lightMode: 'Light Mode',
      darkMode: 'Dark Mode' 
    },
    filipino: { 
      title: 'App ng Mga Kagustuhan ng User', 
      lightMode: 'Maliwanag na Mode',
      darkMode: 'Madilim na Mode' 
    },
  };

  const styles = getStyles(theme);
  const t = translations[language];
  const themeLabel = theme === 'light' ? t.darkMode : t.lightMode;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t.title}</Text>
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleLabel}>{themeLabel}</Text>
        <Switch value={theme === 'dark'} onValueChange={toggleTheme} />
      </View>
    </View>
  );
};

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      padding: 20,
      paddingTop: 60,
      backgroundColor: theme === 'light' ? '#f0f0f0' : '#1a1a1a',
      borderBottomWidth: 1,
      borderBottomColor: theme === 'light' ? '#ddd' : '#444',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme === 'light' ? '#333' : '#fff',
      marginBottom: 15,
      textAlign: 'center',
    },
    toggleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
    },
    toggleLabel: {
      fontSize: 16,
      color: theme === 'light' ? '#333' : '#fff',
      marginRight: 10,
    },
  });

export default Header;
