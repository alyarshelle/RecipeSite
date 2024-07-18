import React from 'react';
import chickenTacosImage from '../../Images/chicktacos.png';
import '../Recipe.css';

function ChickenTacos() {
  return (
    <div className="recipe-container">
      <h1>Chicken Tacos</h1>
      <div className="image-info-container">
        <img id="image" src={chickenTacosImage} alt="Chicken Tacos" className="bordered-image" />
        <div className="description">
        <p>
            Chicken tacos are a beloved culinary delight known for their delicious blend of tender, seasoned chicken, vibrant 
            toppings, and a medley of flavorful sauces. These versatile tacos are perfect for any occasion, whether it's a casual 
            weeknight dinner or a festive gathering with friends and family. You can customize them to your liking, opting for 
            traditional accompaniments like salsa and guacamole or experimenting with unique flavors.
        </p>
        <p>
            What makes chicken tacos truly special is their ability to cater to everyone's taste preferences with minimal effort. 
            With just a handful of essential ingredients and your preferred toppings, you can effortlessly whip up a dish that's 
            guaranteed to please. Whether you're hosting a lively party or enjoying a quiet meal at home, chicken tacos offer a 
            delightful combination of flavors and textures that never disappoint.Their popularity transcends culinary trends, making them a timeless favorite that continues to evoke fond memories and
            create new ones. Easy to prepare yet incredibly satisfying, chicken tacos embody the essence of comfort food, providing
            a savory experience that leaves a lasting impression.
         </p>
        </div>
      </div>

      <div className="info-card">
        <h2>Recipe Info</h2>
        <div className="info">
          <p><b>Rating:</b> ★★★★★</p>
          <p><b>Prep Time:</b> 15 mins</p>
          <p><b>Cook Time:</b> 20 mins</p>
          <p><b>Total Time:</b> 35 mins</p>
          <p><b>Difficulty:</b> Easy</p>
        </div>
      </div>

      <div className="ingredients-instructions">
        <div className="ingredients">
          <b>Ingredients:</b> 
          <ul>
            <li>1 lb chicken breast, thinly sliced</li>
            <li>1 tbsp olive oil</li>
            <li>1 packet taco seasoning</li>
            <li>8 small tortillas</li>
            <li>1 cup shredded lettuce</li>
            <li>1 cup diced tomatoes</li>
            <li>1 cup shredded cheddar cheese</li>
            <li>1/2 cup sour cream</li>
            <li>Salt and pepper to taste</li>
          </ul>
        </div>
        <div className="instructions">
          <b>Instructions:</b>
          <ol>
            <li>Heat olive oil in a skillet over medium-high heat. Add chicken breast slices and cook until fully cooked through, about 5-7 minutes.</li>
            <li>Season chicken with taco seasoning, stirring to coat evenly. Cook for an additional 2-3 minutes, until chicken is well-seasoned and slightly caramelized.</li>
            <li>Warm tortillas in a separate skillet or in the microwave until soft and pliable.</li>
            <li>Assemble tacos by placing chicken slices onto warmed tortillas. Top with shredded lettuce, diced tomatoes, shredded cheese, and sour cream.</li>
            <li>Optional: Add salsa, guacamole, or your favorite taco toppings.</li>
            <li>Serve hot and enjoy these delicious homemade chicken tacos!</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ChickenTacos;
