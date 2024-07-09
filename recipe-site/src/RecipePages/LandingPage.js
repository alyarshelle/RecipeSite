import React from 'react';
import Card from '../Card';
import spaghet from '../Images/spaghetti.png';
import chicktaco from '../Images/chicktacos.png';
import chipcookie from '../Images/chocochip.png';
import redvelvet from '../Images/redvelvet.png';
import tsochicken from '../Images/tsochicken.png';
import potatoes from '../Images/potatoes.png';
import chickpeacurry from '../Images/chickpeacurry.png';
import eggrollbowl from '../Images/eggrollinbowl.png';
import cupcake from '../Images/cupcake.jpg';
import culture from '../Images/culture.jpg';
import easy from '../Images/easy.jpg';
import healthy from '../Images/healthy.jpg'; 

import './LandingPage.css';

function LandingPage() {
  const recipes = [
    {
      image: spaghet,
      title: 'Spaghetti and Meatballs',
      description: "Spaghetti and meatballs is a classic comfort food that's easy to make and tastes great!",
      link: '/spaghetti-and-meatballs'
    },

    {
        image: chicktaco,
        title: 'Chicken Tacos',
        description: "Chicken tacos are a quick and easy meal that's perfect for busy weeknights.",
        link: '/chicken-tacos'
    },

    {
        image: chipcookie,
        title: 'Chocolate Chip Cookies',
        description: "Chocolate chip cookies are a delicious treat that everyone loves!",
        link: '/chocolate-chip-cookies'
    },

    {
        image: tsochicken,
        title: 'General Tso Chicken',
        description: "General Tso chicken is a popular Chinese takeout dish that's easy to make at home.",
        link: '/general-tso-chicken'
    },

    {
        image: potatoes,
        title: 'Mashed Potatoes',
        description: "Mashed potatoes are a classic side dish that pairs well with a variety of main courses.",
        link: '/mashed-potatoes'
    },

    {
        image: redvelvet,
        title: 'Red Velvet Cake',
        description: "Red velvet cake is a classic dessert that's perfect for any occasion.",
        link: '/red-velvet-cake'
    },

    {
        image: chickpeacurry,
        title: 'Chickpea Curry',
        description: "Chickpea curry is a flavorful vegetarian dish that's easy to make and tastes great!",
        link: '/chickpea-curry'
    },

    {
        image: eggrollbowl,
        title: 'Egg Roll in A Bowl',
        description: "Egg roll in a bowl is a quick and easy meal that's packed with flavor!",
        link: '/egg-roll-in-a-bowl'
    },

  ];

  return (
    <div>   
      <section>
        <h1>Simple Recipes For Your Busy Lives</h1> 
      </section>
      <section id="highlight">
        <div class="box"></div>
        <div class="image-container">
          <a href="https://example.com">
            <img src={easy} alt="Quick and Easy" class="q fade-on-hover"  />
          </a>

          <a href="https://example.com">
            <img src={healthy} alt="Healthy" class=" h fade-on-hover"/>
          </a>

          <a href="https://example.com">
            <img src={cupcake} alt="Baking" class="c fade-on-hover"/>
          </a>

          <a href="https://example.com">
            <img src={culture} alt="Cultural" class="cul fade-on-hover"/>
          </a>

          <div id="under" class="quick image-contain">
            <a href="https://example.com">Quick and Easy</a>
          </div> 

          <div id="under" class="health image-contain">
            <a href="https://example.com">Healthy</a>
          </div>

          <div id="under" class="cupcake image-contain">
            <a href="https://example.com">Baking</a>
          </div>

          <div id="under" class="culture image-contain">
            <a href="https://example.com">Cultural Cuisines</a>
          </div> 

        </div>

      </section>
      <section>
      <h2>Popular Recipes</h2>
      <div className="recipes">
        {recipes.map((recipe, index) => (
          <Card
            key={index}
            image={recipe.image}
            title={recipe.title}
            description={recipe.description}
            link={recipe.link}
          />
        ))}
      </div> 
      <br/>
        <p id="all">
          <a href="/all-recipes">Show Me More!➔</a>
        </p>   
      </section>

      {/* <section id="second">
       <h2>Recently Viewed</h2>

      <div className="recipes">
      </div>

      </section> */}
      
    </div>

    
  );
}

export default LandingPage;