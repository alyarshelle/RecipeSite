// Navbar.js
import React from 'react';
import './navbarStyles.css'; // Import CSS file for styling if needed

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <h1>Crafty Kitchen</h1>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about">About</a>
          </li>
          <li className="nav-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
