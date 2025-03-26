import { useEffect } from 'react';

export const useTheme = () => {
  const toggleTheme = () => {
    if (document.body.id === 'dark__theme') {
      document.body.id = '';
      localStorage.setItem('theme', 'light');
    } else {
      document.body.id = 'dark__theme';
      localStorage.setItem('theme', 'dark');
    }
  };

  useEffect(() => {
    // Инициализация темы при загрузке
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.body.id = 'dark__theme';
    } else {
      document.body.id = '';
    }
  }, []);

  return { toggleTheme };
};