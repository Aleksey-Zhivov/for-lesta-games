const THEME_KEY = 'user-theme';

export const applyTheme = (theme: 'light' | 'dark') => {
  const body = document.body;

  if (theme === 'dark') {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }

  localStorage.setItem(THEME_KEY, theme);
};

export const initTheme = () => {
  const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
  applyTheme(savedTheme as 'light' | 'dark');
};
