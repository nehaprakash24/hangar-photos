import React, { Component } from 'react';
import { Link } from "@reach/router";

export class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/search">
          Hangar Worldwide
        </Link>
      </div>
    )
  }
}

export default Home
