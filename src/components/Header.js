import React from "react";
import { Link } from "react-router-dom";

// The Header creates links that can be used to navigate
// between routes.

const Header = () => (
  <header>
    <h2>Trivia Static Pages</h2>

    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/LandingPage">Landing Page</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
