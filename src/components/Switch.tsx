import React from 'react';
import { ThemeContext, themes } from '../Contexts/theme-context';

const Switch: React.FC = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <>
          {theme === themes.light ? <span>Dark</span> : <span>Light</span>}
          <input type="checkbox" id="switch" />
          <label
            style={{ background: theme }}
            htmlFor="switch"
            onClick={toggleTheme}>
            Toggle
          </label>
        </>
      )}
    </ThemeContext.Consumer>
  );
};

export default Switch;
