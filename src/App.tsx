import "./App.css";
import Nav from "./Components/Nav";
import { ThemeContext, themes } from "../src/Contexts/theme-context";
import { useState } from "react";

function App() {
  const [theme, toggleTheme] = useState(themes.light);

  return (
    <div className='App'>
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme: () => {
            toggleTheme(theme === themes.light ? themes.dark : themes.light);
          },
        }}
      >
        <Nav />
        <h1>Learning React Context</h1>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
