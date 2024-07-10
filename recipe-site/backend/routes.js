const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.use(express.json());


// Define the file path for recipes.json
const recipesFilePath = path.join("/workspaces/RecipeSite/recipe-site/data/recipes.json");

// Function to handle fetching recipes
function getRecipes(req, res) {

    // Read the contents of the JSON file
    fs.readFile(recipesFilePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        // Parse the JSON data and send it as a response
        const recipes = JSON.parse(data);
        res.json(recipes);
    });
}


// Route for fetching recipes
router.get("/recipes", getRecipes);

// Function to handle submitting a recipe
function submitRecipe(req, res) {
    // Assuming you're receiving recipe data in the request body
    const { title, description, rating, prepTime, cookTime, totalTime, difficulty, ingredients, instructions } = req.body;

    // Read the current recipes from the JSON file
    fs.readFile(recipesFilePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        // Parse the existing JSON data or initialize as an empty array if file is empty
        let recipes = [];
        if (data) {
            recipes = JSON.parse(data);
        }

        // Add the new recipe to the array
        recipes.push({
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

        // Write the updated recipes array back to the file
        fs.writeFile(recipesFilePath, JSON.stringify(recipes, null, 2), "utf8", (err) => {
            if (err) {
                console.error("Error writing file:", err);
                return res.status(500).json({ error: "Internal Server Error" });
            }

            // Send a response indicating success
            res.status(201).json({ message: 'Recipe submitted successfully' });
        });
    });
}

// Route for submitting a recipe
router.post("/submit", submitRecipe);

module.exports = { router, getRecipes };
