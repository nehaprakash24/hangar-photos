import React from 'react';
import './App.css';
import { Router, Link } from "@reach/router";
import Home from './Components/Home';
import Search from './Components/Search';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Search path="/search" />
      </Router>
    </div>
  );
}

export default App;
