import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './RecipeForm.css';

function RecipeForm() {
    const [recipeData, setRecipeData] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [submissionMessage, setSubmissionMessage] = useState('');
    // eslint-disable-next-line
    const [submittedRecipe, setSubmittedRecipe] = useState(null);
 
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const parsedRecipeData = JSON.parse(recipeData);
            if (!isValidRecipe(parsedRecipeData)) {
                throw new Error('Invalid recipe format');
            }

            const formData = new FormData();
            formData.append('recipeData', JSON.stringify(parsedRecipeData)); // Stringify recipe data
            if (imageFile) {
                formData.append('imageFile', imageFile); // Append image file
            }

            const response = await fetch('/submit', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const responseData = await response.json(); // Parse response JSON
                setSubmittedRecipe(responseData); // Set submitted recipe data
                setRecipeData(''); // Clear form inputs
                setImageFile(null);
                setSubmissionMessage('Submission Successful!');
                setTimeout(() => {
                    setSubmissionMessage('');
                }, 3000);
            } else {
                console.error('Error: Please upload a .jpg file');
                setSubmissionMessage('Please upload a .jpg file');
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

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === "image/jpeg") {
            setImageFile(file);
        } else {
            setImageFile(null); // Clear image file if not .jpg
            console.error('Error: Please upload a .jpg file');
            setSubmissionMessage('Please upload a .jpg file.');
        }
    };
    

    const isValidRecipe = (recipe) => {
        return recipe && recipe.title && recipe.ingredients && recipe.instructions;
    };

    return (
        <Router>
            <div>
                <h1>Add Your Recipe Here!</h1>
                <p id="desc">Enter your recipe in JSON format as described below. Make sure your description of the recipe is at most
                    2 paragraphs and no longer than 190 words. The ingredients and instructions should be in list format. Your
                    rating should be any decimal number, to the tenths place, between 0.0 and 5.0. The prepTime, cookTime, and
                    totalTime should be in the format "X hours Y minutes" or "Y minutes" where X and Y are integers. You can also
                    abbreviate hours to "hrs" and minutes to "mins". The difficulty should be one of the following: "Very Easy", 
                    "Easy", "Medium", "Hard", or "Very Hard". The image file should be in .jpg format only.
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
                    <input type="file" onChange={handleFileChange} accept="image/*" />
                    <br />
                    <button type="submit">Submit</button>
                </form>
                {submissionMessage && <p id="mid">{submissionMessage}</p>}
            </div>
        </Router>
    );
}

export default RecipeForm;
