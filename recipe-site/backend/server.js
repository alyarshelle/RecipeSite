const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3002;

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3002',
}));

const recipesFilePath = path.join("/workspaces/RecipeSite/recipe-site/data/recipes.json");

// Helper function to get the next available ID
function getNextId(recipes) {
    return recipes.length > 0 ? Math.max(...recipes.map(recipe => recipe.id)) + 1 : 1;
  }

app.get('/', (req, res) => {
    res.redirect('/recipes');
 });

 // Define a route handler for GET requests to fetch recipes
app.get('/recipes', (req, res) => {
    fs.readFile(recipesFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      let recipes = [];
      try {
        if (!data.trim()) {
          return res.status(200).json(recipes); // Return empty array if file is empty or not found
        }
        
        recipes = JSON.parse(data).recipes || [];
      } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      res.status(200).json(recipes);
    });
  });
  
  
  app.post('/', (req, res) => {
    res.redirect('/submit');
  });

  app.post('/submit',(req, res) => {
    console.log(req.body);
    const { title, description, rating, prepTime, cookTime, totalTime, difficulty, ingredients, instructions } = req.body;
  
    // Retrieve uploaded image file path
    const image = req.file ? req.file.path : null;
  
    fs.readFile(recipesFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      let recipes = [];
      try {
        if (!data.trim()) {
          console.warn('Recipes data not found or empty');
        } else {
          recipes = JSON.parse(data).recipes || [];
        }
      } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      const id = getNextId(recipes); // Get the next available ID
  
      recipes.push({
        id,
        title,
        description,
        rating,
        prepTime,
        cookTime,
        totalTime,
        difficulty,
        ingredients,
        instructions,
      });
  
      fs.writeFile(recipesFilePath, JSON.stringify({ recipes }, null, 2), (err) => {
        if (err) {
          console.error('Error writing file:', err);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
  
        res.status(200).json({ message: 'Recipe submitted successfully', id });
      });
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });