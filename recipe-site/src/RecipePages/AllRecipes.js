import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AllRecipes.css';

const importAll = (r) => {
    let images = {};
    // eslint-disable-next-line
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
};

const images = importAll(require.context('../Images', false, /\.(png|jpe?g|svg)$/));

const AllRecipes = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const recipesPerPage = 12;

    const recipeImages = [
        { url: images['spaghetti.png'], alt: 'Spaghetti and Meatballs - Traditional Italian dish with pasta and savory meatballs', link: '/spaghetti-and-meatballs' },
        { url: images['chicktacos.png'], alt: 'Chicken Tacos - Deliciously seasoned chicken in tortillas', link: '/chicken-tacos' },
        { url: images['chocochip.png'], alt: 'Chocolate Chip Cookie - Homemade sweet treat with chocolate chips', link: '/chocolate-chip-cookie' },
        { url: images['tsochicken.png'], alt: 'General Tso Chicken - Sweet and spicy Chinese dish', link: '/general-tso-chicken' },
        { url: images['potatoes.png'], alt: 'Mashed Potatoes - Creamy side dish made from potatoes', link: '/mashed-potatoes' },
        { url: images['redvelvet.png'], alt: 'Red Velvet Cake - Rich and moist cake with cream cheese frosting', link: '/red-velvet-cake' },
        { url: images['chickpeacurry.png'], alt: 'Chickpea Curry - Flavorful vegetarian curry with chickpeas', link: '/chickpea-curry' },
        { url: images['eggrollinbowl.png'], alt: 'Egg Roll in a Bowl - All the flavors of an egg roll without the wrapper', link: '/egg-roll-in-a-bowl' },
        
// { url: images['baklava.jpg'], alt: 'Baklava - Sweet pastry made of layers of filo filled with nuts', link: '/baklava' },
// { url: images['culture.jpg'], alt: 'Cultural Dish - A representation of diverse cultural cuisine', link: '/cultural-dish' },
// { url: images['curriedtomatolentil.jpg'], alt: 'Curried Tomato Lentil Soup - Hearty soup with lentils and tomatoes', link: '/curried-tomato-lentil-soup' },
// { url: images['easy.jpg'], alt: 'Easy Recipe - Quick and simple dish for busy days', link: '/easy-recipe' },
// { url: images['honeygarlicglazedsalmon.jpg'], alt: 'Honey Garlic Glazed Salmon - Tender salmon fillet with sweet garlic glaze', link: '/honey-garlic-glazed-salmon' },
// { url: images['macandcheese.jpg'], alt: 'Mac and Cheese - Classic comfort food with cheesy pasta', link: '/mac-and-cheese' },
// { url: images['pastasausage.jpg'], alt: 'Pasta with Sausage - Pasta dish with savory sausage and tomato sauce', link: '/pasta-with-sausage' },

    ];

    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = recipeImages.slice(indexOfFirstRecipe, indexOfLastRecipe);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(recipeImages.length / recipesPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < pageNumbers.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div>
            <section className="food-section">
                <div className="image-container">
                    <img id="image" src={images['food.jpg']} alt="food_background" />
                    <div className="image-text">
                        <h2 id='title1'>Crafty Recipes</h2>
                        <p id="title2">Updated Daily</p>
                    </div>
                </div>
            </section>

            <div className="image-grid">
                {currentRecipes.map((image, index) => (
                    <div key={index} className="image-item">
                        <Link to={image.link}>
                            <img src={image.url} alt={image.alt} />
                            <div className="overlay-text">{image.alt}</div>
                        </Link>
                    </div>
                ))}
            </div>

            <div className="pagination">
                <button onClick={handlePrev} disabled={currentPage === 1}>&laquo;</button>
                {pageNumbers.map(number => (
                    <button key={number} onClick={() => paginate(number)} className={currentPage === number ? 'active' : ''}>
                        {number}
                    </button>
                ))}
                <button onClick={handleNext} disabled={currentPage === pageNumbers.length}>&raquo;</button>
            </div>
        </div>
    );
};

export default AllRecipes;