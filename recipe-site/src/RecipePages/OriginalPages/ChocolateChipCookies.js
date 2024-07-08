import React from 'react';
import chocolateChipCookieImage from '../../Images/chocochip.png';
import '../Recipe.css';

function ChocolateChipCookies() {
  return (
    <div className="recipe-container">
      <h1>Chocolate Chip Cookies</h1>
      <div className="image-info-container">
        <img id="image" src={chocolateChipCookieImage} alt="Chocolate Chip Cookies" className="bordered-image" />
        <div className="description">
          <p>
            Chocolate chip cookies are a beloved classic treat known for their delightful combination of buttery dough and 
            sweet chocolate chips. These cookies are perfect for any occasion, whether it's a casual snack, dessert after 
            dinner, or a special treat for a gathering with friends and family. What makes chocolate chip cookies truly 
            irresistible is their simplicity and universal appeal.
          </p>
          <p>
            With just a few basic ingredients and a handful of chocolate chips, you can create a batch of cookies that are sure 
            to please everyone. Whether you enjoy them warm out of the oven or dunked in milk, chocolate chip cookies offer a 
            nostalgic taste of homemade goodness that never goes out of style. Their ease of preparation and comforting flavor 
            make them a favorite among bakers of all ages.
          </p>
        </div>
      </div>

      <div className="info-card">
        <h2>Recipe Info</h2>
        <div className="info">
          <p><b>Rating:</b> ★★★★☆</p>
          <p><b>Prep Time:</b> 15 mins</p>
          <p><b>Cook Time:</b> 10 mins</p>
          <p><b>Total Time:</b> 25 mins</p>
          <p><b>Difficulty:</b> Easy</p>
        </div>
      </div>

      <div className="ingredients-instructions">
        <div className="ingredients">
          <b>Ingredients:</b> 
          <ul>
            <li>1 cup unsalted butter, softened</li>
            <li>1 cup granulated sugar</li>
            <li>1 cup packed brown sugar</li>
            <li>2 large eggs</li>
            <li>1 tsp vanilla extract</li>
            <li>3 cups all-purpose flour</li>
            <li>1 tsp baking soda</li>
            <li>1/2 tsp salt</li>
            <li>2 cups semisweet chocolate chips</li>
          </ul>
        </div>
        <div className="instructions">
          <b>Instructions:</b>
          <ol>
            <li>Preheat oven to 350°F (175°C). Line baking sheets with parchment paper.</li>
            <li>In a large bowl, cream together softened butter, granulated sugar, and brown sugar until smooth.</li>
            <li>Beat in eggs one at a time, then stir in vanilla extract.</li>
            <li>Combine flour, baking soda, and salt; gradually stir into the creamed mixture.</li>
            <li>Stir in chocolate chips.</li>
            <li>Drop by rounded spoonfuls onto prepared baking sheets.</li>
            <li>Bake for 10 to 12 minutes in the preheated oven, or until edges are golden brown.</li>
            <li>Cool on baking sheets for a few minutes before transferring to wire racks to cool completely.</li>
            <li>Enjoy these delicious homemade chocolate chip cookies!</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ChocolateChipCookies;
