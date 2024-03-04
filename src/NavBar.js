// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className='navbar'>
    <nav>
      <ul>
        
        <li>
          <Link to="/trainings">Trainings</Link>
        </li>
        <li>
          <Link to="/match-schedule">Match Schedule</Link>
        </li>
        <li>
          <Link to="/rules">Rules</Link>
        </li>
        <li>
          <Link to="/adminlogin">Admin</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default NavBar;
