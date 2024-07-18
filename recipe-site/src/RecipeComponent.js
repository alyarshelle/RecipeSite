import React, { useState, useEffect } from 'react';
import { BrowserRouter as Route, Switch, Link } from 'react-router-dom';
import './RecipePages/Recipe.css';
import RecipeSubpage from './RecipeSubpage';

function RecipeComponent() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchSubmittedRecipes();
  }, []); // Empty dependency array
  
  const fetchSubmittedRecipes = async () => {
    try {
      const response = await fetch('/recipes', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        setRecipes(data);
      } else {
        console.error('Failed to fetch submitted recipes:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error fetching submitted recipes:', error);
    }
  };

  return (
      <Switch>
        <Route exact path="/">
          <div className="header">
            <h1>Recipes</h1>
          </div>
          <div style={{ marginBottom: '20px' }}>
            {recipes.map(recipe => (
              <div key={recipe.link}>
                <Link to={`/recipe/${recipe.link}`}>
                  <h3>{recipe.title}</h3>
                </Link>
              </div>
            ))}
          </div>
        </Route>
        {recipes.map(recipe => (
          <Route key={recipe.link} path={`/recipe/${recipe.link}`}>
            <RecipeSubpage recipe={recipe} />
          </Route>
        ))}
      </Switch>
  );
}

export default RecipeComponent;