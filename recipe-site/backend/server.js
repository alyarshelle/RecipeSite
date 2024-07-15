const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const multer = require('multer');

const app = express();
const PORT = 3002;

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000', // Adjust as needed for your frontend URL
}));

app.use('/uploads', express.static('uploads')); // Serve uploaded files

const recipesFilePath = path.join("/workspaces/RecipeSite/recipe-site/data/recipes.json");

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Directory where uploaded files will be stored
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Unique file name generation
    }
});

const upload = multer({ storage: storage });

// Helper function to get the next available ID
function getNextId(recipes) {
    return recipes.length > 0 ? Math.max(...recipes.map(recipe => recipe.id)) + 1 : 1;
}

// Route handler to submit a recipe with image
app.post('/submit', upload.single('imageFile'), (req, res) => {
    const { body, file } = req;

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

        const id = getNextId(recipes);

        const newRecipe = {
            id,
            ...JSON.parse(body.recipeData),
            imageUrl: file ? `/uploads/${file.filename}` : '', // Save image URL if file uploaded
        };

        recipes.push(newRecipe);

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
