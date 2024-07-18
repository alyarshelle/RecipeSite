import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <header>
        <h1>About My Recipe Website</h1>
      </header>
      <section>
        <h2>Overview</h2>
        <p>
          Welcome to my Recipe Website, your go-to destination for discovering, sharing, and enjoying delicious recipes from 
          around the world. My platform is designed to make cooking and sharing recipes easy, fun, and interactive for everyone.
        </p>
      </section>
      <section>
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Recipe Information Display: </strong> 
            My website showcases detailed information for a wide variety of recipes, including ingredients, instructions, and 
            nutritional facts.
          </li>
          <li>
            <strong>User-Submitted Recipes: </strong> 
            Users can contribute their own recipes by submitting a JSON file. These submissions are processed and stored in my 
            backend data folder for easy access and manipulation.
          </li>
          <li>
            <strong>Image Handling: </strong> 
            I ensure only .jpg images are accepted for recipe submissions. Users are notified with appropriate error messages if 
            they attempt to upload unsupported file types.
          </li>
          <li>
            <strong>Dynamic Image Display: </strong> 
            My website features various display techniques for recipe images, including text overlays and fading effects, 
            enhancing the visual appeal and user experience.
          </li>
          <li>
            <strong>Dynamic Recipe Linking: </strong> 
            Submitted recipes are dynamically created and linked within the website, allowing users to easily view and navigate 
            through newly added recipes.
          </li>
          <li>
            <strong>Pagination: </strong> 
            My "All Recipes" page includes pagination, ensuring a smooth and organized browsing experience by displaying a 
            limited number of recipes per page.
          </li>
        </ul>
      </section>
      <section>
  <h2>Additional Features for the Future</h2>
  <ul>
    <li>
      <strong>All Recipes:</strong>
      <ul>
        <li>Dynamically add recipes including a short description to be used on this page to describe each recipe.</li>
        <li>Dynamically add recipe links and images to be called and formatted accordingly.</li>
      </ul>
    </li>
    <li>
      <strong>Layout:</strong>
      <ul>
        <li>Ensuring browser layout stays the same regardless of window size.</li>
      </ul>
    </li>
    <li>
      <strong>Recipes:</strong>
      <ul>
        <li>Adding recipes by category.</li>
        <li>Filtering recipes by words, category, rating, difficulty, etc.</li>
        <li>Search feature for certain recipes.</li>
        <li>Track recently clicked recipes.</li>
        <li>Add a rating system to update ratings for recipes.</li>
        <li>Seeing recipes that you have added.</li>
      </ul>
    </li>
  </ul>
</section>

      <footer>
        <p>
          Thank you for visiting my Recipe Website. I hope you enjoy using my platform as much as I enjoyed creating it. Happy
          cooking!
        </p>
      </footer>
    </div>
  );
};

export default About;
