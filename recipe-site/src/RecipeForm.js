import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

function RecipeForm() {
  const [recipeData, setRecipeData] = useState('');
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [submittedRecipe, setSubmittedRecipe] = useState(null);
  const [imageData, setImageData] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Include image data in the JSON string before parsing
      const recipeDataWithImage = recipeData.replace(
        /({.*?})/,
        (match) => {
          const json = JSON.parse(match);
          json.image = imageData;
          return JSON.stringify(json);
        }
      );

      const parsedRecipeData = JSON.parse(recipeDataWithImage);

      if (!isValidRecipe(parsedRecipeData)) {
        throw new Error('Invalid recipe format');
      }

      const response = await fetch('/submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsedRecipeData),
      });

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
    return recipe && recipe.name && recipe.ingredients && recipe.instructions;
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
      <div style={{ backgroundColor: 'rgb(200, 254, 254)', minHeight: '100vh', position: 'relative' }}>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h1 style={{ color: '#000' }}>Add Your Recipe Here!</h1>
          <p>Here, you will be able to enter your own recipes to add to the website. Please follow the JSON formatting
            outlined in the textbox below and upload an image of your recipe using the button below the textbox. Once submitted,
            you will be able to find your recipe in "Your Recipes" in the navigation bar.(*Tip: Make sure that your description is 
            2 parapraphs max and under 190 words.)</p>
    
            <form onSubmit={handleSubmit}>
              <textarea
                placeholder={`Enter JSON-like data in the following format: 
                {
                  "name": "",
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
                style={{ marginBottom: '20px', width: '100%' }}
              />
              <br />
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange} 
                style={{ marginBottom: '20px' }} 
              />
              <br />
              <button type="submit" style={{ backgroundColor: '#b5651d', color: '#fff', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>Submit</button>
            </form>
          {submissionMessage && <p style={{ color: 'green', marginTop: '10px' }}>{submissionMessage}</p>}
        </div>
      </div>
    </Router>
  );
}

export default RecipeForm;
