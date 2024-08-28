import React from 'react';
import mashedPotatoesImage from '../../Images/potatoes.png';
import '../Recipe.css';

function MashedPotatoes() {
  return (
    <div className="recipe-container">
      <h1>Mashed Potatoes</h1>
      <div className="image-info-container">
        <img id="image" src={mashedPotatoesImage} alt="Mashed Potatoes" className="bordered-image" />
        <div className="description">
          <p>
            Mashed potatoes are a beloved classic side dish that complements a wide range of meals with their creamy texture 
            and buttery flavor. Made from boiled potatoes that are mashed and whipped with butter, milk, and seasonings, this 
            dish is a staple on dinner tables worldwide. Its simplicity and versatility make it a favorite among both home 
            cooks and professional chefs alike.
          </p>
          <p>
            What sets mashed potatoes apart is their ability to enhance any meal with comfort and satisfaction. Whether served 
            alongside roast chicken, grilled steak, or as part of a holiday feast, mashed potatoes offer a comforting balance 
            of flavors and textures. Their preparation may vary from creamy to rustic, depending on personal preference and 
            regional traditions, but the essence remains the same—a dish that warms the heart and brings people together.
          </p>
        </div>
      </div>

      <div className="info-card">
        <h2>Recipe Info</h2>
        <div className="info">
          <p><b>Rating:</b> ★★★★★</p>
          <p><b>Prep Time:</b> 15 mins</p>
          <p><b>Cook Time:</b> 20 mins</p>
          <p><b>Total Time:</b> 35 mins</p>
          <p><b>Difficulty:</b> Easy</p>
        </div>
      </div>

      <div className="ingredients-instructions">
        <div className="ingredients">
          <b>Ingredients:</b> 
          <ul>
            <li>4 large potatoes, peeled and quartered</li>
            <li>1/2 cup milk</li>
            <li>4 tbsp butter</li>
            <li>Salt and pepper to taste</li>
            <li>Optional: chopped chives or parsley for garnish</li>
          </ul>
        </div>
        <div className="instructions">
          <b>Instructions:</b>
          <ol>
            <li>In a large pot, cover potatoes with cold water and add a pinch of salt. Bring to a boil over medium-high heat 
              and cook until potatoes are tender when pierced with a fork, about 15-20 minutes.</li>
            <li>Drain potatoes and return them to the pot. Add butter and milk.</li>
            <li>Using a potato masher or electric mixer, mash potatoes until smooth and creamy. Add more milk if needed to 
              achieve desired consistency.</li>
            <li>Season with salt and pepper to taste. Garnish with chopped chives or parsley if desired.</li>
            <li>Serve hot as a side dish with your favorite main course. Enjoy your homemade mashed potatoes!</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default MashedPotatoes;
