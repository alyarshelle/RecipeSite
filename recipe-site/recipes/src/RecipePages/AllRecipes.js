import React from 'react';
import food from '../Images/food.jpg';
import spaghet from '../Images/spaghetti.png';
import chicktaco from '../Images/chicktacos.png';
import chipcookie from '../Images/chocochip.png';
import redvelvet from '../Images/redvelvet.png';
import tsochicken from '../Images/tsochicken.png';
import potatoes from '../Images/potatoes.png';
import chickpeacurry from '../Images/chickpeacurry.png';
import eggrollbowl from '../Images/eggrollinbowl.png';
import baklava from '../Images/baklava.jpg';
import culture from '../Images/culture.jpg';
import crepes from '../Images/crepes.jpg';
import curriedtomato from '../Images/curriedtomatolentil.jpg';
import easy from '../Images/easy.jpg';
import honeygarlic from '../Images/honeygarlicglazedsalmon.jpg';
import mac from '../Images/macandcheese.jpg';
import mediterranean from '../Images/mediterraneanchoppedsalad.jpg';
import pastasaus from '../Images/pastasausage.jpg';
import './AllRecipes.css';

const AllRecipes = () => {
    const recipeImages = [
        { url: spaghet, alt: 'Spaghetti' },
        { url: chicktaco, alt: 'Chicken Tacos' },
        { url: chipcookie, alt: 'Chocolate Chip Cookie' },
        { url: tsochicken, alt: 'General Tso Chicken' },
        { url: potatoes, alt: 'Mashed Potatoes' },
        { url: redvelvet, alt: 'Red Velvet Cake' },
        { url: chickpeacurry, alt: 'Chickpea Curry' },
        { url: eggrollbowl, alt: 'Egg Roll in a Bowl' },
        { url: baklava, alt: 'Baklava' },
        { url: culture, alt: 'Cultural Dish' },
        { url: crepes, alt: 'Crepes' },
        { url: curriedtomato, alt: 'Curried Tomato Lentil Soup' },
        { url: easy, alt: 'Easy Recipe' },
        { url: honeygarlic, alt: 'Honey Garlic Glazed Salmon' },
        { url: mac, alt: 'Mac and Cheese' },
        { url: mediterranean, alt: 'Mediterranean Chopped Salad' },
        { url: pastasaus, alt: 'Pasta with Sausage' },
    ];

    return (
        <div>
            <section className="food-section">
                <div className="image-container">
                    <img id="image" src={food} alt="food_background"/>
                    <div className="image-text">
                        <h2 id='title1'>Crafty Recipes</h2>
                        <p id="title2">Updated Daily</p>
                    </div>
                </div>
            </section>

            <div className="image-grid">
                {recipeImages.map((image, index) => (
                    <div key={index} className="image-item">
                        <img src={image.url} alt={image.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllRecipes;
