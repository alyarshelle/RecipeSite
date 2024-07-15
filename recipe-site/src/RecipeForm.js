import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './RecipeForm.css';

function RecipeForm() {
    const [recipeData, setRecipeData] = useState('');
    const [submissionMessage, setSubmissionMessage] = useState('');
    const [submittedRecipe, setSubmittedRecipe] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const parsedRecipeData = JSON.parse(recipeData);
            if (!isValidRecipe(parsedRecipeData)) {
                throw new Error('Invalid recipe format');
            }

            const response = await fetch('/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(parsedRecipeData),
            });

            if (response.ok) {
                setSubmittedRecipe(parsedRecipeData);
                setRecipeData('');
                setSubmissionMessage('Submission Successful!');
                setTimeout(() => {
                    setSubmissionMessage('');
                }, 3000);
            } else {
                const errorMessage = await response.text();
                console.error('Error:', errorMessage);
                setSubmissionMessage('Error submitting recipe. Please try again.');
            }
        } catch (error) {
            if (error instanceof SyntaxError) {
                console.error('Parsing error: Malformed JSON data');
                setSubmissionMessage('Malformed JSON data. Please enter valid JSON.');
            } else {
                console.error('Error:', error);
                setSubmissionMessage('Error submitting recipe. Please try again.');
            }
        }
    };

    const isValidRecipe = (recipe) => {
        return recipe && recipe.title && recipe.ingredients && recipe.instructions;
    };

    return (
        <Router>
        <div>
            <h1>Add Your Recipe Here!</h1>
            <p>Enter your recipe in JSON format as described below. Make sure your description of the recipe is at most
                2 paragraphs and no longer than 190 words. The ingredients and instructions should be in list format.
            </p>
            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder={`Enter JSON-like data in the following format: 
                    {
                        "title": "",
                        "description": [],
                        "rating": "",
                        "prepTime": "",
                        "cookTime": "",
                        "totalTime": "",
                        "difficulty": "",
                        "ingredients": [],
                        "instructions": [],
                    }`}
                    value={recipeData}
                    onChange={(event) => setRecipeData(event.target.value)}
                    required
                    rows={20}
                    cols={100}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
            {submissionMessage && <p>{submissionMessage}</p>}
        </div>
        </Router>
    );
}

export default RecipeForm;
