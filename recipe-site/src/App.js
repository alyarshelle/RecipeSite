import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import LandingPage from './RecipePages/LandingPage';
import AllRecipes from './RecipePages/AllRecipes';
import Spaghetti from './RecipePages/Spaghetti';

function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/all-recipes" component={AllRecipes} />
          <Route path="/spaghetti-and-meatballs" component={Spaghetti} />
        </Switch>
    </Router>
  );
}

export default App;