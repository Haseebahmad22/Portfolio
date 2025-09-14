import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Save theme preference
    localStorage.setItem('portfolio-theme', isDarkMode ? 'dark' : 'light');
    
    // Update CSS custom properties for theme
    const root = document.documentElement;
    
    if (isDarkMode) {
      root.style.setProperty('--bg-primary', '#0a0a0a');
      root.style.setProperty('--bg-secondary', '#1a1a1a');
      root.style.setProperty('--bg-tertiary', '#2a2a2a');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#b3b3b3');
      root.style.setProperty('--text-muted', '#666666');
      root.style.setProperty('--accent-primary', '#00d4ff');
      root.style.setProperty('--accent-secondary', '#ff6b9d');
      root.style.setProperty('--border-color', '#333333');
      root.style.setProperty('--shadow-light', 'rgba(255, 255, 255, 0.1)');
      root.style.setProperty('--shadow-dark', 'rgba(0, 0, 0, 0.5)');
      root.style.setProperty('--gradient-primary', 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)');
      root.style.setProperty('--gradient-secondary', 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)');
      root.style.setProperty('--gradient-accent', 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)');
      root.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.05)');
      root.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.1)');
    } else {
      root.style.setProperty('--bg-primary', '#ffffff');
      root.style.setProperty('--bg-secondary', '#f8f9fa');
      root.style.setProperty('--bg-tertiary', '#e9ecef');
      root.style.setProperty('--text-primary', '#2c3e50');
      root.style.setProperty('--text-secondary', '#5a6c7d');
      root.style.setProperty('--text-muted', '#95a5a6');
      root.style.setProperty('--accent-primary', '#3498db');
      root.style.setProperty('--accent-secondary', '#e74c3c');
      root.style.setProperty('--border-color', '#dee2e6');
      root.style.setProperty('--shadow-light', 'rgba(0, 0, 0, 0.1)');
      root.style.setProperty('--shadow-dark', 'rgba(0, 0, 0, 0.2)');
      root.style.setProperty('--gradient-primary', 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)');
      root.style.setProperty('--gradient-secondary', 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)');
      root.style.setProperty('--gradient-accent', 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)');
      root.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.8)');
      root.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.2)');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const value = {
    isDarkMode,
    toggleTheme,
    theme: {
      colors: {
        primary: isDarkMode ? '#00d4ff' : '#3498db',
        secondary: isDarkMode ? '#ff6b9d' : '#e74c3c',
        background: {
          primary: isDarkMode ? '#0a0a0a' : '#ffffff',
          secondary: isDarkMode ? '#1a1a1a' : '#f8f9fa',
          tertiary: isDarkMode ? '#2a2a2a' : '#e9ecef',
        },
        text: {
          primary: isDarkMode ? '#ffffff' : '#2c3e50',
          secondary: isDarkMode ? '#b3b3b3' : '#5a6c7d',
          muted: isDarkMode ? '#666666' : '#95a5a6',
        },
        border: isDarkMode ? '#333333' : '#dee2e6',
        shadow: {
          light: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          dark: isDarkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.2)',
        },
        gradients: {
          primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          accent: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        },
        glass: {
          background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
          border: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.2)',
        }
      }
    }
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};