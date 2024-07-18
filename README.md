# My Recipe Website

Welcome to my Recipe Website repository! This project is designed to be a comprehensive platform for discovering, sharing, and enjoying delicious recipes from around the world. Whether you're a seasoned chef or a novice cook, this website aims to make cooking and sharing recipes easy, fun, and interactive for everyone.

## Overview

My Recipe Website provides a user-friendly interface where users can explore a diverse range of recipes. Each recipe page includes detailed information such as ingredients, instructions, and nutritional facts, ensuring that users have all the information they need to create delicious meals.

## Key Features

- **Recipe Information Display**: Detailed display of recipes including ingredients, instructions, and nutritional information.
  
- **User-Submitted Recipes**: Users can contribute their own recipes by submitting a JSON file. Submitted recipes are processed and stored in the backend data folder for easy access and manipulation.
  
- **Image Handling**: Only .jpg images are accepted for recipe submissions. Error messages are displayed to users attempting to upload unsupported file types.
  
- **Dynamic Image Display**: Various techniques such as text overlays and fading effects enhance the visual appeal of recipe images.
  
- **Dynamic Recipe Linking**: Submitted recipes are dynamically created and linked within the website, allowing seamless navigation through newly added recipes.
  
- **Pagination**: The "All Recipes" page features pagination to provide a smooth browsing experience by displaying a limited number of recipes per page.

## Additional Features for the Future

- **All Recipes**: 
  - Dynamically add recipes including a short description to be used on this page to describe each recipe.
  - Dynamically add recipe links and images to be called and formatted accordingly.

- **Layout**:
  - Ensuring browser layout stays the same regardless of window size.

- **Recipes**:
  - Adding recipes by category.
  - Filtering recipes by words, category, rating, difficulty, etc.
  - Search feature for certain recipes.
  - Track recently clicked recipes.
  - Add a rating system to update ratings for recipes.
  - Seeing recipes that you have added.


## Getting Started

To get started with My Recipe Website:

1. Clone this repository: `git clone https://github.com/your-username/recipe-website.git`
2. Install dependencies: cd to "/workspaces/recipe-site" then type `npm install` & `npm install react bootstrap`
3. Start the development server: cd to "/workspaces/recipe-site" then type `npm start` in the terminal
4. Start the backend server: cd to "/workspaces/recipe-site/backend" then type `node server.js`
5. Explore and enjoy discovering new recipes!

## Feedback

Feedback and suggestions are highly appreciated. If you have any ideas to improve this project or encounter any issues, please feel free to open an issue or reach out to me directly.
