import React from 'react';
import './RecipePages/Recipe.css'; // Ensure your CSS file is imported

function RecipeSubpage({ title, image, description, rating, prepTime, cookTime, totalTime, difficulty, ingredients, instructions }) {
  return (
    <div className="recipe-container">
      <h1>{title}</h1>
      <div className="image-info-container">
        <img src={image} alt={title} className="bordered-image" />
        <div className="description">
          <p>{description}</p>
        </div>
      </div>

      <div className="info-card">
        <h2>Recipe Info</h2>
        <div className="info">
          <p><b>Rating:</b> {rating}</p>
          <p><b>Prep Time:</b> {prepTime}</p>
          <p><b>Cook Time:</b> {cookTime}</p>
          <p><b>Total Time:</b> {totalTime}</p>
          <p><b>Difficulty:</b> {difficulty}</p>
        </div>
      </div>

      <div className="ingredients-instructions">
        <div className="ingredients">
          <b>Ingredients:</b>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="instructions">
          <b>Instructions:</b>
          <ol>
            {instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeSubpage;
