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
            <strong>Responsive Design:</strong> My website is designed to be fully responsive, providing an optimal viewing 
            experience across all devices, from desktops to mobile phones.
          </li>
          <li>
            <strong>Interactive User Interface:</strong> I prioritize user engagement by implementing interactive UI elements, 
            such as hover effects and clickable cards, to make navigation intuitive and enjoyable.
          </li>
          <li>
            <strong>Robust Backend:</strong> My backend infrastructure is built using Node.js and Express.js, ensuring efficient 
            handling of data submissions, storage, and retrieval.
          </li>
          <li>
            <strong>Enhanced User Experience:</strong> I continuously work on improving the user experience by incorporating 
            feedback and staying updated with the latest web development trends and technologies.
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
