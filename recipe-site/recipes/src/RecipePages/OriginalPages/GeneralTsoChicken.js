import React from 'react';
import generalTsoChickenImage from '../../Images/tsochicken.png';
import '../Recipe.css';

function GeneralTsoChicken() {
  return (
    <div className="recipe-container">
      <h1>General Tso Chicken</h1>
      <div className="image-info-container">
        <img id="image" src={generalTsoChickenImage} alt="General Tso Chicken" className="bordered-image" />
        <div className="description">
          <p>
            General Tso chicken is a popular Chinese dish known for its bold flavors and crispy texture. This dish features 
            tender pieces of chicken that are lightly coated and fried until golden brown, then tossed in a sweet and savory 
            sauce. It's a favorite in Chinese restaurants and is enjoyed for its addictive combination of flavors.
          </p>
          <p>
            What makes General Tso chicken special is its balance of spicy, tangy, and sweet notes, creating a harmonious 
            culinary experience. Whether served with steamed rice or alongside stir-fried vegetables, General Tso chicken 
            satisfies cravings for both comfort food and exotic flavors. Its preparation may seem complex, but with the right 
            ingredients and techniques, you can recreate this restaurant-quality dish at home.
          </p>
        </div>
      </div>

      <div className="info-card">
        <h2>Recipe Info</h2>
        <div className="info">
          <p><b>Rating:</b> ★★★★☆</p>
          <p><b>Prep Time:</b> 20 mins</p>
          <p><b>Cook Time:</b> 15 mins</p>
          <p><b>Total Time:</b> 35 mins</p>
          <p><b>Difficulty:</b> Medium</p>
        </div>
      </div>

      <div className="ingredients-instructions">
        <div className="ingredients">
          <b>Ingredients:</b> 
          <ul>
            <li>1 lb boneless, skinless chicken thighs, cut into bite-sized pieces</li>
            <li>1/2 cup cornstarch</li>
            <li>3 tbsp vegetable oil, divided</li>
            <li>3 cloves garlic, minced</li>
            <li>1/4 cup soy sauce</li>
            <li>1/4 cup hoisin sauce</li>
            <li>2 tbsp rice vinegar</li>
            <li>2 tbsp brown sugar</li>
            <li>1 tsp sesame oil</li>
            <li>1/2 tsp red pepper flakes (optional)</li>
            <li>Sesame seeds and green onions for garnish</li>
          </ul>
        </div>
        <div className="instructions">
          <b>Instructions:</b>
          <ol>
            <li>In a large bowl, toss chicken pieces with cornstarch until evenly coated.</li>
            <li>Heat 2 tablespoons of vegetable oil in a large skillet or wok over medium-high heat.</li>
            <li>Add coated chicken pieces to the skillet in batches and cook until golden and crispy, about 4-5 minutes per side. 
              Remove chicken and drain on paper towels.</li>
            <li>In the same skillet, heat remaining tablespoon of vegetable oil. Add minced garlic and cook until fragrant, 
              about 30 seconds.</li>
            <li>Stir in soy sauce, hoisin sauce, rice vinegar, brown sugar, sesame oil, and red pepper flakes (if using). 
              Bring to a simmer.</li>
            <li>Return cooked chicken to the skillet and toss to coat evenly with the sauce. Cook for another 2-3 minutes 
              until chicken is heated through and sauce has thickened.</li>
            <li>Remove from heat and garnish with sesame seeds and chopped green onions.</li>
            <li>Serve hot with steamed rice or vegetables. Enjoy your homemade General Tso chicken!</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default GeneralTsoChicken;
