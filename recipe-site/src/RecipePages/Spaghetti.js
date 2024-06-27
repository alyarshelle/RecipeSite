import React from 'react';
import spaghet from '../Images/spaghetti.png';
import './Recipe.css';

function Spaghetti() {
  return (
    <div className="recipe-container">
      <h1>Spaghetti and Meatballs</h1>
      <div className="image-info-container">
        <img id="image" src={spaghet} alt="Spaghetti and Meatballs" className="bordered-image" />
        <div className="description">
          <p>
            Spaghetti and meatballs is a beloved classic comfort food that brings warmth and joy to the dining 
            table. This hearty dish features tender, flavorful meatballs simmered in a rich, savory tomato sauce, served over a bed 
            of perfectly cooked spaghetti. It's a timeless favorite that combines simple ingredients to create a delicious and 
            satisfying meal. Whether you're cooking for family, entertaining guests, or simply craving a comforting dish, spaghetti 
            and meatballs is a go-to recipe that's easy to prepare and sure to please. Enjoy the delightful combination of flavors 
            and textures that make this dish a true culinary classic.
          </p>
          <p>
            This iconic dish's enduring popularity lies in its ability to transcend generations, evoking nostalgic memories and 
            forging new ones around the dinner table. Its preparation, though straightforward, carries an undeniable charm, 
            inviting cooks of all skill levels to create their own renditions. Whether enjoyed on a cozy evening at home or shared
            with friends at a bustling dinner party, spaghetti and meatballs remains a timeless favorite that nourishes both body 
            and soul, promising a culinary experience that resonates long after the last bite.
          </p>
        </div>
      </div>

      <div className="info-card">
        <h2>Recipe Info</h2>
        <div className="info">
          <p><b>Rating:</b> ★★★★☆</p>
          <p><b>Prep Time:</b> 20 mins</p>
          <p><b>Cook Time:</b> 25 mins</p>
          <p><b>Total Time:</b> 45 mins</p>
          <p><b>Difficulty:</b> Medium</p>
        </div>
      </div>

      <div className="ingredients-instructions">
        <div className="ingredients">
          <b>Ingredients:</b> 
          <ul>
            <li>1 lb spaghetti</li>
            <li>1 lb ground beef</li>
            <li>1/2 cup breadcrumbs</li>
            <li>1/4 cup grated Parmesan cheese</li>
            <li>1 egg</li>
            <li>2 cloves garlic, minced</li>
            <li>1/4 cup chopped parsley</li>
            <li>Salt and pepper to taste</li>
            <li>2 cups marinara sauce</li>
          </ul>
        </div>
        <div className="instructions">
        <b>Instructions:</b>
        <ol>
          <li>Begin by cooking the spaghetti according to the package instructions. Bring a large pot of salted water to a boil, add the spaghetti, and cook until al dente. Once cooked, drain the spaghetti and set it aside.</li>
          <li>In a mixing bowl, combine the ground beef, breadcrumbs, grated Parmesan cheese, egg, minced garlic, chopped parsley, and season with salt and pepper to taste. Use your hands or a spoon to thoroughly mix the ingredients until well combined.</li>
          <li>Heat a large skillet or frying pan over medium heat. Drizzle a bit of olive oil into the pan to prevent sticking. Form the meat mixture into small meatballs, about 1 to 1.5 inches in diameter. Place the meatballs into the heated skillet, taking care not to overcrowd them.</li>
          <li>Cook the meatballs, turning occasionally, until they are evenly browned on all sides and cooked through, about 8-10 minutes. Use a meat thermometer to ensure the internal temperature reaches 160°F (71°C).</li>
          <li>Once the meatballs are cooked, pour the marinara sauce over them in the skillet. Reduce the heat to low and let the meatballs simmer in the sauce for about 10 minutes, allowing the flavors to meld together.</li>
          <li>To serve, place a generous portion of cooked spaghetti on each plate. Top with the meatballs and sauce. Optionally, garnish with additional grated Parmesan cheese and chopped parsley. Serve hot and enjoy this delicious homemade spaghetti and meatballs!</li>
        </ol>
        </div>
      </div>
    </div>
  );
}

export default Spaghetti;
