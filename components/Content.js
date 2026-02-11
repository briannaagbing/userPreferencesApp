import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Content = () => {
  const { theme } = useTheme();
  const { language, changeLanguage } = useLanguage();

  const translations = {
    english: {
      greeting: 'Greetings of Peace!',
      description: 'Welcome to the BCA User Preferences App. This app demonstrates the use of React Context API to manage global state without prop drilling.',
      selectLanguage: 'Select Language:',
    },
    filipino: {
      greeting: 'Kamusta, tuloy ka!',
      description: 'Maligayang pagdating sa BCA User Preferences App. Ang app na ito ay nagpapakita ng paggamit ng React Context API upang pamahalaan ang global state nang walang prop drilling.',
      selectLanguage: 'Pumili ng Wika:',
    },
  };

  const styles = getStyles(theme);
  const t = translations[language];

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{t.greeting}</Text>
      <Text style={styles.description}>{t.description}</Text>

      <View style={styles.pickerContainer}>
        <Text style={styles.label}>{t.selectLanguage}</Text>
        <View style={styles.pickerWrapper}>
          <Picker selectedValue={language} onValueChange={changeLanguage} style={styles.picker}>
            <Picker.Item label="English" value="english" />
            <Picker.Item label="Filipino" value="filipino" />
          </Picker>
        </View>
      </View>
    </View>
  );
};

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: theme === 'light' ? '#fff' : '#2d2d2d',
    },
    greeting: {
      fontSize: 32,
      fontWeight: 'bold',
      color: theme === 'light' ? '#333' : '#fff',
      marginBottom: 20,
    },
    description: {
      fontSize: 16,
      color: theme === 'light' ? '#666' : '#ccc',
      lineHeight: 24,
      marginBottom: 30,
    },
    pickerContainer: {
      marginTop: 20,
    },
    label: {
      fontSize: 18,
      fontWeight: '600',
      color: theme === 'light' ? '#333' : '#fff',
      marginBottom: 10,
    },
    pickerWrapper: {
      backgroundColor: theme === 'light' ? '#f0f0f0' : '#1a1a1a',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: theme === 'light' ? '#ddd' : '#444',
    },
    picker: {
      color: theme === 'light' ? '#333' : '#fff',
    },
  });

export default Content;
