import React from "react";
import { ThemeContext, themes } from "../Contexts/theme-context";
import Switch from "./Switch";

const Nav: React.FC = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <nav className={theme === themes.light ? "nav light" : "nav dark"}>
          <ul className='list'>
            <li>Home</li>
            <li>About</li>
            <li>Info</li>
            <li className='togle'>
              <Switch />
            </li>
          </ul>
        </nav>
      )}
    </ThemeContext.Consumer>
  );
};

export default Nav;
