import React from 'react';
import './App.css';

import { Router } from "@reach/router";
import Home from './Components/Home';
import Search from './Components/Search';

function App() {
  return (
    <div className = "App">
      <Router className = "router-height">
        <Home path = {process.env.PUBLIC_URL + '/'} />
        <Search path = "/search" />
      </Router>
    </div>
  );
}

export default App;
