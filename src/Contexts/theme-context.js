import { createContext } from "react";

export const themes = {
  light: "#dad355",
  dark: "grey",
};

export const ThemeContext = createContext({
  theme: themes.light,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {},
});
