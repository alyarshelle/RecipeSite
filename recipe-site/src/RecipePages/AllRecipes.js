import React from 'react';
import food from '../Images/food.jpg';
import './AllRecipes.css';

function AllRecipes() {
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

            <section>
                <h2>HYEO</h2>
            </section>
        </div>
    );
}

export default AllRecipes;
