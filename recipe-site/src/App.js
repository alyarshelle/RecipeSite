// App.js
import React from 'react';
import './App.css'; 
import Navbar from './Navbar'; // Import the Navbar component
import LandingPage from './LandingPage';
import AllRecipes from './AllRecipes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage /> 
      <AllRecipes />
    </div>
  );
}

export default App;