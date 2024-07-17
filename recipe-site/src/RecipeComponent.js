import React, { useState, useEffect } from 'react';
import { BrowserRouter as Route, Switch, Link, useLocation } from 'react-router-dom';
import './RecipePages/Recipe.css';
import RecipeSubpage from './RecipeSubpage';

function RecipeComponent() {
  const [recipes, setRecipes] = useState([]);
  const location = useLocation();

  useEffect(() => {
    // Fetch submitted recipes whenever the route changes
    fetchSubmittedRecipes();
  }, [location.pathname]); // Add location.pathname as a dependency

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
        console.error('Failed to fetch submitted recipes');
      }
    } catch (error) {
      console.error('Error fetching submitted recipes:', error);
    }
  };

  return (
    <div style={{ backgroundColor: '#b5651d', minHeight: '100vh', position: 'relative' }}>
        <Switch>
          <Route exact path="/">
              <div className="header">
                <h1>Recipes</h1>
              </div>
              <div style={{ marginBottom: '20px' }}>
                {recipes.map(recipe => (
                  <div key={recipe.title}>
                    <Link to={`/recipe/${recipe.title}`}>
                      <h3>{recipe.title}</h3>
                    </Link>
                  </div>
                ))}
              </div>
          </Route>
          {recipes.map(recipe => (
            <Route key={recipe.title} path={`/recipe/${recipe.title}`}>
              <RecipeSubpage recipe={recipe} />
            </Route>
          ))}
        </Switch>
    </div>
  );
}

export default RecipeComponent;