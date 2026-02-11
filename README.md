## User Preferences App – React Context API Demo

This is a React Native mobile application that demonstrates how to use the React Context API to manage global state without using prop drilling.

The app allows users to:
    - Switch between Light and Dark mode
    - Change language between English and Filipino
    - Save preferences using AsyncStorage so settings stay even after closing the app

## Features
    - Theme Toggle (Light / Dark Mode)
    - Language Selection (English / Filipino)
    - Global State Management using React Context API
    - AsyncStorage for saving user preferences
    - No Prop Drilling (uses useContext() hook)
    - UI automatically updates based on selected theme

## Project Structure
agbingOBT3/
├── contexts/
│   ├── ThemeContext.tsx
│   └── LanguageContext.tsx
├── components/
│   ├── Header.tsx
│   ├── Content.tsx
│   └── Footer.tsx
├── App.tsx
└── package.json

## Requirements
Make sure you have:
    1. Node.js (v20 or higher)
    2. npm or yarn
    3. React Native environment setup
    4. Android Studio (for Android)
    5. Xcode (for iOS – Mac only)

## Installation
Install dependencies:
- npm install

## Running the App
Android
npm run android

OR

npx react-native run-android

iOS (Mac only)
npm run ios

OR

npx react-native run-ios

Start Metro (if needed)
npm start

## How Context API Was Used
Theme Context
Handles:
    Current theme (light or dark)
    Toggle theme function
    Saves theme using AsyncStorage

Usage:
    const { theme, toggleTheme } = useTheme();
    Language Context

Handles:
    Current language (English or Filipino)
    Change language function
    Saves language using AsyncStorage

Usage:
    const { language, changeLanguage } = useLanguage();

## Context Providers
In App.tsx, both contexts wrap the whole app:

<ThemeProvider>
  <LanguageProvider>
    <AppContent />
  </LanguageProvider>
</ThemeProvider>


This allows all components to access global state without passing props.

## Components Overview
Header
    - Shows app title
Contains theme toggle switch
    - Changes text based on selected language
Content
    - Shows greeting message
Language selection dropdown
    - App description text
Footer
    - Displays current theme and language
    - Updates automatically when state changes

## Why Context API Was Used
Avoids prop drilling
Makes code cleaner
Easy to manage global settings
Better structure for bigger apps

## Testing
Run tests:
npm test

## License
This project is created for educational purposes as part of a React Context API demonstration.

## Author
Created as a demonstration of React Context API for managing global state in React Native applications.