import './App.css';
import Nav from './Components/Nav';
import { ThemeContext, themes } from '../src/Contexts/theme-context';
import { useState } from 'react';

function App() {
  const [theme, toggleTheme] = useState(themes.light);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => {
          toggleTheme(theme === themes.light ? themes.dark : themes.light);
        }
      }}>
      <div className={theme === themes.light ? 'App light' : 'App dark'}>
        <Nav />
        <h1>Learning React Context</h1>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
