import React from 'react';
import chickpeaCurryImage from '../../Images/chickpeacurry.png';
import '../Recipe.css';

function ChickpeaCurry() {
  return (
    <div className="recipe-container">
      <h1>Chickpea Curry</h1>
      <div className="image-info-container">
        <img id="image" src={chickpeaCurryImage} alt="Chickpea Curry" className="bordered-image" />
        <div className="description">
          <p>
            Chickpea Curry is a flavorful and nutritious dish that brings together tender chickpeas, aromatic spices, and 
            creamy coconut milk. This vegetarian curry is loved for its comforting warmth and satisfying texture. The blend 
            of spices like cumin, coriander, turmeric, and garam masala creates a robust flavor profile that pairs perfectly 
            with rice or naan.
          </p>
          <p>
            What makes Chickpea Curry a standout dish is its versatility and simplicity. Whether you're cooking for a quick 
            weeknight dinner or preparing a feast for guests, this curry is sure to impress. Adjust the spice level to your 
            preference and add vegetables like spinach or bell peppers for added nutrition and color. Chickpea Curry is a 
            go-to recipe that's both hearty and wholesome, making it a favorite among vegetarians and curry enthusiasts alike.
          </p>
        </div>
      </div>

      <div className="info-card">
        <h2>Recipe Info</h2>
        <div className="info">
          <p><b>Rating:</b> ★★★★☆</p>
          <p><b>Prep Time:</b> 15 mins</p>
          <p><b>Cook Time:</b> 30 mins</p>
          <p><b>Total Time:</b> 45 mins</p>
          <p><b>Difficulty:</b> Easy</p>
        </div>
      </div>

      <div className="ingredients-instructions">
        <div className="ingredients">
          <b>Ingredients:</b> 
          <ul>
            <li>2 cups cooked chickpeas (or 1 can, drained and rinsed)</li>
            <li>1 onion, finely chopped</li>
            <li>3 garlic cloves, minced</li>
            <li>1-inch piece of ginger, grated</li>
            <li>1 can coconut milk</li>
            <li>1 tbsp curry powder</li>
            <li>1 tsp ground cumin</li>
            <li>1 tsp ground coriander</li>
            <li>1/2 tsp turmeric powder</li>
            <li>1/2 tsp garam masala</li>
            <li>Salt and pepper to taste</li>
            <li>Fresh cilantro for garnish</li>
          </ul>
        </div>
        <div className="instructions">
          <b>Instructions:</b>
          <ol>
            <li>In a large skillet or pot, heat oil over medium heat. Add chopped onion, garlic, and grated ginger. Sauté until 
              onions are translucent and fragrant.</li>
            <li>Add curry powder, cumin, coriander, turmeric, and garam masala. Stir and cook for 1-2 minutes until spices are 
              fragrant.</li>
            <li>Add cooked chickpeas and coconut milk. Bring to a simmer and cook for 15-20 minutes, stirring occasionally, 
              until the curry thickens slightly.</li>
            <li>Season with salt and pepper to taste. Garnish with fresh cilantro.</li>
            <li>Serve hot with rice or naan. Enjoy this delicious and comforting Chickpea Curry!</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ChickpeaCurry;
