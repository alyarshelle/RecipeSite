import React from 'react';
import redVelvetCakeImage from '../../Images/redvelvet.png';
import '../Recipe.css';

function RedVelvetCake() {
  return (
    <div className="recipe-container">
      <h1>Red Velvet Cake</h1>
      <div className="image-info-container">
        <img id="image" src={redVelvetCakeImage} alt="Red Velvet Cake" className="bordered-image" />
        <div className="description">
          <p>
            Red Velvet Cake is a decadent dessert known for its striking red color and rich, moist texture. Made with cocoa 
            powder, buttermilk, and a hint of vinegar, this cake has a unique flavor profile that is both tangy and sweet. 
            The addition of red food coloring gives it its iconic hue, making it a visually stunning treat for any occasion.
          </p>
          <p>
            What makes Red Velvet Cake truly special is its versatility. It can be layered with cream cheese frosting, 
            frosted with buttercream, or served plain with a dusting of powdered sugar. Its vibrant color and velvety texture 
            make it a favorite choice for birthdays, weddings, and holidays, bringing joy and indulgence to celebrations. 
            Whether enjoyed with a hot cup of coffee or as a centerpiece dessert, Red Velvet Cake is sure to impress with 
            its unforgettable taste and elegant presentation.
          </p>
        </div>
      </div>

      <div className="info-card">
        <h2>Recipe Info</h2>
        <div className="info">
          <p><b>Rating:</b> ★★★★★</p>
          <p><b>Prep Time:</b> 30 mins</p>
          <p><b>Cook Time:</b> 25 mins</p>
          <p><b>Total Time:</b> 55 mins</p>
          <p><b>Difficulty:</b> Intermediate</p>
        </div>
      </div>

      <div className="ingredients-instructions">
        <div className="ingredients">
          <b>Ingredients:</b> 
          <ul>
            <li>2 1/2 cups all-purpose flour</li>
            <li>1 1/2 cups granulated sugar</li>
            <li>1 tsp baking soda</li>
            <li>1 tsp baking powder</li>
            <li>1 tsp salt</li>
            <li>1 cup buttermilk</li>
            <li>1 cup vegetable oil</li>
            <li>2 large eggs</li>
            <li>2 tbsp unsweetened cocoa powder</li>
            <li>1 oz red food coloring</li>
            <li>1 tsp vanilla extract</li>
            <li>1 tsp white vinegar</li>
          </ul>
        </div>
        <div className="instructions">
          <b>Instructions:</b>
          <ol>
            <li>Preheat oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.</li>
            <li>In a medium bowl, sift together flour, cocoa powder, baking soda, baking powder, and salt.</li>
            <li>In a large bowl, whisk together sugar, vegetable oil, buttermilk, eggs, food coloring, vanilla extract, and 
              vinegar until well combined.</li>
            <li>Add dry ingredients to wet ingredients and mix until smooth and well incorporated.</li>
            <li>Divide batter evenly between prepared cake pans. Bake for 25-30 minutes, or until a toothpick inserted into 
              the center comes out clean.</li>
            <li>Remove cakes from oven and let cool in pans for 10 minutes before transferring to wire racks to cool 
              completely.</li>
            <li>Frost with cream cheese frosting or your favorite frosting. Serve and enjoy this delicious Red Velvet Cake!</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RedVelvetCake;
