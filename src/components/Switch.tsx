import React from "react";
import { ThemeContext } from "../theme-context";

const Switch: React.FC = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <>
          <input type='checkbox' id='switch' />
          <label
            style={{ background: theme }}
            htmlFor='switch'
            onClick={toggleTheme}
          >
            Toggle
          </label>
        </>
      )}
    </ThemeContext.Consumer>
  );
};

export default Switch;
