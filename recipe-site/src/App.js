import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import LandingPage from './RecipePages/LandingPage';
import About from './RecipePages/About';
import AllRecipes from './RecipePages/AllRecipes';
import Spaghetti from './RecipePages/OriginalPages/Spaghetti';
import ChickenTacos from './RecipePages/OriginalPages/ChickenTacos';
import ChocolateChipCookies from './RecipePages/OriginalPages/ChocolateChipCookies';
import GeneralTsoChicken from './RecipePages/OriginalPages/GeneralTsoChicken';
import MashedPotatoes from './RecipePages/OriginalPages/MashedPotatoes';
import RedVelvetCake from './RecipePages/OriginalPages/RedVelvetCake';
import ChickpeaCurry from './RecipePages/OriginalPages/ChickpeaCurry';
import EggRollInABowl from './RecipePages/OriginalPages/EggRollInABowl';
import RecipeForm from './RecipeForm';
import RecipeComponent from './RecipeComponent';
import RecipeSubpage from './RecipeSubpage';

function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/all-recipes" component={AllRecipes} />
          <Route path="/spaghetti-and-meatballs" component={Spaghetti} />
          <Route path="/chicken-tacos" component={ChickenTacos} />
          <Route path="/chocolate-chip-cookies" component={ChocolateChipCookies} />
          <Route path="/general-tso-chicken" component={GeneralTsoChicken} />
          <Route path="/mashed-potatoes" component={MashedPotatoes} />
          <Route path="/red-velvet-cake" component={RedVelvetCake} />
          <Route path="/chickpea-curry" component={ChickpeaCurry} />
          <Route path="/egg-roll-in-a-bowl" component={EggRollInABowl} />
          <Route path="/recipe" render={() => <RecipeComponent />} />
          <Route path="recipe/:link" render={(props) => <RecipeSubpage {...props} />} />
          <Route path="/submit-recipe-form" component={RecipeForm} />
          <Route path="/about" component={About} />
        </Switch>
    </Router>
  );
}

export default App;
