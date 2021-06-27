import { createContext, useState, useEffect } from 'react';

import { ITheme, CustomContextProviderProps, ThemeContextType } from '../types';

export const ThemeContext = createContext({} as ITheme);

function ThemeContextProvider(props: CustomContextProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<ThemeContextType>(() => {
    const storagedTheme = localStorage.getItem('theme');
    return storagedTheme as ThemeContextType;
  });

  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  function toggleTheme() {
    setCurrentTheme(currentTheme === 'LIGHT' ? 'DARK' : 'LIGHT');
  }

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContextProvider };
