import React from "react";
import Switch from "./Switch";

const Nav: React.FC = () => {
  return (
    <nav className='nav'>
      <ul className='list'>
        <li>Home</li>
        <li>About</li>
        <li>Info</li>
        <li className='togle'>
          <Switch />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
