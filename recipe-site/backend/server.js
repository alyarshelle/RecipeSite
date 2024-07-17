const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const multer = require('multer'); // Require multer for handling file uploads

const app = express();
const PORT = 3002;

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000',
}));

// Multer setup for handling file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/workspaces/RecipeSite/recipe-site/src/uploads'); // Ensure the correct path to your uploads directory
    },
    filename: function (req, file, cb) {
        // Use a unique filename to prevent overwriting existing files
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

const recipesFilePath = path.join("/workspaces/RecipeSite/recipe-site/data/recipes.json");

app.get('/', (req, res) => {
    res.redirect('/recipes');
});

app.get('/recipes', (req, res) => {
    fs.readFile(recipesFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        let recipes = [];
        try {
            if (!data.trim()) {
                return res.status(200).json(recipes);
            }

            recipes = JSON.parse(data).recipes || [];
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        res.status(200).json(recipes);
    });
});

app.post('/submit', upload.single('imageFile'), (req, res) => {
    const { body, file } = req;

    // Check if file was uploaded
    if (!file) {
        return res.status(400).json({ error: 'Image file is required' });
    }

    // Parse recipeData from JSON string to object
    const recipeData = JSON.parse(body.recipeData);

    // Extract fields from recipeData
    const {
        title,
        description,
        rating,
        prepTime,
        cookTime,
        totalTime,
        difficulty,
        ingredients,
        instructions,
    } = recipeData;

    // Validate required fields
    if (!title || !description || !rating || !prepTime || !cookTime || !totalTime || !difficulty || !ingredients || !instructions) {
        return res.status(400).json({ error: 'All recipe fields are required' });
    }

    fs.readFile(recipesFilePath, 'utf8', (err, data) => {
        if (err) { 
            console.error('Error reading file:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        let recipes = [];
        try {
            if (data.trim()) {
                recipes = JSON.parse(data).recipes || [];
            }
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        const link = title.toLowerCase().replace(/ /g, '-');

        // Construct the new recipe object
        const newRecipe = {
            link,
            title,
            description,
            rating,
            prepTime,
            cookTime,
            totalTime,
            difficulty,
            ingredients,
            instructions,
            imageUrl: `/uploads/${file.filename}`, // Always save image URL since file should exist
        };

        recipes.push(newRecipe);

        fs.writeFile(recipesFilePath, JSON.stringify({ recipes }, null, 2), (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            res.status(200).json({ message: 'Recipe submitted successfully'});
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
