import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

function RecipeForm() {
    const [recipeData, setRecipeData] = useState('');
    const [submissionMessage, setSubmissionMessage] = useState('');
    const [imageData, setImageData] = useState('');
    const [submittedRecipe, setSubmittedRecipe] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const parsedRecipeData = JSON.parse(recipeData);
            console.log("HEYO");
            console.log(JSON.parse(recipeData));

            if (!isValidRecipe(parsedRecipeData)) {
                console.log("HEO");
                throw new Error('Invalid recipe format');
            }

            console.log("HEY");

            parsedRecipeData.image = imageData;

            const response = await fetch('/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(parsedRecipeData),
            });

            console.log("HO");

            if (response.ok) {
                setSubmittedRecipe(parsedRecipeData);
                setRecipeData('');
                setImageData('');
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

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageData(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Router>
        <div>
            <h1>Add Your Recipe Here!</h1>
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
                    cols={50}
                />
                <br />
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
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
