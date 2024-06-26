// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import AllRecipes from './AllRecipes';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/recipes" element={<AllRecipes />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


// // App.js
// import React from 'react';
// import './App.css'; 
// import Navbar from './Navbar'; // Import the Navbar component
// import LandingPage from './LandingPage';
// import AllRecipes from './AllRecipes';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <LandingPage /> 
//       <AllRecipes />
//     </div>
//   );
// }

// export default App;