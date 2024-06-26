import React from 'react';
import spaghet from '../Images/spaghetti.png';
import './Recipe.css';

function Spaghetti() {
  return (
    <div className="recipe-container">
      <h1>Spaghetti and Meatballs</h1>
      <img id="image" src={spaghet} alt="Spaghetti and Meatballs" className="bordered-image" />

      <div className="recipe-details">
        <b>Description:</b> Spaghetti and meatballs is a classic comfort food that's easy to make and tastes great!<br />
        <b>Ingredients:</b> 
        <ul>
          <li>1 lb spaghetti</li>
          <li>1 lb ground beef</li>
          <li>1/2 cup breadcrumbs</li>
          <li>1/4 cup grated Parmesan cheese</li>
          <li>1 egg</li>
          <li>2 cloves garlic, minced</li>
          <li>1/4 cup chopped parsley</li>
          <li>Salt and pepper to taste</li>
          <li>2 cups marinara sauce</li>
        </ul>
        <b>Instructions:</b> 
        <ol>
          <li>Cook the spaghetti according to package instructions. Drain and set aside.</li>
          <li>In a bowl, combine the ground beef, breadcrumbs, Parmesan cheese, egg, garlic, parsley, salt, and pepper. Mix well and form into meatballs.</li>
          <li>Heat a large skillet over medium heat and cook the meatballs until browned on all sides and cooked through.</li>
          <li>Add the marinara sauce to the skillet and simmer for 10 minutes.</li>
          <li>Serve the meatballs and sauce over the cooked spaghetti. Enjoy!</li>
        </ol>
      </div>

      <div className="rating-card">
        <h2>Rate this Recipe</h2>
        <div className="stars">
          ★★★★☆
        </div>
        <p>4.5/5</p>
      </div>
    </div>
  );
}

export default Spaghetti;
