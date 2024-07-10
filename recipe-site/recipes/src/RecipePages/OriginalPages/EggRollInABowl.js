import React from 'react';
import eggRollInABowlImage from '../../Images/eggrollinbowl.png';
import '../Recipe.css';

function EggRollInABowl() {
  return (
    <div className="recipe-container">
      <h1>Egg Roll in a Bowl</h1>
      <div className="image-info-container">
        <img id="image" src={eggRollInABowlImage} alt="Egg Roll in a Bowl" className="bordered-image" />
        <div className="description">
          <p>
            Egg Roll in a Bowl is a quick and delicious alternative to traditional egg rolls, featuring all the flavors of 
            an egg roll without the wrapper. This low-carb dish is packed with ground pork or turkey, shredded cabbage, 
            carrots, and a savory sauce. It's easy to prepare and perfect for a satisfying weeknight dinner.
          </p>
          <p>
            What makes Egg Roll in a Bowl a favorite is its simplicity and versatility. You can customize the ingredients 
            to suit your taste preferences, adding ingredients like mushrooms or bell peppers for extra flavor and nutrition. 
            The dish cooks in one skillet, making cleanup a breeze. Egg Roll in a Bowl is a nutritious and flavorful meal 
            that's sure to become a staple in your kitchen.
          </p>
        </div>
      </div>

      <div className="info-card">
        <h2>Recipe Info</h2>
        <div className="info">
          <p><b>Rating:</b> ★★★★☆</p>
          <p><b>Prep Time:</b> 10 mins</p>
          <p><b>Cook Time:</b> 20 mins</p>
          <p><b>Total Time:</b> 30 mins</p>
          <p><b>Difficulty:</b> Easy</p>
        </div>
      </div>

      <div className="ingredients-instructions">
        <div className="ingredients">
          <b>Ingredients:</b> 
          <ul>
            <li>1 lb ground pork or turkey</li>
            <li>1 small head of cabbage, shredded</li>
            <li>1 cup shredded carrots</li>
            <li>3 cloves garlic, minced</li>
            <li>1 tbsp sesame oil</li>
            <li>2 tbsp soy sauce or tamari</li>
            <li>1 tbsp rice vinegar</li>
            <li>1 tsp ginger, grated</li>
            <li>Salt and pepper to taste</li>
            <li>Green onions and sesame seeds for garnish</li>
          </ul>
        </div>
        <div className="instructions">
          <b>Instructions:</b>
          <ol>
            <li>In a large skillet, heat sesame oil over medium heat. Add garlic and cook until fragrant, about 1 minute.</li>
            <li>Add ground pork or turkey to the skillet. Cook until browned and cooked through, breaking it apart with a 
              spoon as it cooks.</li>
            <li>Add shredded cabbage and carrots to the skillet. Stir-fry for 5-7 minutes until vegetables are tender-crisp.</li>
            <li>In a small bowl, whisk together soy sauce, rice vinegar, and grated ginger. Pour over the skillet mixture 
              and toss to combine.</li>
            <li>Season with salt and pepper to taste. Garnish with green onions and sesame seeds.</li>
            <li>Serve hot and enjoy this delicious Egg Roll in a Bowl!</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default EggRollInABowl;
