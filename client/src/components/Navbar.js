import React from 'react';
import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <div className="navbar">
        <NavLink className="projectTitle" to="/">Crowdfunding</NavLink>
        <ul>
          <li>
            <NavLink to="/login">Log In</NavLink>
          </li>
          <li>
          <NavLink to="/signup">Sign up</NavLink>
          </li>
        </ul>
    </div>
  );
}

export default Navbar;
