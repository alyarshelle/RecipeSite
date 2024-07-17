import React from 'react';
import './RecipePages/Recipe.css'; // Ensure your CSS file is imported

function RecipeSubpage({ recipe }) {
  return (
    <div className="recipe-container">
      <h1>{recipe.title}</h1>
      <div className="image-info-container">
        <img src={recipe.image} alt={recipe.title} className="bordered-image" />
        <div className="description">
          <p>{recipe.description}</p>
        </div>
      </div>

      <div className="info-card">
        <h2>Recipe Info</h2>
        <div className="info">
          <p><b>Rating:</b> {recipe.rating}</p>
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
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="instructions">
          <b>Instructions:</b>
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeSubpage;
