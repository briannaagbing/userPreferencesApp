import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();

  const translations = {
    english: {
      currentTheme: 'Current Theme:',
      currentLanguage: 'Current Language:',
      light: 'Light',
      dark: 'Dark',
      english: 'English',
      filipino: 'Filipino',
    },
    filipino: {
      currentTheme: 'Kasalukuyang Tema:',
      currentLanguage: 'Kasalukuyang Wika:',
      light: 'Maliwanag',
      dark: 'Madilim',
      english: 'Ingles',
      filipino: 'Filipino',
    },
  };

  const t = translations[language];
  const themeText = theme === 'light' ? t.light : t.dark;
  const languageText = language === 'english' ? t.english : t.filipino;

  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.infoRow}>
        <Text style={styles.label}>{t.currentTheme}</Text>
        <Text style={styles.value}>{themeText}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.label}>{t.currentLanguage}</Text>
        <Text style={styles.value}>{languageText}</Text>
      </View>
      <Text style={styles.footer}>© 2026 BCA User Preferences App</Text>
    </View>
  );
};

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: theme === 'light' ? '#f0f0f0' : '#1a1a1a',
      borderTopWidth: 1,
      borderTopColor: theme === 'light' ? '#ddd' : '#444',
    },
    infoRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    label: {
      fontSize: 16,
      fontWeight: '600',
      color: theme === 'light' ? '#333' : '#fff',
    },
    value: {
      fontSize: 16,
      color: theme === 'light' ? '#666' : '#ccc',
    },
    footer: {
      fontSize: 12,
      color: theme === 'light' ? '#999' : '#666',
      textAlign: 'center',
      marginTop: 15,
    },
  });

export default Footer;
