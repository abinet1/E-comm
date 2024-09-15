import React, { createContext, useState, ReactNode } from 'react';
import { color } from '../themeConfig';

const lightTheme = color.light;
const darkTheme = color.dark;

type Theme = typeof darkTheme;

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  setTheme: () => {},
});

type ThemeProviderProps = {
    children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;