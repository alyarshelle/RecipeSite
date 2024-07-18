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
const images2 = importAll(require.context('../uploads', false, /\.(jpe?g|svg)$/));
const combinedImages = { ...images, ...images2 };

const AllRecipes = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const recipesPerPage = 12;

    const recipeImages = [
        { url: combinedImages['spaghetti.png'], alt: 'Spaghetti and Meatballs - Traditional Italian dish with pasta and savory meatballs', link: '/spaghetti-and-meatballs' },
        { url: combinedImages['chicktacos.png'], alt: 'Chicken Tacos - Deliciously seasoned chicken in tortillas', link: '/chicken-tacos' },
        { url: combinedImages['chocochip.png'], alt: 'Chocolate Chip Cookie - Homemade sweet treat with chocolate chips', link: '/chocolate-chip-cookies' },
        { url: combinedImages['tsochicken.png'], alt: 'General Tso Chicken - Sweet and spicy Chinese dish', link: '/general-tso-chicken' },
        { url: combinedImages['potatoes.png'], alt: 'Mashed Potatoes - Creamy side dish made from potatoes', link: '/mashed-potatoes' },
        { url: combinedImages['redvelvet.png'], alt: 'Red Velvet Cake - Rich and moist cake with cream cheese frosting', link: '/red-velvet-cake' },
        { url: combinedImages['chickpeacurry.png'], alt: 'Chickpea Curry - Flavorful vegetarian curry with chickpeas', link: '/chickpea-curry' },
        { url: combinedImages['eggrollinbowl.png'], alt: 'Egg Roll in a Bowl - All the flavors of an egg roll without the wrapper', link: '/egg-roll-in-a-bowl' },
        
        { url: combinedImages['baklava.jpg'], alt: 'Baklava - Sweet pastry made of layers of filo filled with nuts', link: '/recipe/baklava' },
        { url: combinedImages['baobuns.jpg'], alt: 'Bao Buns - Soft and fluffy steamed buns with savory filling', link: '/recipe/bao-buns' },
        { url: combinedImages['crepes.jpg'], alt: 'Crepes - Thin pancakes filled with sweet or savory ingredients', link: '/recipe/classic-french-crepes' },
        { url: combinedImages['cupcake.jpg'], alt: 'Vanilla Cupcake - Classic sweet treat with vanilla frosting', link: '/recipe/vanilla-cupcakes' },
        { url: combinedImages['curriedtomatolentil.jpg'], alt: 'Curried Tomato Lentil Soup - Hearty soup with lentils and tomatoes', link: '/recipe/curried-tomato-lentil-soup' },
        { url: combinedImages['gnocchi.jpg'], alt: 'Gnocchi - Soft dough dumplings made from potatoes', link: '/gnocchi' },
        { url: combinedImages['honeygarlicglazedsalmon.jpg'], alt: 'Honey Garlic Glazed Salmon - Tender salmon fillet with sweet garlic glaze', link: '/recipe/honey-garlic-glazed-salmon' },
        { url: combinedImages['macandcheese.jpg'], alt: 'Mac and Cheese - Classic comfort food with cheesy pasta', link: '/recipe/mac-and-cheese' },
        { url: combinedImages['mediterraneanchoppedsalad.jpg'], alt: 'Mediterranean Chopped Salad - Fresh and flavorful salad with Mediterranean ingredients', link: '/recipe/mediterranean-chopped-salad' },
        { url: combinedImages['pastasausage.jpg'], alt: 'Pasta with Sausage - Pasta dish with savory sausage and tomato sauce', link: '/recipe/pasta-with-sausage' },
        { url: combinedImages['strawberrysorbet.jpg'], alt: 'Strawberry Sorbet - Refreshing frozen dessert made from strawberries', link: '/recipe/strawberry-sorbet' },
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