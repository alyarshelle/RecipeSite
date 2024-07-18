// Navbar.js
import React from 'react';
import './navbarStyles.css'; // Import CSS file for styling if needed
import Crafty from './Images/crafty.jpg'; // Assuming this is your logo image

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <img src={Crafty} alt="The Crafty Kitchen Logo" className="navbar-logo" />
          <h1 className="navbar-text"><a href="/">The Crafty Kitchen</a></h1>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/all-recipes">Recipes</a>
          </li>
          {/* <li className="nav-item">
            <a href="/search">Search</a>
          </li> */}
          <li className="nav-item">
            <a href="/submit-recipe-form">Submit Recipe</a>
          </li>
          <li className="nav-item">
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
