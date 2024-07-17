import React from 'react';
import './RecipePages/Recipe.css'; // Ensure your CSS file is imported

function rateStars(r) {
  // Round the rating to nearest half-star
  const roundedRating = Math.round(r * 2) / 2;

  // Array to store the stars JSX elements
  const stars = [];

  // Iterate through each half-star increment up to 5
  for (let i = 1; i <= 5; i++) {
    // Determine star type: full, half, or empty
    if (roundedRating >= i) {
      // Full star
      stars.push(<span key={i}>&#9733;</span>);
    } else if (roundedRating + 0.5 === i) {
      // Half star
      stars.push(<span key={i}>&#9733;&#9734;</span>);
    } else {
      // Empty star
      stars.push(<span key={i}>&#9734;</span>);
    }
  }

  // Render the stars
  return stars;
}

function RecipeSubpage({ recipe }) {
  const image = recipe.imageUrl;
  const lastIndexSlash = image.lastIndexOf('/');
  const indexDotJpg = image.indexOf('.jpg');
  const substring = image.substring(lastIndexSlash + 1, indexDotJpg);
  const imagePath = require(`./uploads/${substring}.jpg`);

  return (
    <div className="recipe-container">
      <h1>{recipe.title}</h1>
      <div className="image-info-container">
        <img src={imagePath} alt={recipe.title} className="bordered-image" />
        <div className="description">
          <p>{recipe.description[0]}</p>
          <p>{recipe.description[1]}</p>
        </div>
      </div>

      <div className="info-card">
        <h2>Recipe Info</h2>
        <div className="info">
          <p><b>Rating:</b> {rateStars(recipe.rating)}</p>
          <p><b>Prep Time:</b> {recipe.prepTime}</p>
          <p><b>Cook Time:</b> {recipe.cookTime}</p>
          <p><b>Total Time:</b> {recipe.totalTime}</p>
          <p><b>Difficulty:</b> {recipe.difficulty}</p>
        </div>
      </div>

      <div className="ingredients-instructions">
        <div className="ingredients">
          <b>Ingredients:</b>
          <ul>
            {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="instructions">
          <b>Instructions:</b>
          <ol>
            {recipe.instructions && recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeSubpage;
