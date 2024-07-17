const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3002;

app.use(bodyParser.json());
// app.use(cors({
//   origin: 'http://localhost:3000',
// }));
app.use(cors());

const recipesFilePath = path.join("/workspaces/RecipeSite/recipe-site/data/recipes.json");

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

// Route handler to submit a recipe with image
app.post('/submit', (req, res) => {
    const { body, file } = req;

    fs.readFile(recipesFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        console.log(data);

        let recipes = [];
        try {
            if (data.trim()) {
                recipes = JSON.parse(data).recipes || [];
            }
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        const id = getNextId(recipes); // Get the next available ID

        console.log(recipes);

        recipes.push({
            id,
            title,
            description,
            rating,
            prepTime,
            cookTime,
            totalTime,
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
