// App.js
import React from 'react';
import './App.css'; 
import Navbar from './Navbar'; // Import the Navbar component
import LandingPage from './LandingPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage /> 
    </div>
  );
}

export default App;
