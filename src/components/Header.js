import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
let check = 'true';
let notcheck = 'false';
const Header = () => (
  <header>
    <h2>List of React Projects</h2>
   
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/helloreact' target="_blank">Hello World</Link></li>
        <li><Link to='/toggle' target="_blank">React Toggle button example</Link></li>
        <li><Link to='/temperature' target="_blank">Temperature - example that demonstrates lifting state</Link></li>
        <li><Link to='/clock' target="_blank">Clock</Link></li>
        <li><Link to='/warning' target="_blank">Warning</Link></li>
        <li><Link to='/pizza' target="_blank">Pizza</Link></li>
        <li><Link to='/flavorform' target="_blank">FlavorForm</Link></li>
        <li><Link to='/todo' target="_blank">todo - uses local storage to store your todo list</Link></li>
        <li><Link to='/login' target="_blank">Log In project</Link></li>
        <li><Link to='/game' target="_blank">Game - TikTakToe</Link></li>
        <li><Link to='/SignIn' target="_blank">SignIn - simple local storage example</Link></li>
        <li><Link to='/thinkinginreact' target="_blank">Thinking in React</Link></li>
        
        
      </ul>
    </nav>
  </header>
)

export default Header
