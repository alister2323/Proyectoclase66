import React, { createContext, useContext, useMemo, useState } from "react";

export type ThemeMode = "light" | "dark";

type ThemePalette = {
  background: string;
  surface: string;
  card: string;
  text: string;
  muted: string;
  accent: string;
  border: string;
  input: string;
};

type ThemeContextType = {
  isDark: boolean;
  theme: ThemePalette;
  toggleTheme: () => void;
  setThemeMode: (mode: ThemeMode) => void;
};

const lightTheme: ThemePalette = {
  background: "#F4F7FB",
  surface: "#FFFFFF",
  card: "#EAF1F8",
  text: "#16212F",
  muted: "#607085",
  accent: "#206291",
  border: "#D7E0EA",
  input: "#E9EEF5",
};

const darkTheme: ThemePalette = {
  background: "#0F1724",
  surface: "#111B2A",
  card: "#1B2A3A",
  text: "#EAF2FF",
  muted: "#A9B7C9",
  accent: "#70B7FF",
  border: "#2C3E52",
  input: "#1E2B3C",
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  const theme = useMemo(() => (isDark ? darkTheme : lightTheme), [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);
  const setThemeMode = (mode: ThemeMode) => setIsDark(mode === "dark");

  return (
    <ThemeContext.Provider value={{ isDark, theme, toggleTheme, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme debe ser utilizado dentro de ThemeProvider");
  return context;
};
