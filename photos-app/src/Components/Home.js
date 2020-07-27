import React, { Component } from 'react';

import { Link } from "@reach/router";

import '../assets/scss/Home.scss';
import HangarLogo from '../assets/svg/hangar_logo_large.svg';

export class Home extends Component {
  render() {
    return (
      <div className = "mainclass">
        <div className = "home">
          <Link to = "/search">
            <img src = {HangarLogo} alt = "Hangar Logo" className="img-fluid"/>
          </Link>
        </div>
      </div>
    )
  }
}

export default Home
