import React from 'react';
import './App.css';
import { Link } from 'react-router5';
import { MainOutlet } from 'react-spa-middleware';

function App() {
  return (
    <div className="App">
      <p>
        <Link routeName="home">Home</Link>
      </p>
      <p>
        <Link routeName="home.garage">Garage</Link>
      </p>
      <div>
        <MainOutlet />
      </div>
    </div>
  );
}

export default App;
