import React, { useState } from "react";

export const themeContext = React.createContext({});

const Provider = themeContext.Provider;

export const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // useMemo, useCallback  ????????????

  const value = { theme, switchTheme };
  
  return <Provider value={value}>{children}</Provider>;
};
