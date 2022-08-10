import React from "react";

export const themes = {
  light: "#dad355",
  dark: "grey",
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {
    console.log("toggled");
  },
});
